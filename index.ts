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
