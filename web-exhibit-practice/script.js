/**
 * 실족(失族) 웹전시 스크립트
 * 레퍼런스 스타일: 字圆其说 수묵 에디토리얼
 * 디지털헤리티지 큐레이터 4기 실습 꾸러미
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroTyping();
  initTalkingGodsInteraction();
  initRestitutionSlider();
  initScrollNav();
  initDefaultOpinions();
  initAccordions();
});

/* ==========================================================================
   1. 히어로 자막 타이핑 연출
   ========================================================================== */
function initHeroTyping() {
  const captionEl = document.getElementById('typing-caption');
  if (!captionEl) return;

  const messages = [
    '"우리는 왜 뿌리를 잃어버렸으며, 이 유물은 누구에게로 돌아가야 하는가?"',
    '"발을 잃음이 아닌, 가족과 혈족을 빼앗긴 자들(失族)의 비극."',
    '"사막의 무덤 천장에서 타국의 유리장 안으로 끌려온 신들의 탄식."'
  ];

  let msgIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 90;

  function type() {
    const currentMsg = messages[msgIndex];

    if (!isDeleting) {
      captionEl.textContent = currentMsg.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentMsg.length) {
        isDeleting = true;
        delay = 3200;
      } else {
        delay = 60;
      }
    } else {
      captionEl.textContent = currentMsg.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
        delay = 700;
      } else {
        delay = 35;
      }
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 800);
}

/* ==========================================================================
   2. 복희와 여와 호버 인터랙션 (커서 근접자 단독 발화 & 실감 나는 입술 움직임)
   ========================================================================== */
