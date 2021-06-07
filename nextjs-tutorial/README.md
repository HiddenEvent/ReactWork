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

## Next.js 구조 설명

- **pages** : 폴더 밑에 .tsx 파일을 만들면 해당 파일명으로 라우팅 기능이 가능하다
  - **\_app.tsx** 기능 : 글로벌 css를 적용하거나, 프로젝트 컴포넌트 레이아웃을 잡는 용도로 사용
  - **\_document.tsx** 기능 : 서버에서만 랜더링 되고, onclick 같은 이벤트들은 작동되지 않는다
- **view** : 동적 라우팅 기능

  - **view** 라는 폴더를 만들고 동적으로 받을 변수명 파일을 생성 한다
  - [id].tsx => 괄호[] 안에 입력한 텍스트는 = Pathvarable명 (중요)
  - http://localhost:3000/view/12315
  - https://nextjs.org/docs/routing/dynamic-routes 를 참고
  - 누르면 값을 보내주어야 하기 때문에 nextLink 참고 https://nextjs.org/docs/api-reference/next/link

- **public** : image등 정적 파일이 존재하는 곳
  - 이미지 호출 시 public은 제외한 루트 url => /images

## next.js 란

- https://nextjs.org/docs/getting-started
- Next js 모든 페이지 사전 렌더링 (Pre_rendering)
- 더 좋은 퍼포먼스
- 검색엔진최적화(SEO)

1. 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)

차이점은 언제 html 파일을 생성하는가

### [정적 생성]

- 프로젝트가 빌드하는 시점에 html 파일들이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- getStaticProps / getStaticPaths

### [서버사이드 렌더링]은 매 요청마다 html을 생성

- 항상 최신 상태 유지
- getServerSideProps

# 에러페이지 작업

- **page** 폴더 안에 404.tsx를 만들면 default로 에러페이지로 바로 보여줄 수 있다.
- 서버에러 등 다른 에러 같은 경우 **\_error.tsx** 파일을 추가하여 따로 설정하여 보여주면 된다.

# 환경변수 (Environment Variables) 사용법

- **.env.development** : 개발 환경변수 파일
- **.env.production** : 운영 환경변수 파일

## 환경변수 파일 작성방법

```javascript
//node js
process.env.변수명;

//browser - index.tsx 참조
process.env.NEXT_PUBLIC_변수명;
```

- **package.json** 에 설정되어 있음, **npm run dev** : 개발환경, **npm run build && npm run start** : 운영환경
- 브라우저 내에 사용하는 변수를 환경변수로 사용할 수 있음
- 환경별 분기 처리가 가능하다
