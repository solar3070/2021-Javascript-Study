// 배열 메소드2

// arr.sort()
// 배열 재정렬, 배열 자체가 변경되니 주의
let arr = [1, 5, 4, 2, 3];
arr.sort(); // [1, 2, 3, 4, 5]

let arr = ["a", "c", "d", "e", "b"];
arr.sort(); // ["a", "b", "c", "d", "e"]

// 정렬할 때 요소를 문자열로 취급
// 1과 2로 시작하는 애들이 맨 앞에 온 것
let arr = [27, 8, 5, 13];
arr.sort(); // [13, 27, 5, 8]

// 제대로 된 정렬을 하기 위해 값을 비교해줄 수 있는 함수를 전달해야 함
// sort는 함수를 인자로 받음
let arr = [27, 8, 5, 13];

function fn(a, b) {
    return a - b;
}

arr.sort(fn);

arr.sort((a, b) => {
    return a - b; // 양수, 0, 음수 판단
}); 
// 작은 애를 앞으로 보냄
// 8과 27비교 8이 작으니 앞으로: 8, 27, 5, 13
// 5와 8비교 5가 작으니 앞으로: 5, 8, 27, 13
// 13과 5비교 13 - 5 -> 양수 변화
// 13과 8비교 변화x
// 13과 27비교 13이 앞으로: 5, 8 ,13, 27

// 복잡하므로 Lodash같은 라이브러리 사용
// _.sortBy(arr)로 정렬(숫자든 문자든 객체든) 가능

//arr.reduce() 인수로 함수를 받음
// (누적 계산값, 현재값) => { return 계산값 };

// 배열의 모든 수 합치기
let arr = [1, 2, 3, 4, 5];
let result = 0;
arr.forEach(num => {
    result += num;
})
console.log(result);
// 이 작업을 한번에 해주는 게 reduce

const result = arr.reduce((prev, cur) => {
    return prev + cur;
}, 0) // 초기값은 0 (옵션) 안쓰면 첫 번재 요소가 들어감
console.log(result);

// 실용적인 예제
// 성인만 출력
let userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 10 },
    { name: "Tom", age: 27 },
    { name: "Sue", age: 42 },
    { name: "Harry", age: 60 },
];

let result = userList.reduce((prev, cur) => {
    if (cur.age > 19) {
        prev.push(cur.name);
    }
    return prev
}, [])

// arr.reduceRight() : reduce와 동일한 기능 배열 우측부터 연산 수행