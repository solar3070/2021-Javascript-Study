// Generator 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// Generator는 function 옆에 *을 써서 만듦
// 내부에 yield 키워드를 사용
function* fn() {
    yield 1;
    yield 2;
    yield 3;
    return "finish";
}

// 제너레이터 함수를 실행하면 제너레이터 객체 반환
// 제너레이터 객체는 next 메소드가 있음
const a = fn();

console.log(a); // 코드 실행시 제너레이터 객체만 반환되고 함수 본문 코드는 실행되지 않음

console.log(a.next()); // 가장 가까운 yield문을 만날 때까지 실행되고 데이터 객체를 반환
// 반환된 데이터 객체는 {value: 1, done: false}
// value는 yield 오른쪽에 있는 값 생략시 undefined
// done은 함수 코드가 끝났는지 나타내며 실행이 끝났으면 true

console.log(a.next()); // {value: 2, done: false}
console.log(a.next()); // {value: 3, done: false}
console.log(a.next()); // {value: "finish", done: true}
console.log(a.next()); // {value: undefined, done: true}


// 제너레이터는 next()메소드 외에 return()과 throw()메소드를 가짐

// 실행 중 리턴 메소드를 호출하면 그 즉시 done이 true가 됨
console.log(a.return('END')); // {value: "END", done: true}
console.log(a.next()); // {value: undefined, done: true}

// throw()도 마찬가지로 done을 true로 바꿈
function* fn() {
    try {
        yield 1;
        yield 2;
        yield 3;
        return "finish";
    } catch (e) {
        console.log(e);
    }
}

console.log(a.next()); // {value: 1, done: false}
console.log(a.next()); // {value: 2, done: false}
console.log(a.throw(new Error('err'))); // catch문에 있는 내용이 실행되고 {value: undefined, done: true}
console.log(a.next()); // {value: undefined, done: true}


/* Generator

iterable (반복이 가능)
- Symbol.iterator 메소드가 있다
- Symbol.iterator는 iterator를 반환해야 한다

iterator (메소드 호출 결과)
- next 메소드를 가진다
- next 메소드는 value와 done 속성을 가진 객체를 반환한다
- 작업이 끝나면 done은 true가 된다

Generator는 iterator이면서 iterable이다 
iterable은 for of를 통해 순회 가능
문자열도 배열도 iterable

Generator는 외부로부터 값을 입력받을 수도 있다
Generator는 값을 미리 만들어 두지 않음
*/

const arr = [1, 2, 3, 4, 5];
// arr가 가지고 있는 Symbol.iterator메소드를 실행한 결과를 넣기
const it = arr[Symbol.iterator]();
it.next(); // {value: 1, done: false}..
it.next(); // {value: undefined, done: true}


function* gen1() {
    yield "w";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}
function* gen2() {
    yield "Hello, ";
    yield* gen1();
    yield "!";
}
console.log(...gen2()); //Hello, w o r l d !