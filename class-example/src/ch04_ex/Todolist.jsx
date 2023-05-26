import React from 'react';

const Todolist = (props) => {
    return (
        <div>
            <h1>{`현재시간 : ${props.date}`}</h1>
            <h1>{`주말할일 : ${props.todo}`}</h1>
        </div>
    );
};

export default Todolist;