// type Name = string | number;
// let names: Name = 123;

function Ham(x: number): number {
  return x * 2;
}
Ham(123);

type Member = [number, boolean];
let john: Member = [123, true];

let 이름: string = "kim";
let 나이: number = 20;
let 결혼했니: boolean = false;

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

let projectss: {
  member: string[];
  days: number;
  started: boolean;
} = { member: ["kim", "park"], days: 30, started: false };

type Square = {
  color?: string;
  width: number;
};

let 네모2: Square = {
  width: 100,
};

type Girlfriend = {
  readonly name: string;
};

let 여친: Girlfriend = {
  name: "엠버",
};

type Name = string;
type Age = number;
type NewOne = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY;
let 좌표: XandY = { x: 1, y: 2 };

let 이름임: 123;
이름 = "456";

let 접니다: "대머리" | "솔로";

function 함수(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

함수("가위");

var 자료 = {
  name: "kim",
} as const;
function 내함수(a: "kim") {}

내함수(자료.name);

type 함수타입 = (a: string) => number;

() => {
  return 10;
};
function hamsui() {}

let 회원정보 = {
  name: "kim",
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {},
};

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};
function removeDash(x: string): number {
  let result = x.replace(/=/g, "");
  return parseFloat(result);
}

type 함수타입1 = (a: string) => string;

let 제목 = document.querySelector("#title");
if (제목?.innerHTML != undefined) {
  제목.innerHTML = "반가워요";
}

class Person {
  name: string;
  constructor(a: string) {
    this.name = a;
  }
  함수(a: string) {
    console.log("안녕" + a);
  }
}

let human1 = new Person("jung");
let human2 = new Person("sang");
human1.함수("안녕");

interface Squares {
  color: string;
  width: number;
}
let 네모: Square = { color: "red", width: 100 };

type Fish = { swif: string };
type Bird = { fly: string };

function 함수수(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

let 날짜 = new Date();
if (날짜 instanceof Date) {
}
type Car = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function 함수임다(x: Car | Bike) {
  if (x.wheel === "4개") {
    console.log("x는 Car타입이에요.");
  }
}

function 밤수(parameter: string) {
  if (typeof parameter == "string") {
    console.log(parameter);
  } else {
    console.log(parameter); // 이런경우 Never
  }
}

class Users {
  private name = "kim";
  constructor(a) {
    this.name = a;
  }
}

class Person2 {
  constructor(public name) {}
}
let 자식 = new Person("kim");

class Usss {
  public x = 10;
}

function 함부<Type>(x: unknown[]) {
  return x[0];
}

let a = 함부<number>([4, 2]);

declare let b: number;

let 멍멍: [string, boolean?, number?] = ["dog", true];

function 함주(...x: [number, string]) {
  console.log(x);
}
함주(1, "222");