function initTalkingGodsInteraction() {
  const canvas = document.getElementById('artifact-canvas');
  const dialogueText = document.getElementById('dialogue-text');
  const nuwaBubble = document.getElementById('nuwa-bubble');
  const fuxiBubble = document.getElementById('fuxi-bubble');
  const nuwaMouth = document.getElementById('nuwa-mouth');
  const fuxiMouth = document.getElementById('fuxi-mouth');

  if (!canvas || !dialogueText) return;

  // 여와(왼쪽)의 독백 대사
  const nuwaQuotes = [
    '“여긴 어디지...?”',
    '“왜 우리는 바다를 건너 이 차가운 유리장 안에 갇혔을까...”',
    '“우리의 고향이 그리워... 사막의 별들이 보고 싶어...”',
    '“우린 누구의 품으로 돌아가야 하는가...”'
  ];

  // 복희(오른쪽)의 독백 대사
  const fuxiQuotes = [
    '“우리의 고향과는 다른데...”',
    '“사막의 밤하늘, 무덤 천장의 별들이 그립구나...”',
    '“타국으로 끌려와 우리의 일족과 뿌리(失族)를 잃어버렸구나...”',
    '“우리의 뿌리는 지금 어디에 있는가...”'
  ];

  let nuwaIndex = 0;
  let fuxiIndex = 0;
  let activeSpeaker = null; // 'nuwa' or 'fuxi'
  let quoteTimer = null;

  function updateSpeakerQuote(speaker) {
    if (speaker === 'nuwa') {
      const q = nuwaQuotes[nuwaIndex];
      nuwaIndex = (nuwaIndex + 1) % nuwaQuotes.length;

      // 여와만 말풍선 및 입술 활성화
      if (nuwaBubble) {
        const textSpan = nuwaBubble.querySelector('.bubble-text');
        if (textSpan) textSpan.textContent = q;
        nuwaBubble.classList.add('active');
      }
      if (nuwaMouth) nuwaMouth.classList.add('talking');

      // 복희는 침묵
      if (fuxiBubble) fuxiBubble.classList.remove('active');
      if (fuxiMouth) fuxiMouth.classList.remove('talking');

      // 하단 자막 갱신
      dialogueText.style.opacity = '0';
      setTimeout(() => {
        dialogueText.textContent = `[여와의 탄식] ${q}`;
        dialogueText.style.opacity = '1';
      }, 150);

    } else if (speaker === 'fuxi') {
      const q = fuxiQuotes[fuxiIndex];
      fuxiIndex = (fuxiIndex + 1) % fuxiQuotes.length;

      // 복희만 말풍선 및 입술 활성화
      if (fuxiBubble) {
        const textSpan = fuxiBubble.querySelector('.bubble-text');
        if (textSpan) textSpan.textContent = q;
        fuxiBubble.classList.add('active');
      }
      if (fuxiMouth) fuxiMouth.classList.add('talking');

      // 여와는 침묵
      if (nuwaBubble) nuwaBubble.classList.remove('active');
      if (nuwaMouth) nuwaMouth.classList.remove('talking');

      // 하단 자막 갱신
      dialogueText.style.opacity = '0';
      setTimeout(() => {
        dialogueText.textContent = `[복희의 탄식] ${q}`;
        dialogueText.style.opacity = '1';
      }, 150);
    }
  }

  // 마우스 이동 시 X좌표에 따라 더 가까운 신이 단독으로 말함
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;

    // 왼쪽 52% 미만이면 여와, 이상이면 복희
    const newSpeaker = relX < 0.52 ? 'nuwa' : 'fuxi';

    if (activeSpeaker !== newSpeaker) {
      activeSpeaker = newSpeaker;
      clearInterval(quoteTimer);
      updateSpeakerQuote(activeSpeaker);
      quoteTimer = setInterval(() => {
        if (activeSpeaker) updateSpeakerQuote(activeSpeaker);
      }, 3600);
    }
  });

  canvas.addEventListener('mouseenter', (e) => {
    const rect = canvas.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    activeSpeaker = relX < 0.52 ? 'nuwa' : 'fuxi';
    updateSpeakerQuote(activeSpeaker);
    quoteTimer = setInterval(() => {
      if (activeSpeaker) updateSpeakerQuote(activeSpeaker);
    }, 3600);
  });

  // 마우스가 유물 밖으로 나가면 두 신 모두 입을 다물고 말풍선 숨김
  canvas.addEventListener('mouseleave', () => {
    activeSpeaker = null;
    clearInterval(quoteTimer);

    if (nuwaMouth) nuwaMouth.classList.remove('talking');
    if (fuxiMouth) fuxiMouth.classList.remove('talking');
    if (nuwaBubble) nuwaBubble.classList.remove('active');
    if (fuxiBubble) fuxiBubble.classList.remove('active');

    dialogueText.style.opacity = '0';
    setTimeout(() => {
      dialogueText.textContent = '“복희나 여와 가까이 마우스를 가져가면 가까운 신이 입을 열어 이야기합니다.”';
      dialogueText.style.opacity = '1';
    }, 200);
  });
}

/* ==========================================================================
   3. 반환의 딜레마 슬라이더 (탭 / 버튼 / 스와이프 인터랙션)
   ========================================================================== */
function initRestitutionSlider() {
  const track = document.getElementById('slider-track');
  const tabs = document.querySelectorAll('.zen-tab');
  const dots = document.querySelectorAll('.zen-dots .z-dot');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  const viewport = document.getElementById('slider-viewport');

  if (!track || tabs.length === 0) return;

  const totalSlides = tabs.length;
  let currentIndex = 0;

  function goToSlide(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;

    currentIndex = index;

    // 슬라이드 트랙 이동
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // 탭 활성화 상태 변경
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === currentIndex);
    });

    // 도트 활성화 상태 변경
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    // 버튼 비활성화 상태 제어
    if (prevBtn) prevBtn.style.opacity = currentIndex === 0 ? '0.35' : '1';
    if (nextBtn) nextBtn.style.opacity = currentIndex === totalSlides - 1 ? '0.35' : '1';
  }

  // 탭 클릭 이벤트
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-index'), 10);
      goToSlide(idx);
    });
  });

  // 도트 클릭 이벤트
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
    });
  });

  // 이전/다음 버튼 클릭
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  }

  // 터치 및 마우스 드래그 스와이프 제스처
  let startX = 0;
  let isDragging = false;

  viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - e.clientX;
    if (diff > 50) {
      goToSlide(currentIndex + 1);
    } else if (diff < -50) {
      goToSlide(currentIndex - 1);
    }
  });

  viewport.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (diff > 50) {
      goToSlide(currentIndex + 1);
    } else if (diff < -50) {
      goToSlide(currentIndex - 1);
    }
  }, { passive: true });

  // 키보드 좌우 방향키
  viewport.setAttribute('tabindex', '0');
  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      goToSlide(currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      goToSlide(currentIndex - 1);
    }
  });

  // 초기 0번 슬라이드
  goToSlide(0);
}

