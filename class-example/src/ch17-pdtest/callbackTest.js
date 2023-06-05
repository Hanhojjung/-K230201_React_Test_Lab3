// 확장팩 코드 러너 설치 후
// js 바닐라 js 기본 실행하는 방법 :ctrl +alt + n
// 비동기 톡신 관련된 콜백함수라 async, awiat, promis 간단 설명
// axios, 비동기 통신 방법 설명
// 공공데이터 연동 작업

// 동기 작업 vs 비동기작업
// 동기 작업 : 순차적으로 작업 진행. 1번 수행 끝나면 2번 수행 시작
// 비동기 작업 : 자바스크립트에서 스레드가 하나만 있다. 메인 스레드이고
// 도대체 여러 멀티 작업을 어떻게 처리를 할까?
// 함수를 막 실행함. non-blocking,
// 대신 해당 함수가 끝나다라는 신호를 보내게 됩니다. 콜백함수. 상황을 보고를 받는다.

function print()
{   console.log("hi 리액트")

}

// 콜백 지옥 보여주기 예제
function increase(number,callback)
{
    setTimeout(() =>{
        const result = number+1;
        if(callback){
            callback(result)
        }  
    },2000)
}

// setTimeout(콜백함수,시간(ms) : 2번재 매개변수 시간 후에, 첫번재 매개변수 함수가 호출됨 );
// ex1)
// setTimeout(print, 3000);
// 실행 순서, 대기 중이 먼저 뜨고 -> 3초 뒤에 -> hi 리액트가 뜬다. 

// ex2)
increase(10,result => {
    console.log(result)
})
console.log('대기중...')

// ex3 콜백 지옥 보여주기
// console.log('콜백 지옥 시작');
// increase(0, result =>{
//     console.log(result);
//     increase(result,result => {
//         console.log(result);
//         increase(result,result => {
//             console.log(result);
//         })
//     })
// })

// 비동기 작업을 위해서 -> 콜백 함수를 도입 문제점 발생 -> callback 지옥 발생->es8문법 사용 -> 가독성 있게 작업을 할 수 있음.


// ex4) Promise 문법으로 변경
function increase2(number)
    //increase2 함수에서 성공 시, resolve 함수를 반환, 실패시 reject 함수를 반환 
{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const result2 = number + 10;
            if(result2 > 50){
                const e = new Error("테스트 에러")
                return reject(e)
            }
            resolve(result2)
        },2000)
    })
    return promise;
}

// Promise 버전으로 비동기 함수 처리 부분 비교
// increase2 함수의 반환 타입은 Promise -> 성공 :resolve, 실패 :reject 반환.
// 결론 : 인자 값에 계속 콜백 함수 형태로 중첩되게 들어가지 않고,
// then을 이용

// increase2(100).then(number=>{
//     console.log(number);
//     return increase2(number)
// }).then(number=>{
//     console.log(number);
//     return increase2(number)
// }).then(number=>{
//     console.log(number);
//     return increase2(number)
// }).catch(error => {
//     console.log(error)
// })

// async, await 문법을 같이 세트로 작업
// es8 ES2017
// async 함수의 앞부분에 표기, 비동기 작업 할 때 사요
// await Promise 앞부분에 표기
// increase2 함수는 반환을 Promise 타입을 반환합니다.

async function runTest(){
    try{
        let result = await increase2(10);
        console.log(result)

        result = await increase2(result)
        console.log(result)

        result = await increase2(result)
        console.log(result)

    } catch(e){
        console.log(e)
    }
    
}

runTest()

// 결론, 비동기 함수 호출방법
// callback 함수 스타일 ->Promise(resolve,reject) 성공, 실패 -> async, await를 이용해서 비동기 함수를 구현.
// 함수 앞에 async, await는 Promise를 반환하는 함수 앞에 붙인다.

// axios : 통신 라이브러리 사용할 에정임. 이 라이브러리 반환을 Promse 타입으로 반환을 합니다.
// 더미 데이터를 axios를 이용해서 받아오고 
// 2번째, 공공데이터를 이용함. 안드로이드 때, 사용했던 공공데이터 발급 받은 키 사이트 접속해서 
// 연장신청 하루 추가됨
console.log('간단 실행 테스트 확인')