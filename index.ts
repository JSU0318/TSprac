type Name = string | number;
let names: Name = 123;

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

let projectss {
  member: string[],
  days: number,
  started: boolean
} = { member: ["kim", "park"], days: 30, started: false };
