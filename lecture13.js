// call, apply, bind
// 함수 호출 방식과 관계없이 this를 지정할 수 있음

// call 메소드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있습니다. 

const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName() {
    console.log(this.name);
}

// 여기서 this는 window를 가리킴
// window.name이 빈 문자열이기 때문에 아무것도 안뜸
showThisName(); 

// 함수를 호출하며 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 겍체의 메소드인 것 처럼 사용 가능
// call의 첫 번째 매개변수는 this로 사용할 값이고 매개변수가 더 있으면 그 매개변수를 호출하는 함수로 전달 됨
showThisName.call(mike); // Mike

// 생년과 직업을 받아 이 객체정보를 새로운 데이터로 업데이트
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation
}
// 첫 번째 매개변수는 this로 사용될 값
// 이후 매개변수부터는 함수가 사용할 매개변수들을 순서대로 적은 것
update.call(mike, 1999, "singer"); 
console.log(mike); // {name: "Mike", birthYear: 1999, occupation: "singer"}


// apply : 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같음 
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받음
function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation
}
update.apply(mike, [1999, "singer"]); 
console.log(mike); // {name: "Mike", birthYear: 1999, occupation: "singer"}

// apply는 배열 요소를 함수 매개변수로 사용할 때 유용
const nums = [3, 10, 1, 6, 4];

// apply는 두 번째 매개변수로 배열을 전달하면 그 요소들을 차례대로 인수로 사용
// null은 this로 사용될 값 (min이나 max는 this가 필요하지 않아서 아무 값이나 넣은 것)
const minNum = Math.min.apply(null, nums); 
// = Math.min.apply(null, [3, 10, 1, 6, 4])
const maxNum = Math.max.apply(null, nums);

// 동일한 결과
const minNum = Math.min.call(null, ...nums);
// = Math.min.apply(null, 3, 10, 1, 6, 4)
// call과 apply는 동작 방식은 같음
// 매개변수를 받는 방법만 다를 뿐

console.log(minNum);
console.log(maxNum);


// bind : 함수의 this값을 영구히 바꿀 수 있음
const mike = {
    name: "Mike",
};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation
}

// bind는 새로 바인딩한 함수를 하나 만듦
// 이 함수는 항상 mike를 this로 가짐
const updateMike = update.bind(mike);

updateMike(1980, 'police');
console.log(mike);


const user = {
    name: "Mike",
    showName: function () {
        console.log(`hello, ${this.name}`);
    },
};

user.showName();

let fn = user.showName; // fn에 할당할 때 this를 잃어버림
// 메소드는 점 앞에 있는게 this
fn(); // hello,
// 호출할 때 fn만 호출하니까 this가 없는 것

fn.call(user); // hello, Mike
fn.apply(user); // hello, Mike

let boundFn = fn.bind(user);
boundFn(); // hello, Mike