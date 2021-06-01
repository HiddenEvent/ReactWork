- 리액트 공부용

# 실행방법

```
// cmd에서 3001번 포트로 json 서버 실행
json-server --watch ./src/db/data.json --port 3001
```

# CoreUI 템플릿 적용

- coreUI 템플릿 다운로드

```
// 실행방법
cd ./my-project
serve -s build -l 4000
```

# 타입스크립트 기본 용법

```javascript
import { List } from 'material-ui';
import React, { FC, ReactElement, useState } from 'react';

// functional component
const Menu: FC<{}> = (): ReactElement => {
  function add(num1: number, num2: number) {
    console.log(num2 + num2);
  }

  add(1, 2);

  function showItems(arr: number[]) {
    arr.forEach((item) => {
      console.log(item);
    });
  }
  showItems([1, 2, 3]);

  // 타입 관련
  let age: number = 30;
  let isAult: boolean = true;
  let a: number[] = [1, 2, 3];
  let a2: Array<number> = [1, 2, 3];

  let week1: string[] = ['mon', 'tue', 'wed'];
  let week2: Array<string> = ['mon', 'tue', 'wed'];

  // 튜플 (Tuple)
  let b: [string, number];
  b = ['z', 1];

  // b[0].toLocaleLowerCase;

  // void 함수
  function showVoid(): void {
    console.log('void');
  }

  // never => 영원히 끝나지 않는 함수이거나 에러인 경우 사용
  function showError(): never {
    throw new Error();
  }

  function infLoop(): never {
    while (true) {
      // do something...
    }
  }

  // enum
  enum OsNumber {
    WINDOW = 3,
    IOS = 10,
    ANDROID = 5,
  }
  console.log(OsNumber[10]); // "IOS" 반환
  console.log(OsNumber['IOS']); // 10 반환

  enum OsString {
    WINDOW = 'win',
    IOS = 'ios',
    ANDROID = 'and',
  }

  let myOs: OsNumber;
  myOs = OsNumber.ANDROID;

  // null, undefined
  let aa: null = null;
  let bb: undefined = undefined;

  return <List></List>;
};

export default Menu;

```
