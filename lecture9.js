// 구조 분해 할당
// Destructing assignment
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

// 배열 구조 분해
let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
// let user1 = users[0];
// let user2 = users[1];
// let user3 = users[2];

let str = "Mike-Tom-Jane";
let [user1, user2, user3] = str.split('-');
// ['Mike', 'Tom', 'Jane']

//  배열 구조 분해:기본값
// c에는 undefined가 들어감
let [a, b, c] = [1, 2];

// 만약 값이 undefined면 기본값 사용
let [a=3, b=4, c=5] = [1, 2]; // 1, 2, 5
console.log(a); // 1
console.log(b); // 2
console.log(c); // 5

// 배열 구조 분해: 일부 반환값 무시
// 공백과 쉼표를 이용해 필요하지 않은 요소 무시
let [user1, , user2] = ['Mike', 'Tom', 'Jane', 'Tony'];

console.log(user1); // 'Mike'
console.log(user2); // 'Tony'

// 배열 구조 분해: 바꿔치기
[a, b] = [b, a];

// 객체 구조 분해
let user = { name: "Mike", age: 30 };
let {name, age} = user; 
// 아래 코드와 같음
let name = user.name;
let age = user.age;
// 배열 구조 분해와 다른 점: 순서를 신경쓰지 않아도 됨
let {age, name} = user; 

// 객체 구조 분해: 새로운 변수 이름으로 할당
let user = { name: "Mike", age: 30 };
let {name: userName, age: userAge} = user;

// 객체 구조 분해: 기본값
let user = { name: "Mike", age: 30 };
// gender은 undefined
let {name, age, gender} = user;
// user 객체에 gender가 없으면 male이 기본적으로 할당
let {name, age, gender = 'male'} = user;

let user = { name: "Mike", age: 30, gender: 'female' };
let {name, age, gender = 'male'} = user;
// user에 gender가 있다면 그 값이 사용
// 객체로부터 받은 값이 undefined일 때만 기본 값 사용
console.log(gender); // 'male'