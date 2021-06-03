import React from 'react';

const typeTemplatet = () => {
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

  b[0].toLocaleLowerCase;

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

  return <div>hellow</div>;
};

export default typeTemplatet;
