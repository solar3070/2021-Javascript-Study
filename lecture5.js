// Number, Math

// 10진수 -> 2진수, 16진수로 바꾸는 법
// toString
let num = 10;
num.toString(); // "10"
num.toString(2); // "1010"

let num2 = 255;
num2.toString(16); // "ff"

// Math
Math.PI // 원주율
Math.ceil(n) // 올림
Math.floor(n) // 버림
Math.round(n) // 반올림

// 소수점 자릿수
let userRate = 30.1234;
// 소수점 둘째자리까지 표현(셋째 자리에서 반올림)
Math.round(userRate * 100) / 100 // 30.12

// toFixed() : 문자열 반환 주의
userRate.toFixed(2) // "30.12"
userRate.toFixed(0) // "30"
userRate.toFixed(6)// "30.123400"

Number(userRate.toFixed(2)) // 30.12

// isNaN() : NaN인지 아닌지 판단
let x = Number('x'); // Nan

// NaN은 자기자신과도 같지 않다고 판단
x == NaN // false
x === NaN // false
NaN == NaN // false

// isNaN()만이 NaN인지 아닌지 판단 가능
isNaN(x) // true
isNaN(3) // false

// parseInt() : 문자열을 숫자로 바꿔줌
let margin = '10px';

// Number와 다른 점은 문자가 혼용되어 있어도 동작
// 읽을 수 있는 부분까지 읽고 숫자로 반환
parseInt(margin); // 10
Number(margin); // NaN

// 그렇기 때문에 숫자로 시작하지 않으면 NaN반환
let redColor = 'f3';
parseInt(redColor); // NaN

// parseInt는 두번째 인수를 받아 진수 지정 가능
let redColor = 'f3';
parseInt(redColor, 16); // 243

parseInt('11', 2) // 3

// parseFloat()은 parseInt와 동일하게 동작하지만 부동소수점 반환
// parseInt는 소수점이하는 무시하고 정수만 반환
let padding = '18.5%';
parseInt(padding); // 18
parseFloat(padding); // 18.5

// Math.random() 0~1사이의 무작위 숫자 생성
// 1~100 사이 임의의 숫자를 뽑고 싶을 때
Math.floor(Math.random() * 100) + 1

// Math.max(), Math.min()
Math.max(1, 4, -1, 5, 10, 9, 5.54); // 10
Math.max(1, 4, -1, 5, 10, 9, 5.54); // -1

// Math.abs() : 절대값
Math.abs(-1) // 1

// Math.pow(n, m) : 제곱
Math.pow(2, 10); // 1024

// Math.sqrt() : 제곱근
Math.sqrt(16) // 4