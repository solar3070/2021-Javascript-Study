// 프로미스 Promise

const pr = new Promise((resolve, reject) => {
    // resolve 성공한 경우 실행되는 함수
    // reject는 실패한 경우 실행되는 함수
    // 어떤 일이 완료된 이후에 실행되는 함수 : callback 함수
});

// new Promise가 반환하는 프로미스 객체는 state와 result를 프로퍼티로 가짐
/* 
state는 초기에 pending(대기)
-> resolve(value)호출 시(성공 시) fulfilled(이행됨)가 됨, result는 value가 됨 (resolve 함수로 전달된 값)
-> reject(error)가 호출 되면(실패) rejected(거부됨)이 됨,
result는 error가 됨 (reject 함수로 전달된 에러)
*/

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 3000)
});
// state는 peding이었다가 3초 뒤에 fulfilled로 바뀌고 result는 'OK'가 됨

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('error...'))
    }, 3000)
});
// state는 peding이었다가 3초 뒤에 rejected로 바뀌고 result는 error가 됨

// 지금까지 판매자의 코드
// 주문을 받으면 3초 동안 작업 후 성공, 실패를 알려줌

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 3000)
});

// then을 이용해서 resolve와 reject를 처리 가능
pr.then(
    function(result){}, // promise가 이행 되었을 때 실행 result에는 OK가 들어옴
    function(err){} // promise가 거부 되었을 때 실행 result에는 에러가 들어옴
)

pr.then(
    function(result){
        console.log(result + ' 가지러 가자.');
    },
    function(err){
        onsole.log('다시 주문해주세요..');
    } 
) 

// then 이외에 사용할 수 있는 것: catch, finally

// catch: then과 동일하게 동작하지만 가독성이 좋고 첫 번째 함수를 실행했다가 나는 에러도 잡아줄 수 있음
pr.then(
    function(result){}
).catch(
    function(err){} 
)

// finally는 이행이든 거부든 처리가 완료되면 항상 실행
pr.then(
    function(result){}
).catch(
    function(err){} 
).finally(
    function() {
        console.log('---주문 끝---')
    }
)

// Promise.all
console.time('x')
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd('x');
});
// 세 작업이 모두 완료되어야 then 부분이 실행
// Promise.all은 한꺼번에 시작하고 모두 이행되면 값을 사용할 수 있음 -> 시간 절약
// 만일 reject되는 경우가 있다면 어떤 데이터도 얻지 못함
// 하나의 정보라도 누락되면 페이지를 보여주면 안되는 경우 사용할 수 있음

// Promise.race
Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res);
});
// all과의 차이점 : all은 모든 작업이 완료될 때까지 기다리지만 race는 하나라도 1등으로 완료되면 끝냄
