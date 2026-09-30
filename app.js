// Logic ứng dụng Pháp Cú Tinh Tấn (Giao diện Thiền Môn Chuẩn Mực)

class AppState {
  constructor() {
    this.currentMode = 'full'; // 'full', 'first-letter', 'cloze', 'blind'
    this.filterChapter = 'all'; // 'all' or chapter id (1-26)
    this.filterDay = 1; // 1 to 30
    this.searchQuery = '';
    this.filteredVerses = [...DHAMMAPADA_VERSES];
    this.expandedChapterId = 1;

    // Deep linking support (?ke=123 hoặc ?v=123)
    const urlParams = new URLSearchParams(window.location.search);
    const keParam = parseInt(urlParams.get('ke') || urlParams.get('v'), 10);
    if (!isNaN(keParam) && keParam >= 1 && keParam <= 423) {
      this.currentVerseIndex = keParam - 1;
      const targetVerse = DHAMMAPADA_VERSES.find(v => v.id === keParam);
      if (targetVerse) {
        this.expandedChapterId = targetVerse.chapterId;
      }
    } else {
      const savedVerseId = parseInt(localStorage.getItem('phapcu_last_verse_id') || '1', 10);
      const validVerseId = (!isNaN(savedVerseId) && savedVerseId >= 1 && savedVerseId <= 423) ? savedVerseId : 1;
      this.currentVerseIndex = validVerseId - 1;
      const targetVerse = DHAMMAPADA_VERSES.find(v => v.id === validVerseId);
      if (targetVerse) {
        this.expandedChapterId = targetVerse.chapterId;
      }
    }
    
    this.progress = this.loadProgress();
    
    // Exam mode state
    this.examMode = false;
    this.examVerses = [];
    this.examCurrentIndex = 0;
    this.examResults = [];

    // Audio recorder state
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.recordedAudioUrl = null;
    this.isRecording = false;
  }

  loadProgress() {
    try {
      const saved = localStorage.getItem('phapcu_progress_v1');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    const init = {};
    DHAMMAPADA_VERSES.forEach(v => {
      init[v.id] = {
        status: 'unseen',
        repetitions: 0,
        nextReviewDate: null,
        lastReviewed: null
      };
    });
    return init;
  }

  saveProgress() {
    try {
      localStorage.setItem('phapcu_progress_v1', JSON.stringify(this.progress));
    } catch (e) {
      console.error(e);
    }
  }

  updateVerseStatus(verseId, status) {
    if (!this.progress[verseId]) {
      this.progress[verseId] = { status: 'unseen', repetitions: 0, nextReviewDate: null, lastReviewed: null };
    }
    const current = this.progress[verseId];
    current.status = status;
    current.lastReviewed = new Date().toISOString();
    
    if (status === 'mastered') {
      current.repetitions = (current.repetitions || 0) + 1;
      const daysToAdd = Math.min(30, Math.pow(2, current.repetitions));
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + daysToAdd);
      current.nextReviewDate = nextDate.toISOString().split('T')[0];
    } else if (status === 'learning') {
      const nextDate = new Date();
      nextDate.setDate(nextDate.getDate() + 1);
      current.nextReviewDate = nextDate.toISOString().split('T')[0];
    }
    this.saveProgress();
  }

  getStats() {
    let mastered = 0;
    let learning = 0;
    let unseen = 0;
    Object.values(this.progress).forEach(p => {
      if (p.status === 'mastered') mastered++;
      else if (p.status === 'learning') learning++;
      else unseen++;
    });
    return { mastered, learning, unseen, total: DHAMMAPADA_VERSES.length };
  }

  getVersesForDay(day) {
    const perDay = Math.ceil(DHAMMAPADA_VERSES.length / 30);
    const startId = (day - 1) * perDay + 1;
    const endId = Math.min(DHAMMAPADA_VERSES.length, day * perDay);
    return DHAMMAPADA_VERSES.filter(v => v.id >= startId && v.id <= endId);
  }
}

// Sound Synthesizer: Zen Tibetan Bell Chime using Web Audio API
class ZenAudio {
  constructor() {
    this.audioCtx = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playBell() {
    try {
      this.init();
      const ctx = this.audioCtx;
      const now = ctx.currentTime;

      const freqs = [432, 864, 1296, 1728];
      const gains = [0.6, 0.25, 0.1, 0.05];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(gains[idx], now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2 + idx * 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 4.2);
      });
    } catch (e) {
      console.warn("Audio bell could not play", e);
    }
  }
}

// UI Controller
const state = new AppState();
const zenAudio = new ZenAudio();

