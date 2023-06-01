import React, { useState } from 'react';

// BMI 메시지
const WeightMessage = (props) => {
    if(props.bmi <=18.5){
        return <p>저체중입니다.</p>
    }
    else if(props.bmi <=23){
        return <p>정상입니다.</p>
    } 
    else if(props.bmi <=25){
        return <p>과체중입니다.</p>
    }
    else if(props.bmi <=30){
        return <p>경도 비만입니다.</p>
    }
    else {
        return <p>중등도 비만입니다.</p>
    }     

};

// BMI 변환함수
const toBmi = (fah) => {
    return ((fah-32)*5)/9;
};



const Weight = (props) => {
    const [cm, setCm] = useState('');
    const [kg, setKg] = useState('');

    const handleBmiChange = (cm,kg) =>{
        setCm(cm);
        setKg(kg);
    }

    return (
        <div>
            
        </div>
    );
};

export default Weight;