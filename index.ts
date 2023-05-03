type Name = string | number;
let names: Name = 123;

function Ham(x: number): number {
  return x * 2;
}
Ham(123);

type Member = [number, boolean];
let john: Member = [123, true];

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
