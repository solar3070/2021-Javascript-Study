// 나머지 매개변수, 전개 구문

// 인수 전달
// 자바스크립트에서 함수에 넘겨주는 인수 개수에 제한 없음
function showName(name) {
    console.log(name);
}
// 이름을 하나 더 전달한다면? 에러 발생x 'Mike'
showName('Mike', 'Tom'); 

// 에러 발생x name에 undefined가 찍힐 뿐
showName(); 

// arguments
/* 함수로 넘어 온 모든 인수에 접근
함수 내에서 이용 가능한 지역 변수
length, index
Array 형태의 객체
배열의 내장 메소드 없음(forEach, map) */
function showName(name) {
    console.log(arguments.length); // arguments로 접근 가능
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showName('Mike', 'Tom');
// 2
// 'Mike'
// 'Tom'


// 나머지 매개변수
// 정해지지 않은 개수의 인수를 배열로 나타낼 수 있게 함
// ...을 찍고 뒤에 배열 이름을 정해줌
// 배열에 전달된 인수들이 들어감
// 아무것도 전달하지 않으면 빈 배열이 나타남
function showName(...names) {
    console.log(names);
}
showName(); // []
showName('Mike'); // ['Mike']
showName('Mike', 'Tom'); // ['Mike', 'Tom']

// ex 매번 전달하는 숫자의 개수가 다르다고 할 때 모든 숫자의 합을 구하려면?
function add(...nums){
    let result = 0;
    nums.forEach((num) => (result += num));
    console.log(result);
}
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6);

// 리듀스 사용
function add(...nums){
    let result = 0;
    nums.reduce((prev, cur) => prev + cur);
    console.log(result);
}
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6);

// ex user 객체를 만들어 주는 생성자 함수 만들기
// 나머지 매개변수는 항상 마지막에 있어야 함
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}
const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React');
const user1 = new User('Jane', 10, 'English');


// 전개 구문: 배열
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2]; //arr1은 1,2,3, arr2는 4,5,6
console.log(result); // [1, 2, 3, 4, 5, 6]

let result = [0, ...arr1, ...arr2, 7, 8, 9]; 
// [0,1,2,3,4,5,6,7,8,9]
// arr.push(), arr.splice(), arr.concat().. 안해도 됨

// 전개 구문: 객체
// Object.assign을 쓸 필요가 x
let user = {name: 'Mike'}
let mike = {...user, age:30}
console.log(mike) // {name:"Mike", age:30}

// 전개 구문: 복제
let arr1 = [1, 2, 3];
let arr2 = [...arr]; // [1, 2, 3]

let user = {name:'Mike', age:30};
let user2 = {...user};
user2.name = "Tom";

console.log(user.name); // 'Mike'
console.log(user2.name); // 'Tom'

// ex arr1을 [4,5,6,1,2,3]으로 하려면?
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr2.forEach((num) => {
    arr1.unshift(num);
})
console.log(arr1); // [6,5,4,1,2,3]

arr2.reverse().forEach((num) => {
    arr1.unshift(num);
})
console.log(arr1); // [4,5,6,1,2,3]

// 전개구문 사용
arr1 = [...arr2, ...arr1];

// ex user에 info를 넣고 fe와 lang을 skills을 만들어 넣기
let user = {name:'Mike'};
let info = {age:30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// 전개 구문 미사용시
user = Object.assign({}, user,info,{
        skills: []
});
fe.forEach(item => {
    user.skills.push(item);
});
lang.forEach(item => {
    user.skills.push(item);
});

// 전개 개문 사용해보자
user = {
    ...user, 
    ...info, 
    skills : [...fe, ...lang],
};
    
console.log(user);