// ===================================================================
// 외벽/옥상 현장사진 게시판 : 문제 유형별 자동 등록 (2026-10-16)
// 총 78장 = 외벽 72장 + 옥상 6장. 원본 동 번호 및 원본 파일명 공개 안 함.
// 설치: ZIP의 assets/photos/* 를 public/assets/photos/ 로 복사.
// 원본 파일 대응관계는 별도의 비공개 CSV에서만 확인하십시오.
// 사진으로 손상 원인·위험도·누수 여부를 확정할 수 없습니다.
// ===================================================================

const exteriorProblemCounts = {
  "외벽균열": 30,
  "마감파손": 13,
  "도장박리": 10,
  "오염흔적": 12,
  "보수흔적": 7,
  "옥상방수": 6
};
const exteriorProblemLabels = {
  "외벽균열": "외벽 균열",
  "마감파손": "외벽 파손·들뜸",
  "도장박리": "벗겨짐",
  "오염흔적": "착색·녹물 흔적",
  "보수흔적": "마감 불균일",
  "옥상방수": "옥상 방수층 손상"
};
const exteriorPhotoCaptions = {
  "외벽균열_001.jpg": "외벽 연결부 주변에 반복된 가로 손상 흔적",
  "외벽균열_002.jpg": "외벽 파손된 부위로 흘러나오는 철근녹물",
  "외벽균열_003.jpg": "외벽 표면에 나타난 국부적인 균열",
  "외벽균열_004.jpg": "외벽 모서리 주변의 가는 균열과 착색 흔적",
  "외벽균열_005.jpg": "외벽 표면에 여러 방향으로 퍼진 균열 흔적",
  "외벽균열_006.jpg": "상부 외벽에 길게 나타난 균열 또는 틈",
  "외벽균열_007.jpg": "상부 외벽의 틈을 다른 방향에서 촬영한 장면",
  "외벽균열_008.jpg": "외벽 가로 이음부를 따라 나타난 벌어짐",
  "외벽균열_009.jpg": "외벽 표면의 선형 균열 흔적",
  "외벽균열_010.jpg": "외벽 모서리와 발코니 연결부 주변의 균열",
  "외벽균열_011.jpg": "창호 하부의 가로 균열 및 물 흐름 흔적",
  "외벽균열_012.jpg": "외벽 표면에 나타난 국부적인 균열",
  "외벽균열_013.jpg": "외벽 중간부 가로 방향의 균열 흔적",
  "외벽균열_014.jpg": "외벽 연결부 주변에 반복된 가로 손상 흔적",
  "외벽균열_015.jpg": "외벽 가로 경계면의 균열 및 표면 불균일",
  "외벽균열_016.jpg": "외벽 가로 균열과 주변 변색 흔적",
  "외벽균열_017.jpg": "외벽 가로 경계면을 따라 나타난 균열",
  "외벽균열_018.jpg": "가로 균열과 주변의 가는 실금들",
  "외벽균열_019.jpg": "벽면 가로 균열 및 도장층 벗겨짐 흔적",
  "외벽균열_020.jpg": "기둥형 외벽 표면에 세로로 나타난 균열",
  "외벽균열_021.jpg": "가로 이음부를 따라 길게 나타난 균열",
  "외벽균열_022.jpg": "외벽 세로 방향으로 뻗은 균열",
  "외벽균열_023.jpg": "외벽 여러 높이에서 관찰되는 가로 균열 흔적",
  "외벽균열_024.jpg": "창호 인접 외벽의 가로 방향 표면 손상",
  "외벽균열_025.jpg": "외벽 표면에 이어지는 복수의 가는 균열",
  "외벽균열_026.jpg": "창호 모서리 주변의 여러 가는 실금",
  "외벽균열_027.jpg": "외벽의 여러 방향으로 나타난 미세 균열",
  "외벽균열_028.jpg": "가로 균열과 마감 손상 흔적이 함께 보이는 부분",
  "외벽균열_029.jpg": "발코니와 인접한 외벽의 가로 균열",
  "외벽균열_030.jpg": "벽면에 세로로 이어지는 균열 흔적",
  "마감파손_001.jpg": "외벽 마감재 일부가 깨져 보이는 부분",
  "마감파손_002.jpg": "외벽 표면의 국부적인 패임 및 손상 흔적",
  "마감파손_003.jpg": "저층부 외벽 모서리의 갈라짐과 마감층 손상",
  "마감파손_004.jpg": "외벽 표면의 넓은 들뜸과 박락 양상",
  "마감파손_005.jpg": "외벽 표면의 타공 흔적·국부적인 패임",
  "마감파손_006.jpg": "외벽 표면의 작은 구멍과 금속성 부품 주변 손상",
  "마감파손_007.jpg": "외벽 가장자리의 깨짐 및 표면 벗겨짐",
  "마감파손_008.jpg": "외벽 일부의 표면 손상과 변색 흔적",
  "마감파손_009.jpg": "외벽 모서리에 균열과 마감 손상이 함께 보이는 부분",
  "마감파손_010.jpg": "외벽 수평 이음부에 벌어진 틈과 표면 손상",
  "마감파손_011.jpg": "발코니 인접 외벽 모서리의 국부적인 파손",
  "마감파손_012.jpg": "표면 일부가 벗겨져 금속성 부분이 드러난 모습",
  "마감파손_013.jpg": "외벽의 국부적인 깨짐과 마감층 갈라짐",
  "도장박리_001.jpg": "저층 외벽에 넓게 나타난 도장층 탈락",
  "도장박리_002.jpg": "발코니 주변의 도장층 벗겨짐 및 흐름 자국",
  "도장박리_003.jpg": "벽면 하단에 도장이 들뜨거나 벗겨진 부분",
  "도장박리_004.jpg": "상부 외벽의 도장층 벗겨짐과 균열",
  "도장박리_005.jpg": "발코니 하부의 도장층 갈라짐과 탈락",
  "도장박리_006.jpg": "로비 인근 벽면의 부분적인 도장층 손상",
  "도장박리_007.jpg": "외벽 도장층 벗겨짐과 착색이 함께 보이는 부분",
  "도장박리_008.jpg": "벽면 도장층의 국부적인 훼손 흔적",
  "도장박리_009.jpg": "외벽 가장자리에서 도장이 벗겨진 부분",
  "도장박리_010.jpg": "외벽 하부에 넓게 드러난 도장층 탈락",
  "오염흔적_001.jpg": "발코니 아래 외벽의 넓은 착색·오염 흔적",
  "오염흔적_002.jpg": "창호 하부 외벽의 표면 변색 흔적",
  "오염흔적_003.jpg": "발코니·창호 주변으로 흐른 얼룩",
  "오염흔적_004.jpg": "창호와 발코니 주변의 흐름 및 변색 흔적",
  "오염흔적_005.jpg": "상부 창호 아래로 이어진 물 흐름 형태의 얼룩",
  "오염흔적_006.jpg": "벽면에 흰색 흐름 자국이 형성된 부분",
  "오염흔적_007.jpg": "발코니 모서리에 나타난 붉은 녹물 형태의 얼룩",
  "오염흔적_008.jpg": "여러 층 발코니 주변의 붉은 녹물 형태 얼룩",
  "오염흔적_009.jpg": "복수 층 발코니 주변의 색 변화·흐름 흔적",
  "오염흔적_010.jpg": "창호 아래 외벽 표면의 변색·오염 흔적",
  "오염흔적_011.jpg": "창호 인근에 나타난 표면 오염과 흐름 자국",
  "오염흔적_012.jpg": "창호 아래로 길게 흐른 오염·변색 자국",
  "보수흔적_001.jpg": "기존 보수 부위의 색 차이와 원형 표면 자국",
  "보수흔적_002.jpg": "발코니 주변 기존 보수로 보이는 색상 차이",
  "보수흔적_003.jpg": "외벽 보수 흔적과 주변 도장색 차이",
  "보수흔적_004.jpg": "벽면 깨짐을 보수한 듯한 부위와 색상 불균일",
  "보수흔적_005.jpg": "외벽 이음부의 퍼티 등 보수 흔적",
  "보수흔적_006.jpg": "여러 위치에서 확인되는 균열 보수 흔적",
  "보수흔적_007.jpg": "외벽 일부의 보수·도장 흔적과 주변 색상 차이",
  "옥상방수_001.jpg": "옥상 난간·파라펫 주변의 마감 갈라짐과 벗겨짐",
  "옥상방수_002.jpg": "옥상 방수 표면에 교차하며 나타난 균열",
  "옥상방수_003.jpg": "옥상 난간 상부 파라펫의 균열과 마감층 박리",
  "옥상방수_004.jpg": "옥상 난간 하부의 방수 마감 손상 흔적",
  "옥상방수_005.jpg": "옥상 난간 하부의 방수·마감층 벗겨짐",
  "옥상방수_006.jpg": "옥상 난간과 바닥 접합부 주변의 방수 마감 흔적"
};

