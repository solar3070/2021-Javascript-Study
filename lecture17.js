// async, await
// 프로미스의 then 메소드를 체인 형식으로 호출하는 것보다 가독성이 좋아짐

// 함수 앞에 async라는 키워드를 붙이면 항상 프로미스 반환
async function getName() {
    return "Mike";
}

console.log(getName()); //Promise {<fulfilled>: "Mike"}
getName().then((name) => {
    console.log(name);
});

// await 키워드는 async함수 내에서만 사용할 수 있음
//await 키워드 오른쪽에 프로미스
function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
}
async function showName() {
    const result = await getName('Mike'); //getName에서 resolve된 값을 기다렸다가 넣어줌
    console.log(result); // 1초 뒤에 Mike 찍힘
}
console.log("시작");
showName();

// 비동기 함수 병렬로 실행