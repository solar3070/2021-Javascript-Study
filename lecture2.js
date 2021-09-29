// 생성자 함수

// 객체 리터럴
// 개발을 하다보면 이런 비슷한 변수들을 여러개 만들어야 하는 경우가 발생 ex. 회원, 상품 -> 생성자 함수
let user = {
    name : 'Mike',
    age : 30,
}

// 생성자 함수 첫 글자는 보통 대문자로
// new 연산자를 사용하여 함수 호출
// 생성자 함수는 붕어빵 틀, 와플 틀
// 지금 필요한 재료는 이름과 나이
// 생성되는 객체들은 와플
function User(name, age) {
    this.name = name;
    this.age = age;
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);

// new를 붙여 실행하는 순간 이 방식대로 알고리즘이 동작
// 이렇게 객체를 만들면 일일이 객체를 만드는 것보다 훨씬
// 빠르고 일관성있게 객체를 만들 수 있다. 
// 어떤 함수라도 new를 붙여서 실행하면 이 알고리즘이 동작
function User(name, age) {
    this = {} // 실제로 없는 코드 

    this.name = name;
    this.age = age;

    return this; // 실제로 없는 코드 
}
new 함수명();

// user5.sayName() 했을 때 sayName의 this는 user5
function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(this.name);
    }
}
let user5 = new User('Han', 40);
user5.sayName(); // 'Han'

// 실습
// 생성자 함수: 상품 객체를 생성해보자.
function Item(title, price) {
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function() {
        console.log(`가격은 ${price}원 입니다.`);
    }
    // return this;
}

// 만일 new를 안붙인다면 undefined
// new를 안붙이면 그냥 함수를 실행해주는 것
// 리턴해주는 게 없기 때문에 underined 반환하고 item2로 들어감
const item1 = new Item('인형', 3000);
const item2 = Item('가방', 2000);
const item3 = new Item('지갑', 5000);

console.log(item1, item2, item3);

item3.showPrice();