// Generate First Letter Representation
function toFirstLetters(lines) {
  return lines.map(line => {
    return line.split(' ').map(word => {
      if (!word) return '';
      const firstChar = word.charAt(0);
      const punctMatch = word.match(/[,.;:?!“”"()]+$/);
      const punct = punctMatch ? punctMatch[0] : '';
      return `<span class="first-letter-token" data-full="${word}" title="Nhấp để xem từ">${firstChar}___${punct}</span>`;
    }).join(' ');
  });
}

// Generate Cloze Test
function toClozeTest(lines) {
  let blankCount = 0;
  const processedLines = lines.map(line => {
    const words = line.split(' ');
    const newWords = words.map(word => {
      const cleanWord = word.replace(/[,.;:?!“”"()]/g, '');
      if (cleanWord.length > 2 && Math.random() < 0.4) {
        blankCount++;
        const punctMatch = word.match(/[,.;:?!“”"()]+$/);
        const punct = punctMatch ? punctMatch[0] : '';
        return `<input type="text" class="cloze-input" data-answer="${cleanWord.toLowerCase()}" placeholder="[...]" size="${cleanWord.length + 1}">${punct}`;
      }
      return word;
    });
    return newWords.join(' ');
  });
  return { html: processedLines.join('<br>'), count: blankCount };
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initBackground();
  renderSidebarChapters();
  renderDaysPlanSelector();
  applyFilters();
  renderCurrentVerse();
  updateProgressStats();
  setupEventListeners();
});

function renderSidebarChapters() {
  const container = document.getElementById('chapterList');
  if (!container) return;

  const currentVerse = state.filteredVerses[state.currentVerseIndex];

  container.innerHTML = DHAMMAPADA_CHAPTERS.map(ch => {
    const countInChapter = ch.count;
    let masteredCount = 0;
    for (let id = ch.range[0]; id <= ch.range[1]; id++) {
      if (state.progress[id]?.status === 'mastered') masteredCount++;
    }
    const percent = Math.round((masteredCount / countInChapter) * 100);
    const isCompleted = percent === 100;
    const isExpanded = state.expandedChapterId === ch.id;
    const isFiltered = state.filterChapter === ch.id;

    // Generate verse pills if chapter is expanded
    let dropdownHtml = '';
    if (isExpanded) {
      const pills = [];
      for (let vid = ch.range[0]; vid <= ch.range[1]; vid++) {
        const vStatus = state.progress[vid]?.status || 'unseen';
        const isCurrent = currentVerse && currentVerse.id === vid;
        const verseObj = DHAMMAPADA_VERSES.find(v => v.id === vid);
        const snippet = verseObj ? verseObj.lines[0] : '';

        let pillStyle = '';
        if (isCurrent) {
          pillStyle = 'bg-amber-700 text-white font-bold border-amber-700 ring-2 ring-amber-600 shadow-sm';
        } else if (vStatus === 'mastered') {
          pillStyle = 'bg-emerald-100/90 text-emerald-950 border-emerald-300 font-semibold hover:bg-emerald-200';
        } else if (vStatus === 'learning') {
          pillStyle = 'bg-amber-100/90 text-amber-950 border-amber-300 font-semibold hover:bg-amber-200';
        } else {
          pillStyle = 'bg-white/70 text-stone-800 border-white/60 hover:bg-white/95';
        }

        pills.push(`
          <button class="verse-dropdown-pill h-7 rounded text-[11px] font-mono transition-all flex items-center justify-center border ${pillStyle}" data-verse-id="${vid}" title="Kệ ${vid}: ${snippet}">
            ${vid}
          </button>
        `);
      }

      dropdownHtml = `
        <div class="px-2.5 pb-2.5 pt-1.5 border-t border-white/30 bg-white/20 backdrop-blur-sm">
          <div class="flex items-center justify-between mb-1.5 text-[10px] text-stone-700">
            <span>Chọn câu để học:</span>
            <button class="btn-filter-chap text-amber-900 hover:text-amber-950 font-bold transition text-[10px] underline" data-chapter-id="${ch.id}">
              ${isFiltered ? 'Đang lọc phẩm' : 'Lọc riêng phẩm'}
            </button>
          </div>
          <div class="grid grid-cols-5 gap-1.5 max-h-48 overflow-y-auto pr-0.5">
            ${pills.join('')}
          </div>
        </div>
      `;
    }

    return `
      <div class="chapter-card rounded-xl border transition-all overflow-hidden mb-1.5 ${isExpanded ? 'border-amber-400/90 bg-white/75 shadow-md backdrop-blur-md' : 'border-white/40 bg-white/40 hover:bg-white/60 backdrop-blur-sm'}">
        <div class="chapter-header p-2.5 flex items-center justify-between cursor-pointer select-none" data-chapter-id="${ch.id}">
          <div class="truncate pr-2 flex-1">
            <div class="text-xs font-semibold ${isExpanded ? 'text-amber-950' : 'text-stone-800'}">${ch.name}</div>
            <div class="text-[11px] text-stone-600">Kệ ${ch.range[0]} - ${ch.range[1]} (${countInChapter} câu)</div>
          </div>
          <div class="flex items-center space-x-1.5 flex-shrink-0">
            <span class="text-[11px] px-1.5 py-0.5 rounded font-mono ${isCompleted ? 'bg-emerald-100/90 text-emerald-900 border border-emerald-300' : 'bg-white/60 text-stone-700 border border-white/60'}">${percent}%</span>
            <svg class="w-3.5 h-3.5 text-stone-500 transform transition-transform duration-200 ${isExpanded ? 'rotate-180 text-amber-800' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>
        ${dropdownHtml}
      </div>
    `;
  }).join('');

  // Event: Toggle Accordion on Chapter Header
  container.querySelectorAll('.chapter-header').forEach(header => {
    header.addEventListener('click', () => {
      const id = parseInt(header.getAttribute('data-chapter-id'), 10);
      if (state.expandedChapterId === id) {
        state.expandedChapterId = null; // collapse
      } else {
        state.expandedChapterId = id; // expand
      }
      renderSidebarChapters();
    });
  });

  // Event: Click on specific verse pill
  container.querySelectorAll('.verse-dropdown-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const verseId = parseInt(pill.getAttribute('data-verse-id'), 10);
      selectSpecificVerse(verseId);
    });
  });

  // Event: Filter by chapter button
  container.querySelectorAll('.btn-filter-chap').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const chId = parseInt(btn.getAttribute('data-chapter-id'), 10);
      state.filterChapter = (state.filterChapter === chId) ? 'all' : chId;
      document.getElementById('filterChapterSelect').value = state.filterChapter;
      applyFilters();
      renderSidebarChapters();
    });
  });
}