function makeProblemPhotos(counts, descriptions = {}) {
  const photos = [];
  for (const [issue, count] of Object.entries(counts)) {
    if (!Number.isInteger(count) || count < 0) {
      throw new Error(`${issue}: 사진 개수는 0 이상의 정수여야 합니다.`);
    }
    const label = exteriorProblemLabels[issue] || issue;
    for (let number = 1; number <= count; number++) {
      const filename = `${issue}_${String(number).padStart(3, '0')}.jpg`;
      photos.push({
        issue,
        issueLabel: label,
        building: label, // 기존 화면이 building 필드를 참조할 때 동 대신 유형명 표시
        image: `assets/photos/${encodeURIComponent(filename)}`,
        caption: descriptions[filename] || `${label} 사진 ${number}`
      });
    }
  }
  return photos;
}

const exteriorPhotos = makeProblemPhotos(exteriorProblemCounts, exteriorPhotoCaptions);
const exteriorWallPhotos = exteriorPhotos.filter(photo => photo.issue !== '옥상방수');
const exteriorRoofPhotos = exteriorPhotos.filter(photo => photo.issue === '옥상방수');
const exteriorSummary = Object.entries(exteriorProblemCounts)
  .filter(([issue, count]) => issue !== '옥상방수' && count > 0)
  .map(([issue, count]) => `${exteriorProblemLabels[issue]} ${count}장`)
  .join(' · ') || '외벽 현장 사진을 준비하고 있습니다.';
