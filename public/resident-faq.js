
 // 안암래미안 입주민 FAQ
// 장기수선충당금, 승강기, 도색, 주민 투표, 동대표 임기 안내
(function () {
  const topics = [
    { id: 'fees', n: '01', name: '장기수선충당금', question: '장기수선충당금은 얼마나 달라지나요?', summary: '2027년까지 모으고, 2028년부터 약 25% 낮추는 계획' },
    { id: 'elevator', n: '02', name: '승강기 계약', question: '엘리베이터 교체비가 너무 비싼 것 아닌가요?', summary: '22대 교체비와 입주자대표의 가격 협의' },
    { id: 'painting', n: '03', name: '외벽 도색', question: '외벽을 왜 다시 칠하고, 비용은 왜 올랐나요?', summary: '벗겨지는 도색을 오래가는 도색으로' },
    { id: 'vote', n: '04', name: '주민 투표', question: '왜 이번 주민 투표에 참여해야 하나요?', summary: '필요한 공사와 2028년 이후 장충금 조정' },
    { id: 'term', n: '05', name: '임기 제한', question: '동대표의 3회 임기제한은 왜 삭제하나요?', summary: '성북구청 행정지도에 따른 규약 변경' }
  ];

  const sourcePdf = 'assets/docs/외벽도색-시공방식-참고자료.pdf';
  const lawUrl = 'https://law.go.kr/lsLinkCommonInfo.do?lspttninfSeq=132088';

  const newRates = [
    ['2025.01 ~ 2027.12', '6.35%', '15.04%'],
    ['2028.01 ~ 2032.12', '7.94%', '22.98%'],
    ['2033.01 ~ 2038.12', '14.01%', '37%'],
    ['2039.01 ~ 2046.12', '23%', '60%'],
    ['2047.01 ~ 2055.08', '40%', '100%']
  ];

  const oldRates = [
    ['2025.01 ~ 2034.12', '15.00%', '20.79%'],
    ['2035.01 ~ 2044.12', '30.00%', '50.79%'],
    ['2045.01 ~ 2055.12', '49.21%', '100%']
  ];

  const rateRows = rows => rows.map(r =>
    `<tr><td>${r[0]}</td><td class="faq-table-strong">${r[1]}</td><td>${r[2]}</td></tr>`
  ).join('');

  const cite = (label, link, extra = '') =>
    `<a class="faq-source-link" href="${link}" ${extra}>${label} <span aria-hidden="true">↗</span></a>`;

  // 중요한 내용은 굵게, 특히 중요한 내용은 초록색으로 표시합니다.
  // 색상까지 이 JS에 넣었으므로 CSS 파일은 수정하지 않아도 됩니다.
  const green = text => `<span style="color:#126b3c;font-weight:850;display:inline;">${text}</span>`;

  const keyline = text => `
    <div style="background:#eaf6ef;border-left:5px solid #168048;border-radius:8px;padding:18px 20px;margin:20px 0;line-height:1.75;font-size:1.1em;">
      ${text}
    </div>`;

  const body = {

    // =====================================================
    // 01. 장기수선충당금
    // =====================================================
    fees: `
      <p class="faq-lead">
        엘리베이터를 교체하려면 큰 금액이 필요했습니다.
        그래서 <strong>2027년까지 장기수선충당금을 좀 더 모으고</strong>,
        엘리베이터 교체에 대비한 뒤
        <strong>2028년부터 부담을 낮추기로 계획</strong>하였습니다.
      </p>

      ${keyline(`
        가장 중요한 변화는
        ${green('2028년부터 5년 동안, 앞선 3년보다 장충금 적립 부담을 약 25% 낮추는 것')}입니다.
      `)}

      <div class="faq-duo">
        <div class="faq-number old">
          <span>2025~2027년 · 승강기 교체비 마련</span>
          <strong>100<small>%</small></strong>
          <p>비교 기준: 이 기간의 1년 평균</p>
        </div>

        <div class="faq-number proposed">
          <span>2028~2032년 · 부담을 낮추는 기간</span>
          <strong>75<small>%</small></strong>
          <p>앞선 기간의 약 75%만 적립</p>
        </div>
      </div>
      ${keyline(`
        <b>추가 공사를 한다고 장충금을 더 걷는 것은 아닙니다.</b><br>
        ${green('2028년부터 장충금을 약 25% 낮추는 계획은 그대로 유지됩니다.')}
        <br><br>
        기존 공사비를 <b>적극적인 가격 협상으로 절약</b>하고 <b>공용시설을 활용한 부대수입을 창출</b>하여,
        <br>${green('아낀 돈으로 필요한 공사를 추가로 진행')}하려는 것입니다.
      `)}
      <div class="faq-callout neutral">
        <strong>요율표는 이렇게 보시면 됩니다</strong>
        <p>
          표에 적힌 <b>6.35%</b>는 <b>3년 동안</b> 모을 몫이고,
          <b>7.94%</b>는 <b>5년 동안</b> 모을 몫입니다.
        </p>
        <p>
          1년씩 나누어 보면 <b>2.117% → 1.588%</b>로,
          ${green('약 25% 줄어듭니다.')}
          <b>‘누적’</b>은 지금까지 모으는 비율을 더한 숫자입니다.
        </p>
      </div>

      <div class="faq-tables">
        <div>
          <h4>현재 관리규약 (2025.06)</h4>
          <div class="faq-table-scroll">
            <table class="faq-table">
              <thead>
                <tr>
                  <th>기간</th>
                  <th>모을 비율</th>
                  <th>누적</th>
                </tr>
              </thead>
              <tbody>${rateRows(oldRates)}</tbody>
            </table>
          </div>
        </div>

        <div>
          <h4>바꾸려는 관리규약 (2026.08)</h4>
          <div class="faq-table-scroll">
            <table class="faq-table">
              <thead>
                <tr>
                  <th>기간</th>
                  <th>모을 비율</th>
                  <th>누적</th>
                </tr>
              </thead>
              <tbody>${rateRows(newRates)}</tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="faq-source">
        ${cite(
          '장충금 요율표 원본 보기',
          'assets/docs/장기수선충당금-요율-개정안.png',
          'target="_blank" rel="noopener"'
        )}
        <span>
          비교 계산: (7.94% ÷ 5년) ÷ (6.35% ÷ 3년) = 약 75%
        </span>
      </div>
    `,

    // =====================================================
    // 02. 승강기 계약
    // =====================================================
    elevator: `
      <p class="faq-lead">
        ${green('엘리베이터를 비싸게 교체한다는 주장은 사실이 아닙니다.')}<br>
        실제 계약금액과 다른 아파트의 교체비를 비교한
        <b>객관적인 자료를 준비했습니다.</b>
      </p>

      <div class="faq-stat-grid">
        <div class="faq-stat">
          <span>교체 대수</span>
          <strong>22<small>대</small></strong>
        </div>
        <div class="faq-stat">
          <span>총 계약금액</span>
          <strong>10.8<small>억원</small></strong>
        </div>
        <div class="faq-stat">
          <span>1대당 평균</span>
          <strong>4,909<small>만원</small></strong>
        </div>
      </div>

      ${keyline(`
        ${green('입주자대표회의와 입주자대표가 업체와 적극적으로 가격을 협의해 교체비를 낮췄습니다.')}
        그만큼 장기수선충당금 지출을 아낄 수 있게 되었습니다.
      `)}

      <div class="faq-bullet-grid">
        <div>
          <strong>엘리베이터 크기도 중요합니다</strong>
          <p>
            22대 중 20대는 <b>13인승·1,000kg급</b>입니다.
            작은 엘리베이터 가격과 단순 비교하기는 어렵습니다.
          </p>
        </div>

        <div>
          <strong>다른 아파트와의 상세비교</strong>
          <p>
            <b>자세한 내용은 ${green('[승강기 계약 비교자료 보기]')}에서 확인하실 수 있습니다.
          </p>
        </div>
      </div>

      <div class="faq-source">
        ${cite('승강기 계약 비교자료 보기', '#post/elev-saving')}
        <span>19개 단지 비교 리포트</span>
      </div>
    `,

    // =====================================================
    // 03. 외벽 도색
    // =====================================================
    painting: `
      <p class="faq-lead">
        외벽 페인트가 <strong>벌써 벗겨지고 갈라지는 곳</strong>이 있습니다.
        이번에는 같은 문제가 되풀이되지 않도록
        ${green('오래가는 좋은 자재로 제대로 칠하려는 것')}입니다.
      </p>

      <div class="faq-bullet-grid">
        <div>
          <strong>왜 다시 칠하나요?</strong>
          <p>
            기존 도색이 빨리 벗겨졌기 때문입니다.
            손상된 곳을 먼저 고치고,
            <b>더 튼튼한 페인트와 시공 방법</b>으로
            오래 유지되도록 하려는 것입니다.
            <br>아래 ${green('[현재 외벽 사진 보기]')}를 통해 자세히 보실 수 있습니다.
          </p>
        </div>

        <div>
          <strong>왜 비용이 올랐나요?</strong>
          <p>
            법령 개정으로 아파트 외벽 도색은
            <b>롤러 방식이 의무화</b> 되었습니다.
            롤러칠은 페인트를 두껍고 촘촘하게 발라
            ${green('잘 벗겨지지 않고 오래 유지되는 장점')}이 있습니다.
          </p>
          <p>
            다만 작업 시간과 인건비, 재료비가 늘어나
            기존 뿜칠보다 <b>공사비가 약 30~50% 더 들 수 있습니다.</b>
          </p>
        </div>
      </div>

      <div class="faq-budget">
        <span>외벽 도색 + 지붕 방수 계획금액</span>
        <div class="faq-budget-numbers">
          <div>
            <small>종전 계획</small>
            <strong>약 4.05억원</strong>
          </div>
          <span class="faq-budget-arrow">→</span>
          <div>
            <small>바뀌는 계획</small>
            <strong>5.8억원</strong>
          </div>
        </div>
        <p>
          외벽 도색과 지붕 방수를 합친 금액입니다.
          계획금액은 약 <b>1억 7,487만원</b> 늘었습니다.
        </p>
      </div>

      ${keyline(`
        ${green('5.8억원은 실제 공사 계약금액이 아닙니다.')}
        공사 계획에는 비용을 넉넉하게 잡아 두고,
        (엘리베이터 공사 금액을 낮춘 것처럼) 실제 공사할 때는 견적을 받고 가격을 협의해
        ${green('적정한 금액으로 낮출 계획')}입니다.
      `)}

      <div class="faq-source">
        ${cite('현재 외벽 사진 보기', '#post/wall-plan')}
        ${cite(
          '도색 방법 설명자료(PDF)',
          sourcePdf,
          'target="_blank" rel="noopener"'
        )}
        <span>외벽 도색·지붕 방수 수선계획 자료</span>
      </div>
    `,

    // =====================================================
    // 04. 주민 투표
    // =====================================================
    vote: `
      <p class="faq-lead">
        이번 투표는 <strong>아파트에 필요한 공사를 진행하고</strong>,
        ${green('2028년부터 장충금 부담을 낮추는 계획을 적용')}하기 위해 중요합니다.
      </p>

      <ol class="faq-steps">
        <li>
          <strong>2028년부터 장충금 부담을 줄이려면 찬성표가 필요합니다</strong>
          <p>
            2027년까지는 승강기 교체비를 모으고,
            2028년부터는
            ${green('앞선 기간보다 약 25% 낮은 수준으로 적립')}
            하도록 바꾸는 내용이 들어 있습니다.
          </p>
          <p>
            ${green('이번 관리규약 개정안이 통과되지 않으면 이 요율표로 변경할 수 없습니다.')}
          </p>
        </li>
        <li>
          <strong>미뤄온 공사를 진행해야 합니다</strong>
          <p>
            우리 아파트는 20년이 넘은 아파트로 <b>외벽 도색, 지붕 방수, 보행로, 주차시설</b> 등
            손봐야 할 곳이 많습니다.
            계획을 바꿔 필요한 공사를 적시에 진행하려는 것입니다.
          </p>
        </li>

        <li>
          <strong>승강기 교체비를 아껴 여유가 생겼습니다</strong>
          <p>
            입주자대표의 적극적인 가격 협의로
            <b>승강기 교체에 들어갈 돈을 줄였고</b>, 드라마 촬영 장소 제공 등으로 수익을 창출하여
            다른 시설도 고칠 수 있는 여력이 생겼습니다.
          </p>
        </li>
      </ol>

      ${keyline(`
        ${green('꼭 투표에 참여해 주세요.')}
        우리 아파트에 필요한 공사와
        앞으로 낼 장충금에 관계된 중요한 결정입니다.
      `)}
    `,

    // =====================================================
    // 05. 동대표 임기 제한
    // =====================================================
    term: `
      <p class="faq-lead">
        이번 변경은 동대표가 무조건 계속할 수 있도록 하는 것이 아닙니다.
        <strong>우리 아파트만 따로 정해 놓은 '총 3회(6년) 제한'</strong>을
        없애고, <strong>공동주택관리법의 기준</strong>을 따르려는 것입니다.
      </p>

      ${keyline(`
        성북구청에서
        ${green('행정지도를 통해 이 조항의 삭제를 요청')}했습니다.
        ${green('미이행시 우리 아파트가 과태료 대상')}이 될 수도 있어서 규약을 재정비하는 것입니다.
      `)}

      <div class="faq-bullet-grid">
        <div>
          <strong>지금 규약</strong>
          <p>
            동대표를 <b>총 3회(6년)까지만</b>
            할 수 있다고 정해 놓았습니다.
          </p>
        </div>

        <div>
          <strong>바꿀 규약</strong>
          <p>
            아파트 자체의 <b>3회 제한 문구를 삭제</b>하고,
            공동주택관리법의 선출 기준을 따릅니다.
          </p>
        </div>
      </div>

      <div class="faq-check">
        <strong>그러면 아무나 계속 동대표를 할 수 있나요?</strong>
        <p>
          <b>아닙니다.</b>
          법에서는 기본적으로
          <b>임기 2년, 한 번 더 가능</b>하도록 정하고 있습니다.
          <b>후보자가 없는 등 법에서 정한 경우</b>에 한해서만
          예외적으로 다시 선출할 수 있습니다.
        </p>
      </div>

      <div class="faq-source">
        ${cite(
          '공동주택관리법 시행령 제13조 보기',
          lawUrl,
          'target="_blank" rel="noopener noreferrer"'
        )}
        <span>동대표 임기·중임에 관한 법령</span>
      </div>
    `
  };

  // =====================================================
  // FAQ 본문 렌더링
  // =====================================================
  const section = t => `
    <section
      class="resident-faq-article"
      id="faq-${t.id}"
      aria-labelledby="faq-heading-${t.id}"
    >
      <div class="faq-article-header">
        <div class="faq-index">${t.n}</div>
        <div>
          <span class="faq-chip">${t.name}</span>
          <h2 id="faq-heading-${t.id}">${t.question}</h2>
        </div>
      </div>

      <div class="faq-article-body">
        ${body[t.id]}
      </div>

      <div class="faq-back">
        <a href="#faq">↑ FAQ 목록으로</a>
      </div>
    </section>
  `;

  // =====================================================
  // FAQ 페이지 전체 렌더링
  // =====================================================
  window.renderResidentFAQ = () => `
    <section class="faq-hero">
      <div class="shell">
        <a class="faq-home-link" href="#home">← 홈으로</a>
        <div class="eyebrow">
          ANAM RAEMIAN · RESIDENT GUIDE
        </div>

        <h1>
          입주민들이 궁금해하시는<br>
          <em>5가지 이야기</em>
        </h1>

        <p>
          장기수선충당금부터 승강기·도색·투표·동대표 규약까지,<br>
          꼭 알아야 할 내용을 쉽게 정리했습니다.
        </p>

        <div class="faq-revision">
          자료 기준: 2026년 10월 · 관리규약 개정(안) 및 수선계획 주요내용
        </div>
      </div>
    </section>

    <section class="faq-content section">
      <div class="shell">

        <nav class="faq-topic-grid" aria-label="궁금한 질문 바로가기">
          ${topics.map(t => `
            <a href="#faq/${t.id}">
              <span class="faq-topic-count">${t.n} / ${t.name}</span>
              <strong>${t.question}</strong>
              <small>${t.summary}</small>
              <span class="faq-topic-arrow">자세히 보기 ↗</span>
            </a>
          `).join('')}
        </nav>

        <div class="faq-articles">
          ${topics.map(section).join('')}
        </div>

        <div class="faq-finish">
          <strong>우리 아파트의 미래를 함께 결정해 주세요.</strong>
          <p>
            장기수선충당금과 공사 계획,
            관리규약 변경 내용을 살펴보시고
            주민 투표에 참여해 주세요.
          </p>
          <a href="#home">홈으로 돌아가기 →</a>
        </div>

      </div>
    </section>
  `;
})();
