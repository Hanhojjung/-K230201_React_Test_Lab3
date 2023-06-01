import React, { useState } from 'react';
import TestInput from './TestInput';

// 끓는 부분 알림 함수
const BoilMessage = (props) => {
    if(props.celsius >= 100){
        return <p>물이 끓어요</p>
    }
    return <p>물이 끓지 않아요.</p>
};

// 화씨 -> 섭씨
const toCel = (fah) => {
    return ((fah-32)*5)/9;
};
// 섭씨 -> 화씨

const Calc = () => {
    const [temp, setTemp] = useState('');
    const handleChange = (event) =>{
        setTemp(event.target.value);
    }

    return (
        <div>
            <TestInput scale="c"/>
            <TestInput scale="f"/>
        </div>
    );
};

export default Calc;