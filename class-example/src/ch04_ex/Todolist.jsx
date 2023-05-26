import React from 'react';

const Todolist = (props) => {
    return (
        <div>
            <h1>{`현재시간 : ${props.date}`}</h1>
            <h2>{`주말할일 : ${props.todo1}`}</h2>
            <h2>{`주말할일 : ${props.todo2}`}</h2>
        </div>
    );
};

export default Todolist;