// 배열 메소드

/*
push() : 뒤에 삽입
pop() : 뒤에 삭제
unshift() : 앞에 삽입
shift() : 앞에 삭제
*/

// arr.splice(n, m) : 특정 요소 지움
// n번째 요소부터 m개 지워라
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr); // [1, 4, 5]

// arr.splice(n, m, x) : 특정 요소 지우고 추가
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, 100, 200); // 2, 3, 4가 지워지고 100과 200이 들어감
console.log(arr); // [1, 100, 200, 5]

// 두번째 인수에 0을 넣으면?
// 아무것도 지우지 않고 중간에 새로운 요소 추가
let arr = ["나는", "철수", "입니다"];
arr.splice(1, 0, "대한민국", "소방관");
// ["나는", "대한민국", "소방관","철수", "입니다"];

// arr.splice() : 삭제된 요소 반환
let arr = [1, 2, 3, 4, 5];
let result = arr.splice(1, 2);
console.log(arr); // [2, 3]

// arr.slice(n, m) : n부터 m까지 반환
let arr = [1, 2, 3, 4, 5];
arr.slice(1, 4); // [2, 3, 4]

// 괄호 안에 아무것도 안넣으면 배열 복사
let arr2 = arr.slice();
console.log(arr2); // [1, 2, 3, 4, 5]

// arr.concat(arr2, arr3 .. ): 합쳐서 새 배열 반환
let arr = [1, 2];
arr.concat([3, 4]); // [1, 2, 3, 4]
arr.concat([3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]
arr.concat([3, 4], 5, 6); // [1, 2, 3, 4, 5, 6]

// arr.forEach(fn) : 배열 반복
// 함수를 인수로 받음. 함수에는 3가지 매개변수
// 해당 요소, 인덱스, 배열 자체
// 보통 첫 번째와 두 번째만 사용
let users = ['Mike', 'Tom', 'Jane'];
users.forEach((item, index, arr) => {
    // item: Mike, Tom, Jane
    // index: 0, 1, 2
    // arr: users
});
users.forEach((item, index, arr) => {
    console.log(`${index + 1}. ${name}`);
});

// arr.indexOf / arr.lastIndexOf
// 발견하면 해당 요소 인덱스, 없으면 -1 반환
let arr = [1, 2, 3, 4, 5, 1, 2, 3];
arr.indexOf(3); // 2
// 두 번째 인수는 시작 위치 4부터 시작해서 3탐색
arr.indexOf(3, 3) // 7
// 끝에서부터 탐색하고 싶을 때
arr.lastIndexOf(3); // 7

// arr.includes() : 포함하는지 확인
// 굳이 인덱스를 확인할 필요는 없고 포함하는지만 확인하고 싶을 때
let arr = [1, 2, 3];
arr.includes(2); // true
arr.includes(8); // false

// arr.find(fn), arr.findIndex(fn)
// indexOf처럼 찾는다는 의미는 동일하지만 보다 복잡한 연산이 가능하도록 함수를 연결할 수 있음. 짝수, 성인 찾기 등
// 첫 번째 true값만 반환하고 끝남
// find는 없으면 undefined를 반환
// findIndex는 없으면 -1을 반환
let arr = [1, 2, 3, 4, 5];
const result = arr.find((item) => {
    return item % 2 === 0;
}); // 리턴 값이 트루일 때 멈추고 해당 요소를 알려줌
console.log(result); // 2

let userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10 }
];
const result = userList.find((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});
console.log(result); // { name: "Tom", age: 10 }

const result = userList.findIndex((user) => {
    if (user.age < 19) {
        return true;
    }
    return false;
});
console.log(result); // 2

// arr.filter(fn) : 만족하는 모든 요소를 배열로 반환
// find와 달리 조건을 만족하는 모든 요소를 알고 싶을 때
let arr = [1, 2, 3, 4, 5];
const result = arr.filter((item) => {
    return item % 2 === 0;
}); 
console.log(result); // [2, 4, 6]

// arr.reverse() : 배열을 역순으로 재정렬
let arr = [1, 2, 3, 4, 5];
arr.reverse(); // [5, 4, 3, 2, 1]

// arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
let userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10 }
];
let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});
console.log(newUserList);
// usreList는 변경된 게 없음
console.log(userList);

// join
// 배열을 합쳐서 문자열을 만들려면 join
let arr = ["안녕", "나는", "철수야"];
// 인수로 전달되는 게 구분자
// 아무것도 전달하지 않으면 쉼표로 구분되어 합쳐짐
let result = arr.join(); // 안녕,나는,철수야
let result = arr.join(" "); // 안녕 나는 철수야
console.log(result);

// split
// 문자열을 나눠서 배열로 만들어줌
let users = "Mike,Jane,Tom,Tony"
let result = users.split(",") // ["Mike", "Jane", "Tom", "Tony"]
console.log(result);

let str = "Hello, My name is Mike."
let result = str.split("") // ["H", "e", "l", "l", "o", " ", ... "."]
console.log(str);

// Array.isArray()
// 배열인지 아닌지 확인
// 자바스크립트에서 배열은 객체에 속함
let user = {
    name: "Mike",
    age: 30,
}
let userList = ["Mike", "Jane", "Tom"];
console.log(typeof user); // object
console.log(typeof userList); // object

console.log(Array.isArray(user)); // false
console.log(Array.isArray(userList)); // true