function selectSpecificVerse(verseId) {
  let targetIdx = state.filteredVerses.findIndex(v => v.id === verseId);
  if (targetIdx === -1) {
    state.filterChapter = 'all';
    document.getElementById('filterChapterSelect').value = 'all';
    state.searchQuery = '';
    document.getElementById('searchInput').value = '';
    state.filteredVerses = [...DHAMMAPADA_VERSES];
    targetIdx = state.filteredVerses.findIndex(v => v.id === verseId);
  }

  if (targetIdx !== -1) {
    state.currentVerseIndex = targetIdx;
    const verseObj = state.filteredVerses[targetIdx];
    if (verseObj) {
      state.expandedChapterId = verseObj.chapterId;
    }
    renderCurrentVerse();
    renderVerseIndexChips();
    renderSidebarChapters();

    const activeChip = document.querySelector(`[data-verse-idx="${targetIdx}"]`);
    if (activeChip) {
      activeChip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }
}

function renderDaysPlanSelector() {
  const select = document.getElementById('dayPlanSelect');
  if (!select) return;
  select.innerHTML = Array.from({ length: 30 }, (_, i) => {
    const day = i + 1;
    const verses = state.getVersesForDay(day);
    const start = verses[0]?.id || 1;
    const end = verses[verses.length - 1]?.id || 1;
    return `<option value="${day}">Ngày ${day} (Kệ ${start} - ${end})</option>`;
  }).join('');

  select.value = state.filterDay;
  select.addEventListener('change', (e) => {
    state.filterDay = parseInt(e.target.value, 10);
    applyDayPlan(state.filterDay);
  });
}

function applyDayPlan(day) {
  const verses = state.getVersesForDay(day);
  state.filteredVerses = verses;
  state.currentVerseIndex = 0;
  state.filterChapter = 'all';
  document.getElementById('filterChapterSelect').value = 'all';
  renderCurrentVerse();
  renderVerseIndexChips();
}

function applyFilters() {
  let list = [...DHAMMAPADA_VERSES];
  if (state.filterChapter !== 'all') {
    list = list.filter(v => v.chapterId === state.filterChapter);
  }
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    const qNum = parseInt(q, 10);
    if (!isNaN(qNum)) {
      list = list.filter(v => v.id === qNum);
    } else {
      list = list.filter(v => v.lines.some(l => l.toLowerCase().includes(q)));
    }
  }
  state.filteredVerses = list;
  state.currentVerseIndex = 0;
  renderCurrentVerse();
  renderVerseIndexChips();
}

function renderVerseIndexChips() {
  const container = document.getElementById('verseChipsContainer');
  if (!container) return;
  container.innerHTML = state.filteredVerses.map((v, idx) => {
    const status = state.progress[v.id]?.status || 'unseen';
    const isActive = idx === state.currentVerseIndex;

    let chipClass = 'w-8 h-8 min-w-[2rem] flex-shrink-0 rounded-md text-xs font-mono transition-all flex items-center justify-center ';
    
    if (isActive) {
      if (status === 'mastered') {
        chipClass += 'bg-emerald-600 text-white font-bold border border-emerald-600 ring-2 ring-emerald-500 ring-offset-1 shadow-md scale-105 z-10';
      } else if (status === 'learning') {
        chipClass += 'bg-amber-600 text-white font-bold border border-amber-600 ring-2 ring-amber-500 ring-offset-1 shadow-md scale-105 z-10';
      } else {
        chipClass += 'bg-amber-800 text-white font-bold border border-amber-800 ring-2 ring-amber-600 ring-offset-1 shadow-md scale-105 z-10';
      }
    } else {
      if (status === 'mastered') {
        chipClass += 'bg-emerald-600 text-white border border-emerald-700 font-bold shadow-xs hover:opacity-90';
      } else if (status === 'learning') {
        chipClass += 'bg-amber-500 text-white border border-amber-600 font-bold shadow-xs hover:opacity-90';
      } else {
        chipClass += 'bg-white/90 text-stone-900 border border-stone-300 font-semibold hover:bg-white hover:border-amber-500 shadow-xs';
      }
    }

    return `
      <button class="${chipClass}" data-verse-idx="${idx}" title="Kệ ${v.id}">
        ${v.id}
      </button>
    `;
  }).join('');

  // Cuộn ô đang chọn vào giữa tầm nhìn
  const activeBtn = container.querySelector(`[data-verse-idx="${state.currentVerseIndex}"]`);
  if (activeBtn) {
    activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      state.currentVerseIndex = parseInt(btn.getAttribute('data-verse-idx'), 10);
      renderCurrentVerse();
      renderVerseIndexChips();
    });
  });
}