/* ==========================================================================
   4. 세부 도상 관찰 모달 인터랙션
   ========================================================================== */
let lastActiveElement = null;

function openDetailModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  lastActiveElement = document.activeElement;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  const closeBtn = modal.querySelector('.modal-close-btn');
  if (closeBtn) closeBtn.focus();
}

function closeDetailModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.remove('active');
  document.body.style.overflow = '';

  if (lastActiveElement) {
    lastActiveElement.focus();
  }
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const activeModal = document.querySelector('.modal.active');
    if (activeModal) {
      closeDetailModal(activeModal.id);
    }
  }
});

/* ==========================================================================
   5. 스크롤 네비게이션
   ========================================================================== */
function initScrollNav() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. 관람자의 생각 남기기
   ========================================================================== */
function submitOpinion() {
  const textarea = document.getElementById('user-opinion');
  const list = document.getElementById('opinion-list');
  if (!textarea || !list) return;

  const content = textarea.value.trim();
  if (!content) {
    alert('기록할 생각을 입력해 주세요.');
    textarea.focus();
    return;
  }

  const now = new Date();
  const timeStr = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const item = document.createElement('div');
  item.className = 'opinion-item';
  item.innerHTML = `
    <p>${escapeHtml(content)}</p>
    <span class="opinion-item-time">기록 일시: ${timeStr} · 관람자 소견</span>
  `;

  list.insertBefore(item, list.firstChild);
  textarea.value = '';
}

function initDefaultOpinions() {
  const list = document.getElementById('opinion-list');
  if (!list) return;

  const sampleOpinions = [
    {
      text: "국가 간의 소유권 다툼 이전에, 그 유물이 꽃피웠던 지역 주민들과 소수민족의 문화적 기억이 가장 먼저 존중받아야 한다고 생각합니다.",
      time: "2026.11.12 15:30 · 큐레이터 사전 소견"
    },
    {
      text: "박물관 쇼케이스에 갇힌 유물이 아니라, 원래 자리에서 어떤 역할을 했는지 보여주는 맥락의 회복이 곧 진정한 반환의 시작입니다.",
      time: "2026.11.12 14:15 · 연구자 소견"
    }
  ];

  sampleOpinions.forEach(op => {
    const item = document.createElement('div');
    item.className = 'opinion-item';
    item.innerHTML = `
      <p>${escapeHtml(op.text)}</p>
      <span class="opinion-item-time">${op.time}</span>
    `;
    list.appendChild(item);
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}


/* ==========================================================================
   인터랙티브 아코디언 카드 (실크로드 스테이션 & 약탈 타임라인)
   - 칸 클릭 시 상세 내용 노출
   - 다른 칸 클릭 시 기존 열린 칸 자동 닫힘
   ========================================================================== */
function initAccordions() {
  // 1. 실크로드 스테이션 아코디언 (2번째)
  const stations = document.querySelectorAll('.sr-station');
  stations.forEach(station => {
    station.addEventListener('click', (e) => {
      const isAlreadyActive = station.classList.contains('active');
      stations.forEach(s => s.classList.remove('active'));
      if (!isAlreadyActive) {
        station.classList.add('active');
      }
    });
  });

  // 2. 약탈과 유랑 4단계 타임라인 아코디언 (4번째)
  const stepCards = document.querySelectorAll('.zen-step-card');
  stepCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const isAlreadyActive = card.classList.contains('active');
      stepCards.forEach(c => c.classList.remove('active'));
      if (!isAlreadyActive) {
        card.classList.add('active');
      }
    });
  });
}