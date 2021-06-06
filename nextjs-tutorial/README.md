# 설치

```
npx create-next-app nextjs-tutorial
```

- vscode 플러그인 설치
  - auto import : 파일 생성 후 import를 자동으로 해준다

## 실행 명령어

```bash
npm run dev
# or
yarn dev
```

## create-next-app 설치하면

1. 컴파일과 번들링이 자동으로 된다 (webpack과 babel)
2. 자동 리프래쉬 기능으로 수정하면 화면에 바로 반영됩니다.
3. 서버사이드 랜더링이 지원된다.
4. 스태틱 파일을 지원한다.

## 타입스크립트 추가 작업

```
npm install --save-dev typescript @types/react @types/node
```

## Next.js 구조 설명

- **pages** : 폴더 밑에 .tsx 파일을 만들면 해당 파일명으로 라우팅 기능이 가능하다
  - **\_app.tsx** 기능 : 글로벌 css를 적용하거나, 프로젝트 컴포넌트 레이아웃을 잡는 용도로 사용
  - **\_document.tsx** 기능 : 서버에서만 랜더링 되고, onclick 같은 이벤트들은 작동되지 않는다
- **view** : 동적 라우팅 기능
  - **view** 라는 폴더를 만들고 동적으로 받을 변수명 파일을 생성 한다
  - [id].tsx
  - http://localhost:3000/view/12315
- **public** : image등 정적 파일이 존재하는 곳
  - 이미지 호출 시 public은 제외한 루트 url => /images

### next.js 사이트

- https://nextjs.org/docs/getting-started

## semantic UI 설치

- https://react.semantic-ui.com/

```
npm install semantic-ui-react semantic-ui-css
```

- \_app.tsx 파일에 import 시키기

```
import 'semantic-ui-css/semantic.min.css'
```

## axios 설치

```
npm i axios
```
