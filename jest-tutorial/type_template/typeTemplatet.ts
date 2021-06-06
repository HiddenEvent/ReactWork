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

// 함수
function add1(num1: number, num2: number): number {
  return num1 + num2;
}

function hello(name?: string) {
  return `Hellow, ${name || 'world'}`; // args가 넘어오면 그대로 뿌리고 아니면 world를 출력하라
}

const result = hello();
const result2 = hello('RichardKim');

// default 값으로 world를 받겠다
function hello2(name = 'world') {
  return `Hello, ${name}`;
}

// ... 을 사용하면 전달된 매개 변수를 배열로 나타내게 할 수 있다.
function add3(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}
add3(1, 2, 3);
add3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

interface User2 {
  name: string;
}

// const Sam: User;
const Sam: User2 = {
  name: 'SamCall',
};

function showName(this: User2) {
  console.log(this.name);
}

const z = showName.bind(Sam); // showName을 호출하고 this를 => Sam변수로 매칭 시킨다.
z();

interface User3 {
  name: string;
  age: number;
}
// 함수 오버로딩
function join(name: string, age: string): string;
function join(name: string, age: number): User3;
function join(name: string, age: number | string): User3 | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력해주세요.';
  }
}

const sam: User3 = join('Sam', 30);
const jane: string = join('Jane', '30');

// 리터럴 타입

const userName1 = 'Bob';
let userName2: string | number = 'Tom';

userName2 = 3;

type Job = 'plice' | 'developer' | 'teacher';

interface User4 {
  name: string;
  job: Job;
}

const user3: User4 = {
  name: 'Bob',
  job: 'student',
};

interface HightSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}

interface Car2 {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile2 {
  name: 'mobile';
  color: string;
  call(): void;
}

function getGift(gift: Car2 | Mobile2) {
  console.log(gift.color);

  /* 식별 가능한 유니온 타입 예제 */
  if (gift.name === 'car') {
    gift.start();
  } else {
    gift.call();
  }
}

// 인터섹션 타입
interface Car3 {
  name: string;
  strart(): void;
}

interface Toy3 {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy3 & Car3 = {
  name: '타요',
  strart() {},
  color: 'blue',
  price: 1000,
};
