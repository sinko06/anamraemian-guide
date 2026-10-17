# v5 사진 자동 등록 업데이트\n\n`README-사진자동등록.md`를 먼저 확인해 주세요.\n\n# 안암래미안 관리소식 v4 · 승강기 교체 계약 홍보 게시물

이 패키지는 이전에 공개한 **v3 홈페이지의 디자인과 기능을 유지**하고, 승강기 교체 계약 비교 리포트를 추가한 버전입니다.

## 시작하기

- 코드 수정: VS Code에서 이 폴더를 엽니다.
- 홈페이지 실행: `public/index.html`을 브라우저에서 열거나 VS Code의 Live Preview / Live Server를 사용하세요.
- Cloudflare 직접 배포: 별도로 제공된 `anam-raemian-cloudflare-upload-v4.zip`을 **기존 Pages 프로젝트의 Create a new deployment → Production**에서 업로드합니다. **새 프로젝트를 만들 필요가 없습니다.**
- v4 배포 ZIP은 `index.html`이 ZIP 최상위에 오도록 구성되어 있습니다. 이전 ZIP을 다시 올리지 않도록 주의하세요.

## 새로 추가된 주요 기능

1. 메인 첫 화면에 '승강기 22대 교체 계약' 강조 카드
2. 엘리베이터 관리 게시판의 '승강기 교체 계약 현황과 타 단지 비교' 게시물
3. 19개 단지별 대당 가격 비교 그래프 및 전체 상세 표
4. 계약 이전/이후 시점 색상 구분, 안암래미안 강조 표시
5. 13인승·1,000kg급 20대라는 교체 대상의 규모 설명
6. 별도 1,000kg 환산표(산식 미검증 안내 포함)
7. PC·모바일 반응형 디자인 및 모바일 표 가로 스크롤

## 수정하는 파일

```
public/
  index.html                화면 구조, 스크립트 로딩 순서
  style.css                 기존 사이트 전체 스타일
  app.js                    게시판 이동과 사진 갤러리
  content.js                **게시판 제목/게시물 본문 수정**
  elevator-data.js          **아파트별 계약금액·대수 등 비교자료 숫자 수정**
  elevator-report.js        승강기 홍보 상세 화면 구성
  elevator-report.css       승강기 홍보 그래프와 카드 디자인
  assets/photos/            기존처럼 현장 사진 저장
```

### 계약 수치를 고치고 싶을 때

`public/elevator-data.js`만 수정하면 그래프·상세표가 함께 업데이트됩니다. 예를 들어 안암래미안 대당 평균 금액을 수정한다면 `home.costMan` 및 `competitors` 중 안암래미안 행 양쪽을 일치시켜 주세요. **첫 화면에 들어간 4,909만원도 현재는 `public/app.js`의 spotlight 문구에 고정되어 있으므로 함께 수정해야 합니다.**

'1,000kg 환산 참고자료'는 `normalized` 배열에서 수정할 수 있습니다. 수치의 환산 산식과 같은 조건 비교 가능성은 확인되지 않았습니다. 공인 환산값처럼 홍보하지 않도록 주의해 주세요.

### 사진 추가 방법

`public/assets/photos/`에 사진을 넣고, `public/content.js`의 `posts` 데이터에 사진 경로를 추가하세요. 동별 필터와 확대 기능은 v3와 같습니다. 로컬 도우미 `tools/photo-list-maker.html`도 유지했습니다.

## 배포 전 확인사항

- 제공받은 19개 단지 비교표를 옮겼습니다. 실제 계약서 및 입찰 공고문과 대조하는 것이 바람직합니다.
- 다른 단지는 '보유 15'와 같이 **전체 보유대수**로 기록된 경우가 있어 실제 계약 교체대수와 혼동하지 않아야 합니다.
- 4개 단지의 1,000kg급 환산값은 **산식 미제공·미검증** 상태입니다.
- 전쟁 개시와 국제 에너지시장 동향에 대한 참고링크는 게시물 하단에 있습니다. 전쟁이 국내 승강기 가격을 직접 인상시켰다는 인과관계는 단정하지 않았습니다.
- 모든 `public` 파일은 누구나 볼 수 있는 공개자료입니다. 주민·차량·계약 상대방의 비공개 개인정보를 등록하지 마세요.

## Cloudflare 기존 사이트 업데이트

1. https://dash.cloudflare.com/ 로그인 → **Workers & Pages**
2. **이미 공개한 안암래미안 프로젝트 선택** (새 프로젝트 생성 금지)
3. **Create a new deployment** 클릭 → **Production** 선택
4. `anam-raemian-cloudflare-upload-v4.zip`을 그대로 업로드 → **Save and Deploy**
5. 사이트 접속 → 첫 화면의 '승강기 22대 교체 계약' 카드 클릭 → 그래프와 표 확인

참고: https://developers.cloudflare.com/pages/get-started/direct-upload/
