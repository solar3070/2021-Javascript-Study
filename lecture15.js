// 클래스 : ES6에 추가된 스펙

// 지금까지 비슷한 형태의 객체를 생성하기 위해 생성자 함수 사용
const User = function (name, age) {
        this.name = name;
        this.age = age;
};

User.prototype.showName = function () {
    console.log(this.name);
}

const mike = new User("Mike", 30);

// 클래스로도 만들 수 있음
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}
const tom = new User2("Tom", 10);

// new를 통해 호출 했을 때 내부에서 정의된 내용으로 객체를 생성하는 것은 동일
/* class키워드 사용
constructor는 객체를 만들어주는 생성자 메소드 
new를 통해 호출하면 자동으로 constructor실행
constructor는 인수를 넘겨받을 수 있음
클래스 내 정의 메소드는 user2의 프로토타입에 정의
*/

/* 생성자와 클래스 차이 : 클래스의 탄생 이유?

생성자의 경우
new를 빼고 실행시 const mike = User("Mike", 30);
User함수가 반환 하는 값 (지금은 return 문이 없어 아무것도 반환하지 않기 때문에 undefined가 됨)
반환 값이 undefined고 그 값이 mike로 들어감
개발자가 실수한 코드지만 문제없이 동작함
에러라고 알아차릴 수 없음

클래스의 경우
const tom = User2("Tom", 10);
타입 에러 발생
클래스는 new없이 실행할 수 없음

두 경우의 프로토타입을 살펴보면
클래스의 경우에는 컨스트럭터가 클래스라고 명시가 되어있음
이 경우에 new 없이 호출하면 에러가 발생하도록 설계되어 있음


for in문을 사용할 경우
생성자의 경우
showName도 나옴

클래스의 경우
showName은 나오지 않음

for in문은 프로토타입에 포함된 프로퍼티들을 다 보여주고 객체가 가지고 있는 프로퍼티만 판별하기 위해 hasOwnProperty를 사용해야 했음
클래스의 메소드는 for in 문에서 제외 됨
*/

// 생성자에서의 상속은 프로토타입을 이용해 구현
// 클래스에서의 상속은 extends키워드를 사용

class Car {
    constructor(color) {
        this.color = color;
        this.wheel = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
    park() {
        console.log("PARK");
    }
}
const z4 = new Bmw("blue");

// 메소드 오버라이딩
// 동일한 이름으로 메소드를 정의하면 덮어 씀
class Bmw extends Car {
    park() {
        console.log("PARK");
    }
    // 만약 부모의 메소드를 사용하면서 확장하고 싶을 때는 super라는 키워드 사용
    stop() {
        super.stop(); // Car의 stop을 사용함
        console.log("OFF!");
    }
}

// 생성자 오버라이딩
class Bmw extends Car {
    constructor() {
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
} 
const z4 = new Bmw("blue"); // 에러! constructor에서 this를 사용하기 전에 super constructor, 즉 부모 생성자를 반드시 먼저 호출해야함

// 클래스의 constructor는 {} 빈 객체를 만들어주고 this로 이 객체를 가리킴
// 반면 extends를 써서 만든 자식 클래스는 빈 객체가 만들어지고 this에 할당하는 이 작업을 건너 뜀
class Bmw extends Car {
    constructor() {
        super(); // 항상 super키워드로 부모 클래스의 컨스트럭터를 실행해줘야 함
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
} 
const z4 = new Bmw("blue"); // color가 undefined가 됨
// 제대로 동작하기 위해서는 자식 클래스의 constructor에 동일한 인수를 받는 작업을 해줘야 함
class Bmw extends Car {
    constructor(color) {
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
} 


class Bmw extends Car {
    park() {
        console.log("PARK");
    }
} 
// 자식 클래스에 컨스트럭터가 없을 때는 아래처럼 동작함
class Bmw extends Car {
    constructor(...args) {
        super(...args);
    } // 이 부분이 있는 것 처럼 행동
    park() {
        console.log("PARK");
    }
} 

// 자식 생성자는 무조건 부모 생성자를 호출해야함
// super을 이용해 호출해주고 this.프로퍼티도 할당해줘야 함