function renderCurrentVerse() {
  const currentVerse = state.filteredVerses[state.currentVerseIndex];
  if (!currentVerse) {
    document.getElementById('verseContentArea').innerHTML = `
      <div class="text-center py-12 text-stone-400">
        <p class="text-base font-serif">Không tìm thấy bài kệ phù hợp với bộ lọc.</p>
        <button class="mt-4 px-4 py-2 border border-stone-600 text-stone-200 rounded-lg hover:bg-stone-800" onclick="resetFilters()">Xem tất cả 423 câu</button>
      </div>
    `;
    return;
  }

  // Đồng bộ số câu lên URL và lưu lại để mở lại đúng câu này khi tắt web
  try {
    localStorage.setItem('phapcu_last_verse_id', currentVerse.id);
    const newUrl = `${window.location.pathname}?ke=${currentVerse.id}`;
    if (window.location.search !== `?ke=${currentVerse.id}`) {
      window.history.replaceState({ verseId: currentVerse.id }, '', newUrl);
    }
  } catch (err) {}

  const chapter = DHAMMAPADA_CHAPTERS.find(c => c.id === currentVerse.chapterId);
  const status = state.progress[currentVerse.id]?.status || 'unseen';

  document.getElementById('currentChapterTitle').textContent = chapter?.name || '';
  document.getElementById('currentVerseNumber').textContent = `Bài Kệ Số ${currentVerse.id}`;
  
  const statusBadge = document.getElementById('verseStatusBadge');
  if (status === 'mastered') {
    statusBadge.className = 'px-3 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300';
    statusBadge.textContent = 'Đã thuộc lòng';
  } else if (status === 'learning') {
    statusBadge.className = 'px-3 py-0.5 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 border border-amber-300';
    statusBadge.textContent = 'Đang luyện tập';
  } else {
    statusBadge.className = 'px-3 py-0.5 text-xs font-semibold rounded-full bg-stone-100 text-stone-600 border border-stone-300';
    statusBadge.textContent = 'Chưa học';
  }

  const contentArea = document.getElementById('verseContentArea');
  if (state.currentMode === 'full') {
    contentArea.innerHTML = `
      <div class="verse-lines verse-font space-y-2 py-4 text-center text-stone-900">
        ${currentVerse.lines.map(line => `<div class="tracking-wide">${line}</div>`).join('')}
      </div>
      <div class="mt-4 flex items-center justify-center space-x-2 text-xs text-stone-500 italic">
        <span>Toàn văn bài kệ • Đọc to và giữ nhịp thở an tịnh</span>
      </div>
    `;
  } else if (state.currentMode === 'first-letter') {
    const flLines = toFirstLetters(currentVerse.lines);
    contentArea.innerHTML = `
      <div class="verse-lines verse-font space-y-2 py-4 text-center text-amber-900">
        ${flLines.map(line => `<div class="tracking-wide">${line}</div>`).join('')}
      </div>
      <div class="mt-4 flex flex-col items-center justify-center space-y-2 text-xs text-stone-600">
        <p>Bấm vào từng chữ cái để mở từ gợi ý khi bị ngập ngừng</p>
        <button id="btnRevealAllWords" class="px-3 py-1 border border-stone-300 bg-white/80 hover:bg-white text-stone-700 rounded text-xs transition shadow-xs">Lật mở toàn bộ câu</button>
      </div>
    `;
    contentArea.querySelectorAll('.first-letter-token').forEach(token => {
      token.addEventListener('click', () => {
        token.textContent = token.getAttribute('data-full');
        token.classList.add('text-amber-900', 'font-bold');
      });
    });
    document.getElementById('btnRevealAllWords')?.addEventListener('click', () => {
      contentArea.querySelectorAll('.first-letter-token').forEach(token => {
        token.textContent = token.getAttribute('data-full');
        token.classList.add('text-amber-900', 'font-bold');
      });
    });
  } else if (state.currentMode === 'cloze') {
    const clozeData = toClozeTest(currentVerse.lines);
    contentArea.innerHTML = `
      <div class="verse-lines verse-font space-y-3 py-4 text-center leading-relaxed">
        <div class="text-stone-900">${clozeData.html}</div>
      </div>
      <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button id="btnCheckCloze" class="px-5 py-1.5 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-semibold transition shadow-sm">Kiểm tra kết quả</button>
        <button id="btnShowClozeAnswers" class="px-4 py-1.5 border border-stone-300 bg-white/80 text-stone-700 rounded-lg hover:bg-white text-xs transition shadow-xs">Hiện đáp án</button>
      </div>
      <div id="clozeFeedback" class="mt-3 text-center text-xs font-medium"></div>
    `;

    document.getElementById('btnCheckCloze')?.addEventListener('click', checkClozeAnswers);
    document.getElementById('btnShowClozeAnswers')?.addEventListener('click', showClozeAnswers);
  } else if (state.currentMode === 'blind') {
    contentArea.innerHTML = `
      <div class="py-6 text-center space-y-4">
        <div class="text-stone-500 text-xs italic">Hãy tự nhẩm hoặc đọc to toàn bộ câu kệ số ${currentVerse.id}</div>
        <div class="verse-font text-amber-900 font-semibold">
          "${currentVerse.lines[0]}..."
        </div>
        <div id="blindAnswerArea" class="hidden mt-6 p-4 rounded-xl bg-white/90 border border-amber-300 shadow-sm">
          <div class="verse-lines verse-font text-stone-900 space-y-1">
            ${currentVerse.lines.map(line => `<div>${line}</div>`).join('')}
          </div>
        </div>
        <div class="pt-4">
          <button id="btnRevealBlind" class="px-5 py-2 border border-amber-700 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-lg text-xs font-semibold transition shadow-xs">Đối chiếu toàn bộ bài kệ</button>
        </div>
      </div>
    `;
    document.getElementById('btnRevealBlind')?.addEventListener('click', () => {
      document.getElementById('blindAnswerArea').classList.remove('hidden');
      document.getElementById('btnRevealBlind').classList.add('hidden');
    });
  }

  document.getElementById('btnPrevVerse').disabled = state.currentVerseIndex === 0;
  document.getElementById('btnNextVerse').disabled = state.currentVerseIndex === state.filteredVerses.length - 1;

  resetAudioRecording();
  resetSpeechSynthesis();

  if (currentVerse && state.expandedChapterId !== currentVerse.chapterId) {
    state.expandedChapterId = currentVerse.chapterId;
    renderSidebarChapters();
  }

  if (typeof getVerseTip === 'function') {
    const tip = getVerseTip(currentVerse.id);
    const tipPatternEl = document.getElementById('tipPattern');
    const tipImageEl = document.getElementById('tipImage');
    const tipFormulaEl = document.getElementById('tipFormula');
    const tipKeyEl = document.getElementById('tipKey');
    if (tip) {
      if (tipPatternEl) tipPatternEl.textContent = tip.pattern;
      if (tipImageEl) tipImageEl.textContent = tip.image;
      if (tipFormulaEl) tipFormulaEl.textContent = tip.formula;
      if (tipKeyEl) tipKeyEl.textContent = tip.key;
    }
  }

  applyFontSizeMultiplier();
}

function checkClozeAnswers() {
  const inputs = document.querySelectorAll('.cloze-input');
  let correct = 0;
  inputs.forEach(input => {
    const userVal = input.value.trim().toLowerCase();
    const correctVal = input.getAttribute('data-answer');
    if (userVal === correctVal) {
      input.classList.remove('border-rose-600', 'text-rose-400');
      input.classList.add('border-emerald-500', 'text-emerald-300');
      correct++;
    } else {
      input.classList.remove('border-emerald-500', 'text-emerald-300');
      input.classList.add('border-rose-600', 'text-rose-400');
    }
  });
  const feedback = document.getElementById('clozeFeedback');
  if (feedback) {
    if (correct === inputs.length) {
      feedback.textContent = `Chính xác toàn bộ ${inputs.length}/${inputs.length} từ.`;
      feedback.className = 'mt-3 text-center text-xs font-semibold text-emerald-400';
      zenAudio.playBell();
    } else {
      feedback.textContent = `Đúng ${correct}/${inputs.length} từ. Xin hãy rà soát lại các ô màu đỏ.`;
      feedback.className = 'mt-3 text-center text-xs font-semibold text-amber-400';
    }
  }
}

function showClozeAnswers() {
  const inputs = document.querySelectorAll('.cloze-input');
  inputs.forEach(input => {
    input.value = input.getAttribute('data-answer');
    input.classList.remove('border-rose-600', 'text-rose-400');
    input.classList.add('border-emerald-600', 'text-emerald-300');
  });
}

