# MD에서 공개 주소까지: 학생 실습 안내

디지털헤리티지 큐레이터 4기 · 2026-11-11 공식 문서 확인

수업에서는 Codex와 Antigravity 중 **하나**를 골라 사용합니다. 두 도구에 같은 `plan.md`를 줄 수 있습니다. 전시의 내용과 자료는 학생이 판단하고, AI는 파일 작성과 기능 구현을 돕습니다.

## 1. 시작 전에 준비할 것

- 사용할 AI 도구의 계정과 로그인. 개인별 이용 가능 범위를 미리 확인합니다.
- GitHub 계정과 로그인. 이번 안내는 개인 실습용 공개 저장소를 기준으로 합니다.
- Chrome 등 웹브라우저, 작업 폴더, `plan.md`, `sources.md`.
- 공개 이용 조건을 확인한 사진. 아직 없으면 빈 이미지 자리로 시작합니다.

이 수업의 기본 방식은 **HTML·CSS·JavaScript 파일을 만들어 GitHub Pages에 올리는 것**입니다. 회원가입, 서버 저장, 외부 AI API 호출은 첫 실습에 포함하지 않습니다. VS Code와 두 AI 앱을 모두 설치할 필요는 없습니다.

## 2. 작업 폴더 준비

1. 내 컴퓨터에 `heritage-exhibit` 폴더를 만듭니다.
2. 예제 또는 빈 양식을 복사해 `plan.md`로 저장합니다.
3. 같은 폴더에 `sources.md`를 두고 자료를 기록합니다.
4. 그 안에 `assets` 폴더를 만들고 확인한 이미지를 넣습니다.
5. MD의 파일명과 실제 파일명을 맞춥니다. 예: `school.jpg`와 `School.JPG`를 혼용하지 않습니다.

Windows에서는 탐색기의 파일 확장명 표시를 켜서 `plan.md.txt`처럼 저장되지 않았는지 봅니다. 수정은 앱의 문서 편집기나 일반 텍스트 편집기를 사용해도 됩니다.

## 3A. Codex로 시작하기

2026-11-11의 OpenAI 공식 안내는 **ChatGPT 데스크톱 앱에서 Codex를 선택하는 흐름**을 설명합니다. 기존 독립 Codex 앱·IDE 확장·웹 환경은 화면이 다를 수 있으므로 강사 시연 환경과 맞춥니다. 여기서는 내 컴퓨터 폴더를 수정하는 데스크톱 방식으로 안내합니다.

