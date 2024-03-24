// ==================== 변수 ====================
// const, let 등 변수 선언 방식
let a = 1;
console.log(a); // 1

a = 2;
console.log(a); // 2

const b = 5;
console.log(b); //5

// const는 재할당이 불가능 하다.
// b = 6;
// console.log(b);

// ==================== 템플릿 문자열 ====================
const str1 = "안녕하세요.";
const str2 = "김겨울입니다.";
const greeting = `${str1} 저는 ${str2}`;
console.log(greeting);

// 객체
const cat = {
  name: "겨울이",
  age: 2,
};
console.log(`저희 고양이 이름은 ${cat.name}이고, 나이는 ${cat.age}살 입니다.`);

const info = {
  name: "홍길동",
  age: 100,
  phone: "010-1234-5678",
  address: "서울시",
};
console.log(
  `제 이름은 ${info.name}이고, 나이는 ${info.age}살 입니다. 전화번호는 ${info.phone}이고 주소는 ${info.address}입니다.`
);

// ==================== 배열 ====================
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr.length); // 5

const animals = ["고양이", "강아지", "고래"];
console.log(animals);
console.log(`내가 좋아하는 동물은 ${animals[0]}입니다`);

const users = [
  {
    name: "김겨울",
    age: 2,
  },
  {
    name: "김가을",
    age: 3,
  },
  {
    name: "김여름",
    age: 4,
  },
  {
    name: "김봄",
    age: 5,
  },
];
console.log(`${users[3].name}의 나이는 ${users[3].age}입니다`);