const roofSummary = `옥상 방수 관련 현장 사진 ${exteriorRoofPhotos.length}장`;

window.SITE_DATA = {
  categories: [
    { id: 'exterior', label: '외벽 보수·도색', short: '외벽 보수', description: '외벽과 옥상 방수층의 상태를 사진으로 공유합니다.', symbol: '▤', tone: 'sky', eyebrow: 'SAFETY & MAINTENANCE', image: '' },
    { id: 'elevator', label: '엘리베이터 공사', short: '승강기 관리', description: '안전한 승강기 운행과 효율적인 유지관리 성과를 알립니다.', symbol: '↕', tone: 'mint', eyebrow: 'SMART MAINTENANCE', image: '' },
    //{ id: 'budget', label: '관리비·예산', short: '관리비·예산', description: '주요 예산과 관리비 지출·절감 내역을 이해하기 쉽게 안내합니다.', symbol: '▥', tone: 'sand', eyebrow: 'OPEN FINANCE', image: '' },
    //{ id: 'environment', label: '단지 환경 개선', short: '환경 개선', description: '조경과 공용시설 등 더 쾌적한 단지를 위한 변화를 전합니다.', symbol: '✳', tone: 'leaf', eyebrow: 'BETTER COMMUNITY', image: '' }
  ],
  posts: [
    { id: 'wall-plan', category: 'exterior', title: '아파트 외벽 현장 사진 및 보수·도색 검토', date: '2026-10-16', summary: exteriorSummary,
      body: '외벽의 균열·마감층 파손·도장층 벗겨짐·착색·기존 보수 흔적 등 현장 사진을 문제 유형별로 정리했습니다. 사진은 현재 상태를 보여주는 기록이며, 손상 원인과 구조 안전성, 보수 범위는 전문적인 현장점검 결과를 통해 확인할 필요가 있습니다.',
      status: '현장 사진 공유', photos: exteriorWallPhotos },
    { id: 'roof-waterproof', category: 'exterior', title: '옥상 방수층 및 난간 주변 현장 사진', date: '2026-10-16', summary: roofSummary,
      body: '옥상 바닥·난간·파라펫 주변의 갈라짐과 방수·마감 상태를 외벽 사진과 구분하여 공개합니다. 방수 성능과 실제 누수 여부는 현장점검으로 확인해야 합니다.',
      status: '옥상 방수 별도 공유', photos: exteriorRoofPhotos },
    { id: 'elev-saving', category: 'elevator', type: 'elevator-report', title: '승강기 교체 계약 현황과 타 단지 비교', date: '2026-10-15', summary: '22대 교체, 대당 평균 약 4,909만원. 13인승·1,000kg급 20대를 포함한 계약의 조건과 비교자료를 공개합니다.', body: '계약 내용과 비교자료를 살펴보고, 사양과 공사 범위까지 함께 확인할 수 있도록 정리했습니다.', status: '비교자료 공개', photos: [] },
    { id: 'fee-plan', category: 'budget', title: '장기수선충당금 요율 조정안 안내', date: '2026-10-17', summary: '현행 관리규약과 2026년 개정안의 적립 요율 비교표를 입주민 FAQ에서 확인해 보세요.', body: '관리규약 개정안의 기간별 요율을 안내합니다. 실제 세대별 월 납부액은 별도 산출·공지해야 하므로 요율 수치를 그대로 월 관리비 인하율로 해석해서는 안 됩니다. FAQ 메뉴에서 자세히 확인하세요.', status: 'FAQ 설명 공개', photos: [] },
    { id: 'garden', category: 'environment', title: '단지 환경 개선 소식', date: '게시 준비 중', summary: '단지 내 시설 개선 및 환경 정비 진행 사항을 공유합니다.', body: '실제 진행된 개선 사례와 현장 사진을 등록해 주세요.', status: '준비 중', photos: [] }
  ]
};