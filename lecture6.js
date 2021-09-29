// String 문자열

// html코드 같은 경우 작은 따옴표로 감싸는게 편하고
// 영어는 큰 따옴표로 감싸는게 편함
// 백틱은 ${}를 이용해 변수와 표현식 표현 가능

// 백틱은 여러줄 포함 가능
// 따옴표로 여러줄 쓰려면 \n을 쓰고 한줄에 써야함

// str.length : 문자열 길이
let desc = '안녕하세요.';
desc.length // 6

// 특정 위치에 접근 가능
// 배열과 동일하게 0부터 시작하나 바꿀 수는 없음
desc[2] // '하'

// toUpperCase(), toLowerCase()
let desc = "Hi"
desc.toUpperCase() // "HI"
desc.toLowerCase() // "hi"

// str.indexOf(text) 
// 0부터 세고 찾는 문자열이 없으면 -1 반환
// 포함된 문자가 여러개라면 처음 문자만 반환
let desc = "Hi guys. Nice to meet you."
desc.indexOf('to'); // 14

// 주의 
// Hi가 맨 처음에 있어 0을 반환하므로 조건문이 거짓이 됨
if (desc.indexOf('Hi')) {
    console.log('Hi가 포함된 문장입니다.');
}
// 따라서 -1보다 큰가로 비교하면 됨
if (desc.indexOf('Hi') > -1) {
    console.log('Hi가 포함된 문장입니다.');
}

// str.slice(n, m) n은 시작점
// m은 없으면 문자열 끝까지, 양수면 그 숫자까지(포함x), 음수면 끝에서부터 셈
let desc = "abcdefg";
desc.slice(2); // "cdefg"
desc.slice(0, 5); // "abcde"
desc.slice(2, -2); // "cde"

// str.substring(n, m) : n과 m사이의 문자열 반환
// 슬라이스와 유사하지만 m과 n을 바꿔도 동작
// n부터 m까지보다는 n부터 m사이라고 생각
// 음수는 허용하지 않음 0으로 인식
let desc = "abcdefg";
desc.substring(2, 5); // "cde"
desc.substring(5, 2); // "cde"

// str.substr(n, m) 
// n부터 시작해서 m개를 가져옴
let desc = "abcdefg";
desc.substr(2, 4); // "cdef"
desc.substr(-4, 2); // "de"

// str.trim(n, m) : 앞 뒤 공백 제거
// n부터 시작해서 m개를 가져옴
// 사용자로부터 입력받을 때 자주 사용
let desc = " coding     ";
desc.trim(); // "coding"

// str.repeat(n) : 문자열 n번 반복
let desc = "hello!";
desc.repeat(3); // "hello!hello!hello!"

// 문자열 비교
"a" < "c" // true
"a".codePointAt(0); // 97
String.fromCodePoint(97) // "a"

// 있는지 없는지만 알고 싶을 때 str.includes()
// includes는 문자가 있으면 true
// 없으면 false 반환
str.includes("콜라")