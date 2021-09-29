// 변수, 호이스팅, TDZ

// var는 한번 선언된 변수를 다시 선언 가능
var name = 'Mike';
console.log(name); // Mike

var name = 'Jane'
console.log(name); // Jane

// 같은 상황에서 let은 에러
let name = 'Mike';
console.log(name); // Mike

let name = 'Jane' // error!
console.log(name); 

// var는 선언하기 전에 사용 가능
console.log(name); // undefined
var name = 'Mike';

// 왜? var는 이렇게 동작하기 때문 
/* var로 선언한 모든 변수는 코드가 실제로 이동하지는 않지만
최상위로 끌어올려진 것처럼 동작 = 호이스팅
console이 undefined를 찍는 이유는 선언은 hoisting 되지만
할당은 호이스팅되지 않기 때문 */
var name;
console.log(name); // undefined
name = 'Mike'; // 할당

// 같은 상황에서 let은 에러
/* let과 const는 호이스팅되지 않는 걸까? NO
호이스팅: 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동
근데 왜 에러를 내는 걸까? -> Temporal Dead Zone (TDZ)때문
TDZ 영역에 있는 변수들은 사용할 수 없음
let과 const는 TDZ의 영향을 받음
할당을 하기 전에는 사용할 수가 없다.
-> 코드를 예측가능하게 하고 잠재적 버그를 줄임
*/
console.log(name); // ReferenceError
var name = 'Mike';

console.log(name) // Temporal Dead Zone
const anme = 'Mike' // 변수 선언 및 할당
console.log(name) // 사용 가능

// 문제가 발생하지 않는 코드
let age = 30;
function showAge() {
    console.log(age);
}
showAge();

// 문제 발생 코드
let age = 30;
function showAge() {
    console.log(age); // TDZ
    let age = 20; // 호이스팅 발생
}
showAge();

/* 변수의 생성과정
1. 선언 단계
2. 초기화 단계
3. 할당 단계

var 
1. 선언 및 초기화 단계
2. 할당 단계
초기화: undefined를 할당해주는 단계

let
1. 선언 단계
2. 초기화 단계
3. 할당 단계
호이스팅 되며 선언 단계가 이루어지지만 
초기화 단계는 실제 코드에 도달했을 때 되기 때문에
레퍼런스 에러 발생

const
1. 선언 + 초기화 + 할당

let과 var는 선언만 해두고 나중에 할당허용
let var는 값을 바꿀 수 있기 때문에 어찌보면 당연
*/

// const
let name;
name = 'Mike';

var age;
age = 30;

const gender; // error! 선언하며 바로 할당안함
gender = 'male'; 

/* 
var는 함수 스코프
함수 내에서 선언된 변수만 그 지역변수

let, const는 블록 스코프(함수, if, for, while, try-catch 등)
블록 스코프는 모든 코드 블럭 내에서 선언된 변수는 
코드 블록 내에서만 유효
외부에서는 접근 불가능
즉 코드 블록 내부에서 선언한 변수는 지역 변수
*/

// if문 안에서 var로 선언한 변수는 if문 밖에서도 사용 가능
// let과 const는 중괄호 안에서만 사용 가능 (블록 스코프)
const age = 30;
if (age > 19) {
    var txt = '성인';
}
console.log(txt); // '성인'

// var도 함수 내에서 선언되면 함수 밖에서 사용할 수 없음
// 유일하게 벗어날 수 없는 스코프가 함수
function add(num1, num2) {
    var result = num1 + num2;
}
add(2, 3);
console.log(result);