function updateProgressStats() {
  const stats = state.getStats();
  document.getElementById('statMastered').textContent = stats.mastered;
  document.getElementById('statLearning').textContent = stats.learning;
  document.getElementById('statUnseen').textContent = stats.unseen;

  const pct = Math.round((stats.mastered / stats.total) * 100);
  document.getElementById('progressPercent').textContent = `${pct}%`;
  document.getElementById('progressBarFill').style.width = `${pct}%`;

  renderSidebarChapters();
}

// Dynamic font size control
let currentFontSizeMultiplier = parseFloat(localStorage.getItem('phapcu_font_scale') || '1.0');

function applyFontSizeMultiplier() {
  document.documentElement.style.setProperty('--verse-font-scale', currentFontSizeMultiplier);
  const container = document.getElementById('verseContentArea');
  if (container) {
    container.style.fontSize = `${currentFontSizeMultiplier * 100}%`;
  }
}

function changeFontSize(delta) {
  currentFontSizeMultiplier = Math.min(1.8, Math.max(0.7, parseFloat((currentFontSizeMultiplier + delta).toFixed(2))));
  try {
    localStorage.setItem('phapcu_font_scale', currentFontSizeMultiplier.toFixed(2));
  } catch (e) {}
  applyFontSizeMultiplier();
  showToast(`Cỡ chữ bài kệ: ${Math.round(currentFontSizeMultiplier * 100)}%`);
}

// Share current verse (Web Share API & Clipboard Fallback)
function shareCurrentVerse() {
  const v = state.filteredVerses[state.currentVerseIndex];
  if (!v) return;

  const url = `${window.location.origin}${window.location.pathname}?ke=${v.id}`;
  const shareText = `Kinh Pháp Cú - Bài Kệ Số ${v.id}:\n\n"${v.lines.join('\n')}"\n\n— Bản dịch: Trưởng lão HT. Thích Minh Châu (Chùa Hoằng Pháp)\nCùng học thuộc tại: ${url}`;

  if (navigator.share) {
    navigator.share({
      title: `Kinh Pháp Cú - Bài Kệ Số ${v.id}`,
      text: shareText,
      url: url
    }).catch(err => {
      copyToClipboard(shareText);
    });
  } else {
    copyToClipboard(shareText);
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("Đã sao chép bài kệ & liên kết! Bạn có thể dán vào Zalo / Facebook.");
    }).catch(() => {
      prompt("Sao chép bài kệ:", text);
    });
  } else {
    prompt("Sao chép bài kệ:", text);
  }
}

