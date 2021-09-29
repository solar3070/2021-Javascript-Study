// 상속, 프로토타입

const user = {
    name: "Mike"
}
user.name // "Mike"
user.hasOwnProperty('name') // true
user.hasOwnProperty('age') // false

// user 객체에 name이라는 프로퍼티가 있으니까 참이 나오고 age는 없으니까 거짓
// hasOwnProperty는 만든 적이 없는데 어디있는 걸까?
// __proto__에 있는데 이것을 프로토타입이라고 함

const user = {
    name: "Mike",
    hasOwnProperty : function() {
        console.log('haha')
    }
}
user.hasOwnProperty(); // haha
// 일단 객체에 프로퍼티가 있으면 거기서 탐색을 멈춤
// 없을 때만 프로토타입에서 프로퍼티를 찾음


const bmw = {
    color: "red",
    wheels: 4,
    navigation: 1,
    drive() {
        console.log("drive..");
    },
};

const benz = {
    color: "black",
    wheels: 4,
    drive() {
        console.log("drive..");
    },
};

const audi = {
    color: "blue",
    wheels: 4,
    drive() {
        console.log("drive..");
    },
};
// wheels랑 drive() 동일 -> 차들이 늘어나면 새로운 변수로 만들어지는 건데 공통된 부분을 어떻게 처리? -> 프로토타입으로 처리

const car = {
    wheels: 4,
    drive() {
        console.log("drive..");
    },
}

const bmw = {
    color: "red",
    navigation: 1,
};

const benz = {
    color: "black",
};

const audi = {
    color: "blue",
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

console.log(bmw); // {color: "red",navigation: 1}
console.log(bmw.color); // "red"
console.log(bmw.wheels); // 4
// bmw객체 내부에서 wheels 프로퍼티를 찾고 찾으면 탐색을 멈춤
// 없다면 프로토타입에서 확인

// 상속은 계속 이어질 수 있음
const x5 = {
    color: "white",
    name: "x5"
};

x5.__proto__ = bmw;
console.log(x5.name); // "x5"
console.log(x5.color); // "white"
console.log(x5.navigation);
// x5에서 navigation을 찾고 없으니까 프로토타입인 bmw에서 탐색을 하고 있으니까 멈춤
console.log(x5.drive());
// x5에 드라이브 메소드가 없고 bmw에도 없고 프로토타입인 car까지 올라가서 드라이브 메소드를 사용
// 이런것을 프로토타입 체인이라고 함
// prototype chain

for (p in x5) {
    console.log(p);
}
/* 
color 
name
navigation
wheels
drive
*/

// 키, 값과 관련된 객체 내장 메소드는 상속된 프로퍼티는 나오지 않음
Object.keys(x5); // ["color", "name"]
Object.values(x5); // ["white", "x5"]

for (p in x5) {
    if (x5.hasOwnProperty(p)) {
        console.log('o', p);
    } else {
        console.log('x', p);
    }
}
/* 
o color 
o name
x navigation
x wheels
x drive
*/
// hasOwnProperty는 객체가 직접 가지고 있는 프로퍼티만 true를 반환해줌


const car = {
    wheels: 4,
    drive() {
        console.log("drive..");
    },
}

const Bmw = function (color) {
    this.color = color;
}

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

// 생성자 함수를 쓰는 이유가 간편해서인데매번 하나를 만들 때마다 이렇게 하면 귀찮음
x5.__proto__ = car;
z4.__proto__ = car;


// 아래처럼 하자!
const Bmw = function (color) {
    this.color = color;
}

// 생성자함수가 생성하는 객체의 __proto__ 이렇게 설정한다는 의미 
// 이렇게 한 번만 작업을 해주면 생성자로 만들어진 모든 객체에 일일이 작업할 필요가 없어짐
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
    console.log("drive..")
}

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

// 생성자 함수가 새로운 객체를 만들어 낼 때 그 객체는 생성자의 instance라고 불려짐
// 자바스크립트는 이를 편리하게 확인할 수 있는 instanceof연산자가 있음
// 객체와 생성자를 비교할 수 있고, 해당 객체가 그 생성자로부터 생성된 것인지를 판단해서 참 혹은 거짓을 반환

z4 instanceof Bmw; // true

// 생성자로 만들어진 instance객체에는 constructor라는 프로퍼티가 존재 
z4.constructor === Bmw;// true


// 코드를 좀 더 깔끔히
const Bmw = function (color) {
    this.color = color;
}

// 하지만 이렇게 하면 constructor가 사라짐
Bmw.prototype = {
    wheels : 4,
    drive() {
        console.log("drive..");
    },
    navigation : 1,
    stop() {
        console.log("STOP!");
    }
}

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

z4.constructor === Bmw;// false
// 이런 현상을 방지하기 위해 하나씩 프로퍼티를 추가하는 게 좋음
// 혹은
Bmw.prototype = {
    constructor: Bmw, // 이렇게 명시해줘도 괜찮음
    wheels : 4,
    drive() {
        console.log("drive..");
    },
    navigation : 1,
    stop() {
        console.log("STOP!");
    }
}
z4.constructor === Bmw;// true


const Bmw = function (color) {
    this.color = color;
}
const x5 = new Bmw("red");

x5.color; // "red"
x5.color = "black";
x5.color; // "black"

// 아무나 색상을 바꿀 수 있음 -> 클로저 사용
const Bmw = function (color) {
    const c = color;
    this.getColor = function () {
        console.log(c);
    }
}
const x5 = new Bmw("red");
// 코드를 이렇게 바꾸면 초기에 세팅된 컬러 값을 얻을 수만 있고 바꿀 수는 없음