
/* v7 큰 글씨 보기: 사용자 기기에서 모드 상태만 보관합니다. */
(() => {
  'use strict';

  const key = 'anamRaemianLargeText';
  const toggle = document.getElementById('senior-toggle');
  const label = document.getElementById('senior-toggle-label');

  if (!toggle || !label) return;

  function saveMode(on) {
    try {
      localStorage.setItem(key, on ? 'on' : 'off');
    } catch (_) {
      // 저장이 차단되어도 현재 화면에서는 정상 작동
    }
  }

  function setMode(on, save = false) {
    document.documentElement.classList.toggle('senior-mode', on);

    toggle.setAttribute('aria-pressed', String(on));
    toggle.setAttribute(
      'aria-label',
      on ? '기본 글씨로 돌아가기' : '어르신용 큰 글씨 보기'
    );

    label.textContent = on ? '기본 글씨' : '큰 글씨';

    toggle.title = on
      ? '기본 글씨 크기로 전환'
      : '글씨를 크게 하고 보기 쉽게 전환';

    if (save) saveMode(on);
  }

  let on = false;

  try {
    on = localStorage.getItem(key) === 'on';
  } catch (_) {
    // 저장이 불가능한 환경
  }

  setMode(on);

  toggle.addEventListener('click', () => {
    setMode(
      !document.documentElement.classList.contains('senior-mode'),
      true
    );
  });
})();
