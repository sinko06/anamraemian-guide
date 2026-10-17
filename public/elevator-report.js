// 이 파일은 승강기 계약 홍보용 별도 레이아웃입니다. 수치 수정은 elevator-data.js에서 하세요.
(function () {
  const d = window.ELEVATOR_DATA;
  if (!d) return;
  const fmt = n => Number(n).toLocaleString('ko-KR');
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const others = d.competitors.filter(r => r.name !== d.home.name);
  const higher = others.filter(r => r.costMan > d.home.costMan).length;
  const maxRaw = Math.max(...d.competitors.map(r => r.costMan));
  const maxNorm = Math.max(...d.normalized.map(r => r.estimate));
  const pct = n => ((n / d.normalized[0].estimate - 1) * 100).toFixed(1);
  const rawChart = d.competitors.map(row => {
    const me = row.name === d.home.name;
    const before = row.contract < '2026.02';
    return `<div class="report-bar-row${me ? ' report-bar-ours' : before ? ' report-bar-before' : ''}"><div class="report-bar-label">${esc(row.name)}</div><div class="report-bar-track"><span class="report-bar-fill" style="width:${(row.costMan / maxRaw * 100).toFixed(2)}%"></span></div><div class="report-bar-value">${fmt(row.costMan)}<small>만원</small></div></div>`;
  }).join('');
  const normRows = d.normalized.map((row, i) => {
    const our = i === 0;
    return `<div class="norm-row${our ? ' norm-ours' : ''}"><div class="norm-label"><strong>${esc(row.name)}</strong><small>${esc(row.spec)}</small></div><div class="norm-track"><span style="width:${(row.estimate / maxNorm * 100).toFixed(1)}%"></span></div><div class="norm-value"><strong>${fmt(row.estimate)}<small>만원</small></strong><small>${our ? '비교 기준' : Math.abs(row.estimate - 4966) <= 1 ? '거의 동일' : `+${pct(row.estimate)}%`}</small></div></div>`;
  }).join('');
  const allRows = d.competitors.map(row => {
    const me = row.name === d.home.name;
    const before = row.contract < '2026.02';
    return `<tr${me ? ' class="our-row"' : ''}><th scope="row">${esc(row.name)}${me ? ' <span class="row-tag">우리 단지</span>' : ''}</th><td>${fmt(row.households)}</td><td>${esc(row.units)}</td><td>${row.amountEok}</td><td class="align-num">${fmt(row.costMan)}</td><td>${esc(row.company)}</td><td>${esc(row.contract)}${before ? '<small class="before-label">이란 전쟁 이전</small>' : ''}</td></tr>`;
  }).join('');
  const contextLinks = d.contextSources.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)} ↗</a>`).join(' · ');
  window.renderElevatorReport = () => `<div class="elevator-report">
    <div class="report-hero">
      <div class="report-eyebrow">2026.05 · 승강기 교체 계약 현황</div>
      <h2>우리 아파트 22대 교체,<br><span>대당 평균 약 4,909만원</span></h2>
      <p>13인승·1,000kg급 20대를 포함한 22대의 계약 내용과 다른 단지의 공개 비교자료를 함께 살펴봅니다.</p>
      <div class="report-hero-strip"><span>교체 대상 <b>22대</b></span><span>총 계약금액 <b>10.8억원</b></span><span>계약시점 <b>2026년 5월</b></span></div>
    </div>
    <div class="report-stat-grid">
      <div class="report-stat"><small>교체 승강기</small><b>22<em>대</em></b><span>13인승 20대 · 10인승 2대</span></div>
      <div class="report-stat"><small>총 계약금액</small><b>10.8<em>억원</em></b><span>제공된 계약 현황 기준</span></div>
      <div class="report-stat report-stat-feature"><small>22대 단순 평균</small><b>4,909<em>만원/대</em></b><span>총액 ÷ 22대, 반올림</span></div>
      <div class="report-stat"><small>계약 업체·연월</small><b class="stat-text">티케이</b><span>2026년 5월</span></div>
    </div>
    <section class="report-section">
      <div class="report-section-head"><span class="report-no">01</span><div><h3>비교자료 속 우리 아파트 계약금액</h3><p>승강기 교체 계약 관련 조사자료 19개 단지의 대당 금액을 나란히 표시했습니다.</p></div></div>
      <div class="report-highlight"><strong>${others.length}개 비교 단지 중 <em>${higher}곳</em></strong><span>에서 자료상 대당 금액이 안암래미안의 4,909만원보다 높았습니다.</span></div>
      <div class="report-chart-legend"><span><i class="legend-before"></i> 이란 전쟁 이전 계약</span><span><i class="legend-ours"></i> 안암래미안</span><span><i class="legend-other"></i> 그 외</span></div><div class="raw-chart" aria-label="19개 단지의 승강기 대당 계약금액 비교. 안암래미안 4,909만원.">${rawChart}</div>
      <p class="report-fine">출처: ${contextLinks}</p>
    </section>
    <section class="report-section report-soft">
      <div class="report-section-head"><span class="report-no">02</span><div><h3>승강기의 크기도 함께 봐야 합니다</h3><p>낮은 계약금액만으로는 교체 조건을 모두 설명하기 어렵습니다.</p></div></div>
      <div class="report-story-grid"><div class="report-story"><span class="story-mark">13</span><h4>안암래미안의 주력 규격</h4><p>교체 대상 22대 중 <strong>20대가 13인승·1,000kg급</strong>입니다. 10인승 승강기는 공용 승강기로 2대뿐입니다.</p></div><div class="report-story"><span class="story-mark">↔</span><h4>작은 승강기와의 비교</h4><p>비교 대상에는 7인승·10인승 등 작은 규격도 있습니다.<br><strong>적재하중과 시공 범위</strong>를 함께 확인해야 합니다.</p></div></div>
      <h4 class="report-subtitle">가장 금액이 작은 Top 4 단지 환산금액 비교</h4>
      <div class="report-warning"><strong>단순히 더 싸다고 끝이 아닙니다. 같은 기준으로 놓고 봐야 합니다.</strong> 작은 승강기의 교체비용은 비교적 저렴합니다.<br>우리보다 저렴한 Top 3 단지는 모두 약 40년된 아파트 단지로 작은 승강기를 사용합니다.<br><strong>우리 아파트 주력 엘리베이터 규격(1,000kg) 기준으로 환산하면 상황이 달라집니다.</strong></div>
      <div class="normalized-chart">${normRows}</div>
    </section>
    <section class="report-section">
      <div class="report-section-head"><span class="report-no">03</span><div><h3>국제 에너지시장 불안 이후에 체결된 계약</h3><p>계약 시점을 살펴보는 것도 의미가 있습니다.</p></div></div>
      <div class="timeline"><div class="timeline-item"><span>2026.02.28</span><div><strong>중동 이란 분쟁 발발</strong><p>이후 에너지·해상운송 시장에 공급 차질과 급격한 물가 상승이 발생했습니다.</p></div></div><div class="timeline-item current"><span>2026.05</span><div><strong>안암래미안 승강기 교체 계약</strong><p>전쟁 발발 이후 계약한 금액임에도 매우 낮은 금액으로 계약하였습니다.</p></div></div></div>
      
    </section>
    <section class="report-section report-table-section">
      <div class="report-section-head"><span class="report-no">04</span><div><h3>비교자료 전체 보기</h3><p>다른 단지 자료까지 누구나 확인할 수 있도록 정리했습니다.</p></div></div>
      <details class="report-details"><summary>19개 단지 계약 비교표 펼쳐보기 <span>⌄</span></summary><div class="table-scroller" role="region" aria-label="19개 단지 비교표" tabindex="0"><table class="report-table"><thead><tr><th scope="col">아파트</th><th scope="col">세대수</th><th scope="col">승강기 대수</th><th scope="col">금액(억원)</th><th scope="col">대당(만원)</th><th scope="col">업체</th><th scope="col">계약연월</th></tr></thead><tbody>${allRows}</tbody></table></div>
      <p class="report-fine">출처: ${contextLinks}</p>
      </details>
    </section>
    <div class="report-ending"><b>합리적인 계약 여부는 숫자와 조건을 함께 확인해야 합니다.</b><p>이번 자료는 안암래미안 승강기 교체 계약의 규모와 다른 단지 비교 현황을 투명하게 설명하기 위한 참고자료입니다. 앞으로도 계약 조건과 관리 성과를 알기 쉽게 공유하겠습니다.</p></div>
  </div>`;
})();
