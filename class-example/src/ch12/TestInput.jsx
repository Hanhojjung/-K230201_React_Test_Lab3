import React, { useState } from 'react';

const sNames ={
    c:'섭씨',
    f:'화씨'
}
// 끓는 부분 알림 함수
const BoilMessage = (props) => {
    if(props.celsius >= 100){
        return <p>물이 끓어요</p>
    }
    return <p>물이 끓지 않아요.</p>
}

// 입력하는 온도, 섭씨, 화씨 부붕늘 구분 짓고
// props로 전달해서 사용
// 공유 state로 해서
// 부모 : Calc -> (props) 자식 : TestInput
const TestInput = (props) => {
    // const [temp, setTemp] = useState('');
    const handleChange = (event) =>{
        // 호출되면서 업데이트
        // setTemp(event.target.value);
        // 부모로부터 state 공유 받기
        props.onTempChange(event.target.value)
    }
    return (
        <div>
            <fieldset>
                <legend>온도를 입력하세요 : (단위:{sNames[props.scale]})</legend>
                {/* <input value={temp} onChange={handleChange}/> */}
                <input value={props.temp} onChange={handleChange}/>
                {/* 공유 state로 온도를 사용하기. */}
                {/* 위에 끓는 부분에 알림 메세지 컴포넌트에 해당 props로 celsius 값을 전달
                온도타입 문자열 -> 실수 변경 */}
            
            </fieldset>    
        </div>
    );
};

export default TestInput;