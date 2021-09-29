// 객체 메소드, 계산된 프로퍼티
// Object methods, Computed property

// 컴퓨티트 프로퍼티
// 대괄호로 묶어주면 a라는 문자열이 아니라 변수a에 할당된 값이 들어감
// 식 자체를 넣는 것도 가능
let a = 'age';
const user = {
    name: 'Mike',
    [a]: 30,
    [1 + 4] : 5,
    ['안녕' + '하세요'] : 'hello'
}

// 객체에서 사용할 수 있는 몇 가지 메소드
/*
Object.assign()
Object.keys()
Object.values()
Object.entries()
Object.fromEntries()
*/

// Object.assign() : 객체 복제
const user = {
    name : 'Mike',
    age : 30
}
// 이렇게 하면 복제되는 걸까? NO
const cloneUser = user;

//user에는 객체 자체가 들어있는 게 아니라 객체가 저장되어 있는 메모리 주소인 객체에 대한 참조값이 저장되므로
// clonUser를 만들어서 user를 넣으면 객체가 복사되며 들어가는게 아니라 참조값만 복사

// cloneUser의 이름을 바꾸면 user의 이름도 바뀜
// 하나의 객체를 두 변수가 접근하고 있는 것
cloneUser.name = 'Tom'; 

// 따라서 객체를 복제해주기 위해선 Object.assign() 사용
// 빈 객체는 초기값, 두번째 매개변수부터 들어온 값이 초기값에 병합됨
// {} + {name:'Mike', age:30} = {name:'Mike', age:30}
const newUser = Object.assign({}, user);

//이름을 바꿔도 user에는 변함 x
newUser.name = 'Tom';
console.log(user.name); // 'Mike'
newUser != user

// {gender:'Male', name:'Mike', age:30} : 총 3개의 프로퍼티를 가지게 됨
const newUser = Object.assign({gender:'Male'}, user);

// 병합을 하는데 키가 갖다면? 덮어쓰게 됨
// {name:'Mike', age:30}
const newUser = Object.assign({name:'Tom'}, user);

// 두개 이상의 객체도 합칠 수 있음
const user = { name:'Mike'}
const info1 = { age:30}
const info2 = { gender:'Male'}

const newUser = Object.assign({}, info1, info2);

const user = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}

// Object.keys() : 키 배열 반환
Object.keys(user);
["name", "age", "gender"]

// Object.values() : 값 배열 반환
Object.values(user);
["Mike", 30, "male"]

// Object.entries() : 키/값 배열 반환
Object.values(user);
[
    ["name", "Mike"]
    ["age", "30"]
    ["gender", "male"]
]

// Object.fromEntries() : 키/값 배열을 객체로
const arr = 
[
    ["name", "Mike"]
    ["age", "30"]
    ["gender", "male"]
];
Object.fromEntries(arr);
{
    name : 'Mike',
    age : 30,
    gender : 'male',
}

// 실습
let n = "name";
let a = "age";

const user = {
    [n] : 'Mike',
    [a] : 30,
    [1 + 4] : 5,

};

console.log(user);

function makeObj(key, val) {
    return {
        [key] : val
    }
}
const obj = makeObj('나이', 33);

console.log(obj);

