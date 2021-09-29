// 심볼 (Symbol)

// property key : 문자형
const obj = {
    1: '1입니다.',
    false : '거짓'
}
// 숫자형이나 불리언으로 만들어도 프로퍼티 키들을 가져와보면 문자형으로 반환
Object.keys(obj); // ["1", "false"]
// 접근할 때도 obj['1']이나 obj['false']로 접근할 수 있음

// Symbol : 유일한 식별자를 만들 때 사용
const a = Symbol(); // new를 붙이지 않음
const b = Symbol();

// a===b, a==b 둘 다 false
// Symbol형은 유일성 보장

// 심볼을 만들 때 설명을 붙여 줄 수도 있음
// 설명을 붙이면 디버깅할 때 편함
// 문자열을 전달해주면 되는데 이 문자열은 심볼 생성에 어떤 영향도 끼치지 않음
const id = Symbol('id');
const id2 = Symbol('id');
// 설명을 똑같이 해도 id===id2, id==id2 false

// 심볼을 객체의 키로 사용해보자
const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}
console.log(user);
// {name:'Mike', age:30, Symbol(id):"myid"}
console.log(user[id]); // "myid"

// 이런 메소드들은 키가 심볼형인 프로퍼티는 건너뜀
// for in을 써도 건너 뜀
Object.keys(user); // ["name", "age"]
Object.values(user);  // ["Mike", "30"]
Object.entries(user);  // [Array(2), Array(2)]

// 그럼 이 꽁꽁 숨겨진 심볼을 어디에 쓸까?
// 특정 객체의 원본 데이터는 건들이지 않고 속성 추가할 수 있음
// 다른 사람이 만든 객체에 자신만의 속성을 추가해서 덮어쓰면 안됨 
// 그렇다고 길고 이상한 네이밍을 하는 것도 좋지 않음
// 만약 그 원본 객체가 어딘가에서 Object.keys나 for in으로 순회하면서 데이터를 사용할 수도 있음
// 내가 추가한 프로퍼티가 어디서 어떻게 튀어나올지 예측 불가능

// 이런식으로 심볼은 이름이 같더라도 모두 다른 존재
// 그런데 가끔 전역변수처럼 이름이 같으면 같은 객체를 가르켜야할 때가 있는데 이럴 때 사용하는게
/* Symbol.for() : 전역 심볼
하나의 심볼만 보장받을 수 있음
없으면 만들고, 있으면 가져오기 때문
Symbol을 함수는 매번 다른 Symbol을 값을 생성하지만
Symbol을.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유 
코드 어디에서든 사용 가능*/

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
id1 === id2; // true

// 이름을 얻고 싶다면
// keyFor에 변수를 넣어주면 생성할 때 적어준 이름을 알려줌
Symbol.keyFor(id1) // "id"

// 전역 심볼이 아닌 경우는 keyFor사용불가능
// 대신 description 사용
const id = Symbol('id입니다.');
id.description; // "id입니다."

// 사실 심볼을 완전히 숨길 수 있는 방법은 없음
// 숨겨진 심볼 키 보는 법
const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}
// 심볼들만 볼 수 있음
Object.getOwnPropertySymbols(user); // [Symbol(id)]
// 심볼형 키를 포함한 모든 키를 보여줌
Reflect.ownKeys(user); // ["name", "age", Symbol(id)]
// 사실 대부분의 라이브러리, 내장함수는 이런 메소드 사용안하니 유일한 프로퍼티를 추가하고 싶을 때 심볼을 사용하자

// 실습
// 다른 개발자가 만들어 놓은 객체
const user = {
    name : 'Mike',
    age : 30,
};

// 내가 작업
user.showName = function() {}; 
// His showName is function() {} 말도 안되는 메세지 출력
const showName = Symbol('show name');
user[showName] = function () {
    console.log(this.name);
}
// Symbol을 만들었기 때문에 for in문에서 걸리지 않음
// name, age만 출력

user[showName]();
// 이렇게 하면 Mike도 잘 나옴
// 내가 추가한 메소드도 잘 동작하고 다른 개발자가 만들어 둔 코드에도 영향을 미치지 않는 선에서 메소드 추가
// 원래 user에 showName이라는 메소드가 있었는지 고민할 필요도 없고 다른 사람이 만들어 둔 프로퍼티를 덮어쓸 일도 없음
// 이게 바로 심볼의 장점!

// 사용자가 접속하면 보는 메세지 
for (let key in user) {
    console.log(`His ${key} is ${user[key]}.`);
}
// His name is Mike
// His age is 30