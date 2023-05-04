// type Name = string | number;
// let names: Name = 123;
function Ham(x) {
  return x * 2;
}
Ham(123);
var john = [123, true];
var 이름 = "kim";
var 나이 = 20;
var 결혼했니 = false;
var User = /** @class */ (function () {
  function User(name) {
    this.name = name;
  }
  return User;
})();
var project = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
var projectss = { member: ["kim", "park"], days: 30, started: false };
var 네모2 = {
  width: 100,
};
var 여친 = {
  name: "엠버",
};
var 좌표 = { x: 1, y: 2 };
var 이름임;
이름 = "456";
var 접니다;
function 함수(a) {
  return ["가위"];
}
함수("가위");
var 자료 = {
  name: "kim",
};
function 내함수(a) {}
내함수(자료.name);
(function () {
  return 10;
});
function hamsui() {}
var 회원정보 = {
  name: "kim",
  plusOne: function (a) {
    return a + 1;
  },
  changeName: function () {},
};
var cutZero = function (x) {
  var result = x.replace(/^0+/, "");
  return result;
};
function removeDash(x) {
  var result = x.replace(/=/g, "");
  return parseFloat(result);
}
var 제목 = document.querySelector("#title");
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
  제목.innerHTML = "반가워요";
}
var Person = /** @class */ (function () {
  function Person(a) {
    this.name = a;
  }
  Person.prototype.함수 = function (a) {
    console.log("안녕" + a);
  };
  return Person;
})();
var human1 = new Person("jung");
var human2 = new Person("sang");
human1.함수("안녕");
var 네모 = { color: "red", width: 100 };
function 함수수(animal) {
  if ("swim" in animal) {
    animal.swim;
  }
}
var 날짜 = new Date();
if (날짜 instanceof Date) {
}
function 함수임다(x) {
  if (x.wheel === "4개") {
    console.log("x는 Car타입이에요.");
  }
}
function 밤수(parameter) {
  if (typeof parameter == "string") {
    console.log(parameter);
  } else {
    console.log(parameter); // 이런경우 Never
  }
}
var Users = /** @class */ (function () {
  function Users(a) {
    this.name = "kim";
    this.name = a;
  }
  return Users;
})();
var Person2 = /** @class */ (function () {
  function Person2(name) {
    this.name = name;
  }
  return Person2;
})();
var 자식 = new Person("kim");
var Usss = /** @class */ (function () {
  function Usss() {
    this.x = 10;
  }
  return Usss;
})();
function 함부(x) {
  return x[0];
}
var a = 함부([4, 2]);