1. [공식 시작 안내](https://learn.chatgpt.com/docs/quickstart)에서 운영체제에 맞는 데스크톱 앱을 설치하고 ChatGPT 계정으로 로그인합니다.
2. ChatGPT 선택 메뉴에서 **Codex**를 선택합니다.
3. 새 프로젝트를 만들거나 폴더를 열어 `heritage-exhibit`를 작업 폴더로 연결합니다. 기존 로컬 프로젝트에서는 프로젝트 편집의 폴더 추가 기능을 이용할 수 있습니다.
4. 새 대화에서 `prompts.md`의 1번 요청을 보냅니다. AI가 `plan.md`와 실제 파일을 읽었는지 확인합니다.
5. 먼저 나온 구현 계획을 읽고 대상, 화면, 행동을 수정합니다. 사용할 수 있는 계획 모드가 있으면 활용하고, 메뉴가 다르면 ‘아직 수정하지 말고 계획만 보여줘’라고 요청합니다.
6. 계획이 맞으면 2번 요청으로 실제 파일을 만들고 실행하게 합니다.
7. AI가 알려준 미리보기 주소를 브라우저에서 열고 직접 관람합니다. 문제가 있으면 화면과 재현 순서를 함께 보냅니다.

**일반 대화에 코드를 받아 보는 것과, 작업 폴더에 파일이 만들어지는 것을 구분합니다.** `index.html`이 실제 폴더에 있는지 확인하세요. 클라우드 프로젝트에 파일을 첨부하는 것만으로 내 컴퓨터의 같은 폴더가 자동 연결되지는 않습니다.

참고: [데스크톱 앱](https://learn.chatgpt.com/docs/app), [프로젝트와 폴더](https://learn.chatgpt.com/docs/projects).

## 3B. Antigravity로 시작하기

이 안내는 현재 공식 문서의 **Antigravity App**을 기준으로 합니다. Antigravity IDE를 이미 쓰는 학생은 프로젝트 폴더를 열고 에이전트 대화에서 같은 요청을 사용합니다. 두 버전을 함께 설치할 필요는 없습니다.

1. [공식 다운로드](https://antigravity.google/download)에서 운영체제에 맞게 설치하고 Google 계정으로 로그인합니다.
2. 프로젝트 목록 옆 **New Project**를 선택합니다.
3. **Add Folder**로 `heritage-exhibit` 폴더를 지정한 뒤 **Create**로 만듭니다.
4. 새 대화에서 현재 프로젝트를 확인하고, 실행 위치를 선택해야 하면 이번 실습에서는 **Local**을 사용합니다.
5. `/plan` 뒤에 `prompts.md` 1번 내용을 입력합니다. 제안된 구현 계획에서 자료와 화면을 검토하고 수정할 점을 알려줍니다.
6. 계획이 맞으면 **Proceed**로 제작을 시작하거나 계획 확인 후 구현 요청을 보냅니다.
7. 실제로 생긴 파일과 실행 주소를 확인하고, 브라우저에서 눌러 보며 수정합니다.

앱이 실행이나 파일 접근 권한을 요청하면 대상 폴더와 요청 내용을 읽습니다. 수업 폴더의 필요한 작업 범위로 진행합니다. 메뉴가 다르면 공식 안내와 설치 버전을 비교합니다.

참고: [시작 안내](https://antigravity.google/docs/getting-started), [계획 기능](https://antigravity.google/docs/plan/), [공식 실습](https://codelabs.developers.google.com/getting-started-google-antigravity).

## 4. 제작 중 매번 확인하는 것

| AI의 작업 뒤 | 학생이 확인할 행동 |
| --- | --- |
| 계획을 제안했다 | 내가 정한 주제와 대상, 자료, 행동인지 읽는다 |
| 파일을 만들었다 | 실제 폴더와 브라우저 화면을 연다 |
| 기능을 추가했다 | 시작, 결과, 돌아오기를 직접 실행한다 |
| 오류를 고쳤다 | 문제가 났던 같은 순서로 다시 관람한다 |
| 작업이 끝났다고 한다 | 완료 기준과 남은 일을 대조한다 |

AI에게 여러 기능을 한 번에 추가시키기보다 첫 관람 흐름을 확인하고 넓힙니다. 기획이 바뀌면 대화뿐 아니라 `plan.md`도 고칩니다.

## 5. 세 종류의 주소

| 예시 주소 | 뜻 | 친구에게 공유할 주소인가? |
| --- | --- | --- |
| `file:///C:/.../index.html` | 내 컴퓨터의 파일 | 아니요 |
| `http://localhost:8000` | 내 컴퓨터에서 실행한 미리보기. 포트 번호는 환경마다 다름 | 아니요 |
| `https://내계정.github.io/heritage-exhibit/` | GitHub Pages가 공개한 웹사이트 | 예 |

GitHub 저장소 주소 `https://github.com/내계정/heritage-exhibit`는 파일과 변경 이력을 보는 주소입니다. 전시 관람 주소와 다릅니다.

## 6. 공개할 파일 준비

`prompts.md` 5번을 보내고 파일 목록을 확인합니다. 첫 실습에서 사이트 최상위에 필요한 파일은 다음과 같습니다.

| 올릴 항목 | 확인할 점 |
| --- | --- |
| `index.html` | 저장소 첫 화면의 파일 목록에서 바로 보여야 함 |
| `style.css`, `script.js` | HTML에서 연결한 이름과 일치 |
| `assets` 폴더 | 하위 폴더 구조와 이미지명 유지 |
| `README.md` | 공개해도 되는 소개와 실행 방법 |
| `plan.md`, `sources.md` | 공개 가능한 기획·출처 내용만 포함 |

이미지의 이용 조건을 확인하고, 계정 정보·비밀키·개인정보·불필요한 대용량 원본을 제외합니다. 사진이 미준비이면 ‘자료 이미지 준비 중’으로 공개할 수 있습니다.

**ZIP 파일 자체를 올리지 않습니다.** 폴더의 내용물을 올립니다. `heritage-exhibit/index.html`이 한 번 더 중첩되지 않도록 합니다. 내부 경로는 `./assets/school.jpg`처럼 씁니다. `/assets/school.jpg`는 프로젝트 사이트의 저장소 이름 부분을 빠뜨리는 원인이 될 수 있습니다.

`package.json`과 `src`만 있고 빌드가 필요한 결과물이라면 이 안내의 업로드 방식과 다릅니다. AI에게 처음 약속한 빌드 없는 구조로 맞추게 하거나, 강사와 빌드·배포 방식을 따로 정합니다. 소스 파일만 올렸다고 브라우저가 자동으로 빌드해 주지는 않습니다.

## 7. GitHub 저장소 만들고 파일 올리기

1. GitHub에 로그인하고 새 저장소 만들기를 선택합니다.
2. 저장소 이름을 `heritage-exhibit`로 입력합니다. 이미 같은 이름이 있으면 다른 이름을 정하고 MD와 주소 안내에도 반영합니다.
3. 개인 실습에서는 **Public**을 선택합니다. GitHub Free의 Pages는 공개 저장소로 이용합니다. 비공개 자료는 포함하지 않습니다.
4. README를 추가하도록 선택하고 저장소를 만듭니다. 일반적으로 기본 브랜치는 `main`입니다. 실제 이름을 확인합니다.
5. 저장소에서 **Add file**의 파일 업로드를 선택합니다.
6. `index.html`, CSS·JS, `assets` 폴더 등 공개할 항목을 넣습니다. 기존 README와 같은 이름이면 변경 내용을 확인합니다.
7. 변경 설명에 ‘첫 웹전시 초안’처럼 적고 저장합니다. 이 기록을 **Commit**이라고 부릅니다. 본인 소유의 새 실습 저장소에서는 기본 브랜치에 저장해 진행합니다. 팀의 기존 보호 브랜치 규칙을 바꾸지 않습니다.
8. 파일 목록에서 `index.html`이 바로 보이는지, `assets` 안에 사진이 있는지 확인합니다.

한 번에 업로드가 안 되는 크기는 아래 용량 항목을 확인합니다.

## 8. GitHub Pages 켜기

1. 저장소의 **Settings**에서 **Pages**를 엽니다.
2. 배포 원본을 **Deploy from a branch**로 설정합니다.
3. 브랜치는 **main**, 폴더는 **/(root)**를 선택하고 **Save**합니다.
4. 저장소의 **Actions**에서 배포 작업의 완료 여부를 확인합니다.
5. Pages 설정에 표시되는 공개 주소 또는 **Visit site**로 엽니다. 반영에 최대 약 10분이 걸릴 수 있습니다.
6. 로그아웃 상태나 시크릿 창, 다른 사람의 휴대폰에서 열어 봅니다.

예상 주소는 `https://내계정.github.io/heritage-exhibit/`입니다. 실제로는 **Pages 설정에 표시된 주소를 복사**합니다. 파일 업로드만으로 공개 설정까지 끝났다고 판단하지 않습니다.

## 9. 수정한 내용을 다시 공개하기

1. AI로 수정한 뒤 로컬에서 확인합니다.
2. 바뀐 파일을 저장소의 **같은 경로**에 다시 업로드합니다. 파일을 삭제하거나 이름을 바꿨다면 저장소의 이전 파일도 정리해야 합니다.
3. ‘모바일 닫기 버튼 수정’처럼 변경 설명을 남겨 Commit합니다.
4. Actions에서 새 배포가 끝난 것을 확인합니다.
5. 공개 주소를 새로고침하고 바뀐 동작을 다시 실행합니다.

GitHub Desktop이나 앱의 Git 기능을 쓰는 경우에는 **Commit**으로 내 컴퓨터에 변경을 기록한 다음 **Push**로 GitHub에 보냅니다. 브라우저 업로드 방식은 GitHub에서 직접 기록하므로 별도 Push 버튼을 누르지 않습니다. 두 방식을 혼용할 때는 원격의 최신 변경을 먼저 받아 충돌을 피합니다.

## 10. 자주 막히는 부분

| 증상 | 먼저 확인할 것 |
| --- | --- |
| 공개 주소가 404 | Pages 배포 성공 여부, 선택 브랜치와 폴더, 최상위 `index.html`, 실제 공개 주소 |
| 글만 보이고 디자인이 없음 | CSS 파일 업로드 여부, 이름과 상대경로 |
| 로컬에서는 보이던 사진이 없음 | 파일이 저장소에도 있는지, 대소문자, `./assets/...` 경로 |
| 수정 전 화면이 계속 나옴 | 변경 파일 Commit 여부, 새 배포 완료 여부, 새로고침 |
| 친구 휴대폰에서 localhost가 안 열림 | 내 컴퓨터 주소를 보냈는지 확인하고 Pages 주소 공유 |
| 파일이 커서 업로드가 안 됨 | 아래 제한 확인 후 웹용으로 용량 줄이기 |
| 자료가 없어서 만들 수 없다고 함 | 빈자리와 안내 문구로 먼저 흐름을 구현하도록 요청 |
| API·로그인이 필요한 기능이 안 됨 | 이번 정적 사이트의 범위인지 확인. 서버 기능은 별도 설계 필요 |

## 11. 이미지·3D 파일 용량

- GitHub 웹 업로드는 **파일당 25MiB, 한 번에 100개 파일**까지입니다.
- 일반 Git은 100MiB보다 큰 개별 파일을 막습니다. Desktop을 쓴다고 이 제한이 없어지지 않습니다.
- GitHub Pages의 **게시된 사이트** 크기 제한은 1GB입니다. GitHub 무료 계정 전체 저장 공간이 1GB라는 뜻은 아닙니다.
- **Git LFS는 GitHub Pages에서 사용할 수 없습니다.** 큰 3D 파일을 LFS로 올리면 전시에서 자동으로 열릴 것이라고 가정하지 않습니다.

첫 수업에서는 이미지를 웹용으로 줄여 사용합니다. 3D를 넣을 팀은 폴리곤·텍스처·파일 크기를 줄여 기기에서 직접 확인합니다. 큰 원본을 나누어 업로드하는 것만으로 웹에서 원래 모델이 열리지는 않습니다. 필요하면 외부 자료 호스팅을 별도로 검토하거나 이번 초안은 이미지로 완성합니다.

## 12. 제출할 것

공개 전시 URL, 저장소 URL, `plan.md`, `sources.md`, 수정 전후 기록을 남깁니다. `submission.md`의 실제 확인한 항목만 체크합니다. 공개에 실패했다면 실행 가능한 로컬 파일과 실패 단계·오류 문구를 함께 제출하고 후속 해결 대상으로 기록합니다.

## 공식 참고 자료

앱 화면과 서비스 정책은 바뀔 수 있습니다. 아래는 2026-11-11 확인한 공식 안내입니다.

- [OpenAI 시작 안내](https://learn.chatgpt.com/docs/quickstart)
- [OpenAI 프로젝트와 로컬 폴더](https://learn.chatgpt.com/docs/projects)
- [Antigravity 시작 안내](https://antigravity.google/docs/getting-started)
- [Antigravity 계획 기능](https://antigravity.google/docs/plan/)
- [GitHub Pages 소개](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub 파일 업로드](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [GitHub Pages 배포 원본 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages 사이트 만들기](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub Pages 제한](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [Git LFS와 Pages 제한](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage)
