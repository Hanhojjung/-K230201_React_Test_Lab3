import React from 'react';

// 화살표 함수 = 익명함수, 자체 쓰기는 힘들고
// 변수에 할당해서 사용한다.
const Tick = (props) =>{
    return (
        <div>
            <h1>안녕, 리액트 </h1>
            <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2> 
            {/* 리액트에서 표현식을 쓸 때 무조건 중괄호 사용 */}
        </div>
    );
};

export default Tick;