// Toast notification floating at bottom
function showToast(msg) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-xl bg-stone-900/90 text-white text-xs font-semibold shadow-2xl backdrop-blur-md transition-all duration-300 opacity-0 pointer-events-none z-50 flex items-center space-x-2 border border-white/20';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>
    <span>${msg}</span>
  `;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 3200);
}

// Switch Mode helper
function switchMode(mode) {
  state.currentMode = mode;
  document.querySelectorAll('.mode-tab-btn').forEach(b => {
    if (b.getAttribute('data-mode') === mode) {
      b.classList.add('active-mode-tab', 'bg-amber-700', 'text-white', 'shadow-sm');
      b.classList.remove('text-stone-700', 'hover:bg-white/80');
    } else {
      b.classList.remove('active-mode-tab', 'bg-amber-700', 'text-white', 'shadow-sm');
      b.classList.add('text-stone-700', 'hover:bg-white/80');
    }
  });
  renderCurrentVerse();
}

// Keyboard shortcuts for desktop
window.addEventListener('keydown', (e) => {
  const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
  if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') return;

  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    if (state.currentVerseIndex > 0) {
      state.currentVerseIndex--;
      renderCurrentVerse();
      renderVerseIndexChips();
    }
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    if (state.currentVerseIndex < state.filteredVerses.length - 1) {
      state.currentVerseIndex++;
      renderCurrentVerse();
      renderVerseIndexChips();
    }
  } else if (e.key === '1') {
    switchMode('full');
  } else if (e.key === '2') {
    switchMode('first-letter');
  } else if (e.key === '3') {
    switchMode('cloze');
  } else if (e.key === '4') {
    switchMode('blind');
  } else if (e.key === ' ') {
    e.preventDefault();
    zenAudio.playBell();
  }
});

function setupEventListeners() {
  // Font scale buttons
  document.getElementById('btnFontDec')?.addEventListener('click', () => changeFontSize(-0.1));
  document.getElementById('btnFontInc')?.addEventListener('click', () => changeFontSize(0.1));

  // Share button
  document.getElementById('btnShareVerse')?.addEventListener('click', shareCurrentVerse);

  document.getElementById('btnPrevVerse')?.addEventListener('click', () => {
    if (state.currentVerseIndex > 0) {
      state.currentVerseIndex--;
      renderCurrentVerse();
      renderVerseIndexChips();
    }
  });

  document.getElementById('btnNextVerse')?.addEventListener('click', () => {
    if (state.currentVerseIndex < state.filteredVerses.length - 1) {
      state.currentVerseIndex++;
      renderCurrentVerse();
      renderVerseIndexChips();
    }
  });

  document.querySelectorAll('.mode-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-tab-btn').forEach(b => {
        b.classList.remove('active-mode-tab', 'bg-amber-700', 'text-white', 'shadow-sm');
        b.classList.add('text-stone-700', 'hover:bg-white/80');
      });
      btn.classList.add('active-mode-tab', 'bg-amber-700', 'text-white', 'shadow-sm');
      btn.classList.remove('text-stone-700', 'hover:bg-white/80');

      state.currentMode = btn.getAttribute('data-mode');
      renderCurrentVerse();
    });
  });

  document.getElementById('btnMarkMastered')?.addEventListener('click', () => {
    const cur = state.filteredVerses[state.currentVerseIndex];
    if (cur) {
      state.updateVerseStatus(cur.id, 'mastered');
      zenAudio.playBell();
      updateProgressStats();
      renderCurrentVerse();
      renderVerseIndexChips();
      if (state.currentVerseIndex < state.filteredVerses.length - 1) {
        setTimeout(() => {
          state.currentVerseIndex++;
          renderCurrentVerse();
          renderVerseIndexChips();
        }, 500);
      }
    }
  });

  document.getElementById('btnMarkLearning')?.addEventListener('click', () => {
    const cur = state.filteredVerses[state.currentVerseIndex];
    if (cur) {
      state.updateVerseStatus(cur.id, 'learning');
      updateProgressStats();
      renderCurrentVerse();
      renderVerseIndexChips();
    }
  });

  document.getElementById('btnMarkUnseen')?.addEventListener('click', () => {
    const cur = state.filteredVerses[state.currentVerseIndex];
    if (cur) {
      state.updateVerseStatus(cur.id, 'unseen');
      updateProgressStats();
      renderCurrentVerse();
      renderVerseIndexChips();
    }
  });

  const tipHeader = document.getElementById('tipHeader');
  const tipBody = document.getElementById('tipBody');
  const tipToggleText = document.getElementById('tipToggleText');
  const tipToggleArrow = document.getElementById('tipToggleArrow');
  if (tipHeader && tipBody) {
    tipHeader.addEventListener('click', () => {
      tipBody.classList.toggle('hidden');
      const isHidden = tipBody.classList.contains('hidden');
      if (tipToggleText) tipToggleText.textContent = isHidden ? 'Mở rộng' : 'Thu gọn';
      if (tipToggleArrow) tipToggleArrow.textContent = isHidden ? '▼' : '▲';
    });
  }

  const filterChapterSelect = document.getElementById('filterChapterSelect');
  if (filterChapterSelect) {
    filterChapterSelect.innerHTML = `<option value="all">Toàn bộ 26 Phẩm (423 câu)</option>` +
      DHAMMAPADA_CHAPTERS.map(c => `<option value="${c.id}">${c.name} (${c.count} câu)</option>`).join('');
    filterChapterSelect.addEventListener('change', (e) => {
      state.filterChapter = e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10);
      applyFilters();
      renderSidebarChapters();
    });
  }

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      applyFilters();
    });
  }

  const btnRecordVoice = document.getElementById('btnRecordVoice');
  if (btnRecordVoice) {
    btnRecordVoice.addEventListener('click', toggleAudioRecording);
  }

  const btnSpeakText = document.getElementById('btnSpeakText');
  if (btnSpeakText) {
    btnSpeakText.addEventListener('click', playTextToSpeech);
  }

  const btnPlayBell = document.getElementById('btnPlayBell');
  if (btnPlayBell) {
    btnPlayBell.addEventListener('click', () => zenAudio.playBell());
  }

  // Font size adjusters & Share
  document.getElementById('btnFontDec')?.addEventListener('click', () => changeFontSize(-0.15));
  document.getElementById('btnFontInc')?.addEventListener('click', () => changeFontSize(0.15));
  document.getElementById('btnShareVerse')?.addEventListener('click', shareCurrentVerse);

  document.getElementById('btnExportData')?.addEventListener('click', exportUserData);
  document.getElementById('btnImportData')?.addEventListener('click', () => document.getElementById('importFileInput').click());
  document.getElementById('importFileInput')?.addEventListener('change', importUserData);
  document.getElementById('btnResetData')?.addEventListener('click', resetUserData);

  document.getElementById('btnStartMockExam')?.addEventListener('click', startMockExam);
  document.getElementById('btnCloseExamModal')?.addEventListener('click', closeMockExam);

  document.getElementById('btnOpenTipsModal')?.addEventListener('click', () => {
    document.getElementById('tipsModal')?.classList.remove('hidden');
  });
  document.getElementById('btnCloseTipsModal')?.addEventListener('click', () => {
    document.getElementById('tipsModal')?.classList.add('hidden');
  });
  document.getElementById('btnUnderstandTips')?.addEventListener('click', () => {
    document.getElementById('tipsModal')?.classList.add('hidden');
  });

  // Background & Glass Settings Listeners
  document.getElementById('btnOpenBgModal')?.addEventListener('click', () => {
    document.getElementById('bgModal')?.classList.remove('hidden');
  });
  document.getElementById('btnCloseBgModal')?.addEventListener('click', () => {
    document.getElementById('bgModal')?.classList.add('hidden');
  });
  document.getElementById('btnSaveBgModal')?.addEventListener('click', () => {
    document.getElementById('bgModal')?.classList.add('hidden');
  });

  const btnTriggerBg = document.getElementById('btnTriggerBgUpload');
  const bgFileInput = document.getElementById('bgFileInput');
  if (btnTriggerBg && bgFileInput) {
    btnTriggerBg.addEventListener('click', () => bgFileInput.click());
    bgFileInput.addEventListener('change', handleCustomBgUpload);
  }

  const opacitySlider = document.getElementById('glassOpacitySlider');
  if (opacitySlider) {
    opacitySlider.addEventListener('input', (e) => {
      updateGlassOpacity(e.target.value);
    });
  }

  document.querySelectorAll('.preset-bg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.getAttribute('data-url');
      if (url) {
        try {
          localStorage.setItem('phapcu_custom_bg', url);
        } catch (err) {}
        applyCustomBackground(url);
        document.getElementById('bgModal')?.classList.add('hidden');
      }
    });
  });

  document.getElementById('btnResetBg')?.addEventListener('click', () => {
    localStorage.removeItem('phapcu_custom_bg');
    localStorage.removeItem('phapcu_glass_opacity');
    initBackground();
    document.getElementById('bgModal')?.classList.add('hidden');
  });
}

// Background & Frosted Glass Controller
const DEFAULT_BG = 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Borobudur_Sunrise_2012-01-05.jpg';

function updateGlassOpacityStyles(pct) {
  // pct is 10 to 90 (default 35%)
  // For header, toolbar, chips: alpha from 0.15 to 0.55
  const baseAlpha = 0.15 + (pct / 100) * 0.40;
  // For center verse box: alpha from 0.45 to 0.85 (ensures high contrast and legibility)
  const cardAlpha = 0.45 + (pct / 100) * 0.40;
  // Blur amount: from 10px to 28px
  const blurPx = Math.round(10 + (pct / 100) * 16);

  document.documentElement.style.setProperty('--glass-alpha', baseAlpha.toFixed(2));
  document.documentElement.style.setProperty('--card-alpha', cardAlpha.toFixed(2));
  document.documentElement.style.setProperty('--glass-blur', `${blurPx}px`);
}

function applyCustomBackground(url) {
  const savedOpacity = parseInt(localStorage.getItem('phapcu_glass_opacity') || '35', 10);
  // Pure background image on body without thick opaque gradient washing it out!
  document.body.style.backgroundColor = '#1c1917';
  document.body.style.backgroundImage = `url('${url}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundRepeat = 'no-repeat';

  updateGlassOpacityStyles(savedOpacity);
}

