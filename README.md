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

# 타입스크립트 기본 사용법

```javascript
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

```

# 인터페이스

```javascript

// 인터페이스
let user: object;

user = {
  name: 'xx',
  age: 30,
};
// console.log(user.name); 에러 발생 인터페이스를 정의해 주어야한다.
// 이유는 Object 타입에는 특정 속성값에 대한 정보가 없기 때문이다
// 그래서 우리는 인터페이스를 사용한다.

// 인터페이스 오브젝트 예제
interface User {
  name: string;
  age: number;
  gender?: String; // ? 의 경우 옵셔널한 프로퍼티인 것을 정의, ?를 안붙이면 무조건 생성할때 값을 넣어주어야한다.
  readonly birthYear: number; // 읽기전용 readonly
  [grade: number]: string; // 동적으로 key, value 생성이 필요할 시에 사용 => Scope도 정해줄 수 있다.
}

let user2: User = {
  name: 'xx',
  age: 30,
  birthYear: 2020,
  1: 'A',
  2: 'B',
};

user2.age = 10;
user2.gender = 'male';

// 인터페이스 함수 예제
interface Add {
  (num1: number, num2: number): number; // 함수의 인자값 : 리턴값   => 정의
}
const add2: Add = (x, y) => {
  return x + y;
};

add2(10, 20);

interface IsAdult {
  (age: number): boolean;
}

const aaa: IsAdult = (age) => {
  return age > 19;
};

// 인터페이스 클래스 만들기
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

// extends 예제 (확장)
interface Benz extends Car {
  door: number;
  stop(): void;
}

// implements 예제 (강제 구현)
class Bmw implements Car {
  // color = 'red';
  color;
  wheels = 4;
  // java 의 생성자
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log('go..');
  }
}

const bbb = new Bmw('green');
console.log(bbb);
bbb.start();

```
