import React, { useState } from 'react';

const NameForm = (props) => {
    // useState -> 배열을 반환한다. 요소는 1번 요소 : 변수값, 2번 요소 :세터함수
    const [value, setValue] = useState('');

    const handChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름 :' + value)
        // preventDefault() : 자바스크립트상 기본 로직, submit 제출, 서버로 넘길 때 사용
        // 기본 기능을 못하게 방지한다.
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>
            이름 : 
            <input type="text" value={value} onChange={handChange}/>
        </label>
        <button type="submit">제출</button>
        </form>
    );
};

export default NameForm;