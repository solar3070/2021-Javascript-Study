// setTimeout 일정 시간이 지난 후 함수를 실행
// setInterval 일정 시간 간격으로 함수 반복

// setTimeout
// 두 개의 매개변수를 받음
// 일정 시간이 지난 뒤 실행하는 함수와 시간 
function fn() {
    console.log(3)
}
setTimeout(fn, 3000); // = 3초
// 아래와 동일
setTimeout(function() {
    console.log(3)
}, 3000);

// 인수가 필요하면 시간 뒤에 적어줌
// clearTimeout()은 예정된 작업을 없앰
// setTimeout은 타임 아이디를 반환하는데 이를 이용해 스케줄링을 취소할 수 있음
function showName(name) {
    console.log(name);
}
const tId = setTimeout(showName, 3000, 'Mike'); // 함수, 시간, 인수
clearTimeout(tId); // 3초가 지나기 전에 이 코드가 실행되기 때문에 아무 일도 일어나지 않음


// setInterval 계속 반복 수행
function showName(name) {
    console.log(name);
}
const tId = setInterval(showName, 3000, 'Mike');
clearTimeout(tId); // 중단하려면


// 주의
// 딜레이 타임을 0으로 해도 바로 실행되지 않음
setTimeout(function() {
    console.log(2)
}, 0);
console.log(1)
// 1이 먼저 찍히고 2가 나중에 찍힘
// 현재 실행 중인 스크립트가 종료된 이후 스케줄링 함수를 실행하기 때문
// 또한 브라우저는 기본적으로 4ms~ 정도의 대기시간이 있음


// ex
let num = 0;
function showTime() {
    console.log(`안녕하세요. 접속한지 ${num++}초가 지났습니다.`);
    if (num > 5) {
        clearInterval(tId);
    }
}
const tId = setInterval(showTime, 1000);