function updateGlassOpacity(val) {
  const pct = parseInt(val, 10);
  try {
    localStorage.setItem('phapcu_glass_opacity', pct);
  } catch (err) {}
  const valLabel = document.getElementById('glassOpacityVal');
  if (valLabel) valLabel.textContent = `${pct}%`;

  updateGlassOpacityStyles(pct);
}

function handleCustomBgUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const dataUrl = event.target.result;
    try {
      localStorage.setItem('phapcu_custom_bg', dataUrl);
    } catch (err) {
      console.warn("Ảnh nền dung lượng cao, áp dụng trực tiếp cho phiên học hiện tại.", err);
    }
    applyCustomBackground(dataUrl);
    document.getElementById('bgModal')?.classList.add('hidden');
  };
  reader.readAsDataURL(file);
}

function initBackground() {
  const savedBg = localStorage.getItem('phapcu_custom_bg') || DEFAULT_BG;
  const savedOpacity = localStorage.getItem('phapcu_glass_opacity') || '35';

  const slider = document.getElementById('glassOpacitySlider');
  if (slider) slider.value = savedOpacity;
  const valLabel = document.getElementById('glassOpacityVal');
  if (valLabel) valLabel.textContent = `${savedOpacity}%`;

  applyCustomBackground(savedBg);
}

async function toggleAudioRecording() {
  const btn = document.getElementById('btnRecordVoice');
  const playerContainer = document.getElementById('audioPlayerContainer');

  if (!state.isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      state.mediaRecorder = new MediaRecorder(stream);
      state.audioChunks = [];

      state.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          state.audioChunks.push(event.data);
        }
      };

      state.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(state.audioChunks, { type: 'audio/webm' });
        if (state.recordedAudioUrl) {
          URL.revokeObjectURL(state.recordedAudioUrl);
        }
        state.recordedAudioUrl = URL.createObjectURL(audioBlob);
        playerContainer.innerHTML = `
          <div class="flex items-center space-x-2 p-2 bg-white/90 rounded-lg border border-stone-300 shadow-xs">
            <span class="text-xs text-amber-900 font-semibold">Bản thu đối chiếu:</span>
            <audio controls class="h-8 flex-1" src="${state.recordedAudioUrl}"></audio>
          </div>
        `;
      };

      state.mediaRecorder.start();
      state.isRecording = true;
      btn.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-rose-500 mr-1.5 animate-pulse"></span> Đang thu âm... Nhấp để Dừng`;
      btn.classList.add('border-rose-600', 'text-rose-400');
    } catch (err) {
      alert("Không thể truy cập microphone. Vui lòng cấp quyền micro cho trình duyệt.");
      console.error(err);
    }
  } else {
    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
      state.mediaRecorder.stop();
      state.mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
    state.isRecording = false;
    btn.innerHTML = `<svg class="w-3.5 h-3.5 mr-1 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg> Thu âm giọng đọc`;
    btn.classList.remove('border-rose-600', 'text-rose-400');
  }
}

function resetAudioRecording() {
  state.isRecording = false;
  if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
    state.mediaRecorder.stop();
    state.mediaRecorder.stream.getTracks().forEach(track => track.stop());
  }
  const btn = document.getElementById('btnRecordVoice');
  if (btn) {
    btn.innerHTML = `<svg class="w-3.5 h-3.5 mr-1 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg> Thu âm giọng đọc`;
    btn.classList.remove('border-rose-600', 'text-rose-400');
  }
  const playerContainer = document.getElementById('audioPlayerContainer');
  if (playerContainer) playerContainer.innerHTML = '';
}

// Warm, gentle Buddhist voice synthesizer setup
let viVoices = [];
let isSpeaking = false;

function loadViVoices() {
  if (!('speechSynthesis' in window)) return;
  const allVoices = window.speechSynthesis.getVoices();
  viVoices = allVoices.filter(v => v.lang.includes('vi') || v.lang.includes('VI'));
}

if ('speechSynthesis' in window) {
  loadViVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadViVoices;
  }
}

function getWarmRecitationVoice() {
  if (!viVoices || viVoices.length === 0) {
    loadViVoices();
  }
  if (!viVoices || viVoices.length === 0) return null;

  // 1. Natural / Neural voices on Windows Edge (HoaiMy / NamMinh)
  const naturalVoice = viVoices.find(v => 
    v.name.includes('Natural') || v.name.includes('Online') || v.name.includes('NamMinh') || v.name.includes('HoaiMy')
  );
  if (naturalVoice) return naturalVoice;

  // 2. Google tiếng Việt on Chrome
  const googleVoice = viVoices.find(v => v.name.toLowerCase().includes('google'));
  if (googleVoice) return googleVoice;

  // 3. Fallback to any Vietnamese voice
  return viVoices[0] || null;
}

function resetSpeechSynthesis() {
  if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  const btn = document.getElementById('btnSpeakText');
  if (btn) {
    btn.innerHTML = `
      <svg class="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
      </svg>
      <span>Nghe đọc mẫu</span>
    `;
    btn.classList.remove('border-amber-600', 'text-amber-800', 'bg-amber-50');
  }
}

