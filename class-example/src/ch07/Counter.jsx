// Counter.jsx
// rsc
import React, {useState, useEffect} from 'react';

// function counter(props){} : 기본형
// 화살표 함수형
// props 역할 : 데이터 전달. 부모->자식
// 부모->자식 계층, 부모1 -> 자식1(부모2) ->자식2(부모3) -> 자식3
// 단점, 만약 부모1에서 특정 props을 자식3에게 전달할려면,
// 3번걸 거쳐서 전달이 됩니다.
const Counter = (props) => {
    const[count, setCount] = useState(0)
    // setCount-> 세터, 무조건 이 함수를 이용해야 변경이 됩니다. 주의하기!
    // var count = 0;

    // 클래스형 컴포넌트에서는 바로 생명주기 확인 가능.
    // 하지만, 함수형 컴포넌트에서는 바로 사용이 안되고,
    // 대신에, 훅스, useEffect를 이용해서 구현할 수 있다.


    // useEffect : 생명주기와 같은 기능
    // 업데이트 이후에, 값이 변경(업데이트)표현하니까
    // useEffect(이펙트함수, 의존성 배열) 배열 모양 -> 1)없음 2)빈 배열[] 3)[변수] 

    // 클릭할 때마다 웹브라우저 제목이 변경(document.title)
    const exFunc = () =>{document.title = `총 ${count}번 클릭했음`}
    // 의존성 배열이 없어서 매번 업데이트 될때마다 함수 exFunc 호출이 됩니다.
    // 1) useEffect(exFunc);

    // 2) 빈 배열
    // useEffect(exFunc,[]);

    // 3) [변수]
    useEffect(exFunc,[count]);

    // 차이점 1)배열이 없는 경우 vs 3)배열에 변수값이 변경시 업데이트
    // 1)배열이 없는 경우 : count라는 변수가 변경외에도, 
    // 업데이트 되는 조건, 4가지 p,s,부,강 -> exFunc(이펙트함수) 무조건 호출
    // 3) 배열에 변수값이 변경시 업데이트, 변수 값에 의해서만 업데이트가 됩니다.

    return (
        <div>
        <p>                                                                                      총 횟수 : {count}번 클릭했음</p>
        {/* <button onClick={()=>count++}>
            클릭
        </button>     */}
        <button onClick={()=> setCount(count+1)}>클릭</button>    
        </div>
    );
};

// function counter(props){} : 기본형
// 화살표 함수형
export default Counter;