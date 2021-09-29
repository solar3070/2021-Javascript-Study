// 클로저

// 자바스크립트는 어휘적 환경

// here
let one;
one = 1;
function addOne(num) {
    console.log(one + num);
}
addOne(5);
/* 코드가 실행되면 
스크립트 내에서 선언한 변수들이 Lexical 환경에 올라감
Lexical 환경
one: 초기화 x -> 사용 불가
addOne: function 함수 선언문은 변수와 달리 바로 초기화 -> 사용 가능 (변수에 할당한 함수 표현식은 불가능)
*/

let one; // here
one = 1;
function addOne(num) {
    console.log(one + num);
}
addOne(5);
/* Lexical 환경
one: undefined 아직 할당은 안되어 있기 때문에 초기값 undefined를 가짐 -> 사용 가능
addOne: function 
*/

let one;
one = 1; // here
function addOne(num) {
    console.log(one + num);
}
addOne(5);
/* Lexical 환경
one: 1 숫자 1 할당
addOne: function 
*/

let one;
one = 1; 
function addOne(num) {
    console.log(one + num);
}
addOne(5); // here
/* 전역 Lexical 환경
one: 1 숫자 1 할당
addOne: function 

함수가 실행되는 순간 새로운 Lexical 환경이 만들어짐
함수가 넘겨받은 매개변수와 지역변수들이 저장
내부 Lexical 환경
num: 5
내부 Lexical 환경은 외부 Lexical환경에 대한 참조를 가짐

지금은 저 함수의 외부 Lexical환경이 전역 Lexical환경임
코드에서 변수를 찾을 때 내부에서 찾고 없으면 외부, 거기에도 없으면 전역 Lexical 환경까지 범위를 넓혀서 찾음

console.log(one + num)코드의 one과 num은 내부 Lexical 환경에서 우선 찾음
num은 찾았지만 one이 없으니 외부로 넓혀서 있는지 찾음
*/

// 클로저는 함수와 그 함수의 렉시컬 환경의 조합
// 함수가 생성될 당시의 외부 변수를 기억
// 생성 이후에도 그 변수에 계속 접근 가능
// 외부 함수의 실행이 끝나 소멸된 이후에도 내부 함수가 외부 함수의 변수에 접근 가능

// 은닉화