function playTextToSpeech() {
  const currentVerse = state.filteredVerses[state.currentVerseIndex];
  if (!currentVerse) return;
  if (!('speechSynthesis' in window)) {
    alert("Trình duyệt không hỗ trợ đọc tự động.");
    return;
  }

  const btn = document.getElementById('btnSpeakText');

  // If already speaking, stop and reset
  if (isSpeaking) {
    resetSpeechSynthesis();
    return;
  }

  window.speechSynthesis.cancel();

  // Create gentle breath pauses between poetic lines with comma and space
  const text = currentVerse.lines.join(', ... ');
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';

  // Warm, deep, and gentle Buddhist recitation tuning
  const warmVoice = getWarmRecitationVoice();
  if (warmVoice) {
    utterance.voice = warmVoice;
  }
  
  // Pitch: 0.86 (warmer, deeper, more grounded - trầm ấm)
  // Rate: 0.78 (slow, meditative tempo - nhẹ nhàng, an tịnh)
  utterance.pitch = 0.86;
  utterance.rate = 0.78;
  utterance.volume = 1.0;

  utterance.onstart = () => {
    isSpeaking = true;
    if (btn) {
      btn.innerHTML = `
        <span class="inline-block w-2 h-2 rounded-full bg-amber-600 animate-pulse mr-1.5"></span>
        <span>Đang đọc... (Nhấp để dừng)</span>
      `;
      btn.classList.add('border-amber-600', 'text-amber-800', 'bg-amber-50');
    }
  };

  utterance.onend = () => {
    resetSpeechSynthesis();
  };

  utterance.onerror = () => {
    resetSpeechSynthesis();
  };

  window.speechSynthesis.speak(utterance);
}

function startMockExam() {
  const count = 10;
  const shuffled = [...DHAMMAPADA_VERSES].sort(() => 0.5 - Math.random());
  state.examVerses = shuffled.slice(0, count);
  state.examCurrentIndex = 0;
  state.examResults = [];

  document.getElementById('examModal').classList.remove('hidden');
  renderExamQuestion();
}

function renderExamQuestion() {
  const q = state.examVerses[state.examCurrentIndex];
  const container = document.getElementById('examQuestionContent');
  if (!q) {
    const correctCount = state.examResults.filter(r => r === 'pass').length;
    container.innerHTML = `
      <div class="text-center py-6 space-y-4">
        <div class="w-12 h-12 mx-auto rounded-full border border-amber-600 flex items-center justify-center text-amber-700 bg-amber-50">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 class="text-xl font-serif font-bold text-amber-900">Hoàn Thành Bài Khảo</h3>
        <p class="text-sm text-stone-700">Kết quả: <span class="font-mono font-bold text-emerald-700">${correctCount} / ${state.examVerses.length}</span> câu đạt yêu cầu.</p>
        <div class="text-xs text-stone-500">
          ${correctCount >= 8 ? 'Phản xạ thuộc lòng rất vững vàng, sẵn sàng cho kỳ thi.' : 'Nên tiếp tục rèn luyện thêm các câu chưa nhuần nhuyễn.'}
        </div>
        <button onclick="closeMockExam()" class="px-5 py-2 border border-stone-300 hover:bg-stone-100 text-stone-700 rounded-lg text-xs font-semibold">Đóng</button>
      </div>
    `;
    zenAudio.playBell();
    return;
  }

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex justify-between items-center text-xs text-stone-500 pb-2 border-b border-stone-200">
        <span>Câu ${state.examCurrentIndex + 1} / ${state.examVerses.length}</span>
        <span>Phẩm: ${DHAMMAPADA_CHAPTERS.find(c => c.id === q.chapterId)?.name}</span>
      </div>
      <div class="text-center py-4">
        <div class="text-xs text-stone-500 mb-1">Đọc thuộc lòng:</div>
        <div class="text-xl font-serif font-bold text-amber-900 mb-3">Bài Kệ Số ${q.id}</div>
        <div class="text-stone-600 text-xs italic">Gợi ý 2 dòng đầu: "${q.lines[0]} ${q.lines[1]}"</div>
      </div>
      <div id="examAnswerBox" class="hidden p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-center verse-font text-stone-800 leading-relaxed shadow-xs">
        ${q.lines.map(l => `<div>${l}</div>`).join('')}
      </div>
      <div id="examControls" class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
        <button id="btnExamShowAnswer" class="px-4 py-2 border border-amber-700 bg-white hover:bg-amber-50 text-amber-900 rounded-lg text-xs font-semibold transition shadow-xs">Xem Toàn Bộ Bài Kệ</button>
        <div id="examScoreBtns" class="hidden space-x-2">
          <button onclick="recordExamResult('fail')" class="px-4 py-2 border border-rose-300 bg-rose-50 text-rose-800 hover:bg-rose-100 rounded-lg text-xs font-semibold shadow-xs">Chưa thuộc</button>
          <button onclick="recordExamResult('pass')" class="px-4 py-2 border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 rounded-lg text-xs font-semibold shadow-xs">Thuộc làu</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnExamShowAnswer')?.addEventListener('click', () => {
    document.getElementById('examAnswerBox').classList.remove('hidden');
    document.getElementById('btnExamShowAnswer').classList.add('hidden');
    document.getElementById('examScoreBtns').classList.remove('hidden');
  });
}

function recordExamResult(result) {
  state.examResults.push(result);
  const q = state.examVerses[state.examCurrentIndex];
  if (result === 'pass') {
    state.updateVerseStatus(q.id, 'mastered');
  } else {
    state.updateVerseStatus(q.id, 'learning');
  }
  updateProgressStats();
  state.examCurrentIndex++;
  renderExamQuestion();
}

function closeMockExam() {
  document.getElementById('examModal').classList.add('hidden');
}

function exportUserData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.progress, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `phap_cu_tien_do_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importUserData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (typeof data === 'object') {
        state.progress = data;
        state.saveProgress();
        updateProgressStats();
        renderCurrentVerse();
        renderVerseIndexChips();
        alert("Nhập dữ liệu tiến độ thành công.");
      }
    } catch (err) {
      alert("Tệp không đúng định dạng JSON tiến độ.");
    }
  };
  reader.readAsText(file);
}

function resetUserData() {
  if (confirm("Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ học về ban đầu không?")) {
    localStorage.removeItem('phapcu_progress_v1');
    state.progress = state.loadProgress();
    updateProgressStats();
    renderCurrentVerse();
    renderVerseIndexChips();
    alert("Đã làm mới tiến độ.");
  }
}

function resetFilters() {
  state.filterChapter = 'all';
  state.searchQuery = '';
  document.getElementById('filterChapterSelect').value = 'all';
  document.getElementById('searchInput').value = '';
  applyFilters();
}
