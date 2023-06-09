import React, { useState } from 'react';
import TestInput from './TestInput';

// 끓는 부분 알림 함수
const BoilMessage = (props) => {
    if(props.celsius >= 100){
        return <p>물이 끓어요</p>
    }
    return <p>물이 끓지 않아요.</p>
};

// 변환 함수1
// 화씨 -> 섭씨
const toCel = (fah) => {
    return ((fah-32)*5)/9;
};
// 변환 함수2
// 섭씨 -> 화씨
const toFah = (cel) => {
    return (cel * 9 / 5) + 32;
}

// 컨버터 인자 : 온도, 변환해주는 함수
const tryCon = (temp, convert) => {
    // 텍스트 인풋 창, 숫자 입력이 아님.
    const input = parseFloat(temp);
    // 문자열 -> 실수(소수점 표기)
    // 체크 -> 숫자가 아닌 문자열이면 공백으로 보내기.
    if(Number.isNaN(input)){
        return '';
    }
    
    // convert : 위에서 정의한 ,각각의 변환해주는 함수 2가지
    const output = convert(input);
    // 반올림 작업.
    const rounded = Math.round(output * 1000)/1000;
    // 숫자 => 문자
    return rounded.toString();

}

const Calc = () => {
    const [temp, setTemp] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelChange = (temp) =>{
        setTemp(temp);
        setScale('c');
    }

    const handleFahChange = (temp) =>{
        setTemp(temp);
        setScale('f');
    }

    const celsius = scale === 'f' ? tryCon(temp,toCel):temp;

    const fah = scale === 'c' ? tryCon(temp,toFah):temp;
    return (
        <div>
            <TestInput scale="c" temp={celsius} onTempChange={handleCelChange}/>
            <TestInput scale="f" temp={fah} onTempChange={handleFahChange}/>
            {/* 100도 이상이면 메시지 표기 */}
            <BoilMessage celsius={celsius}/>
        </div>
    );
};

export default Calc;