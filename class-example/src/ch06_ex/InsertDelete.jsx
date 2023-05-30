import React, { useState } from 'react';

const InsertDelete = () => {

    const [names, setNames] = useState([
        {id:1, text:"한호정1"},
        {id:2, text:"한호정2"},
        {id:3, text:"한호정3"},
        {id:4, text:"한호정4"}
    ]);

    const [msgs, setMsgs] = useState([
        {id2:1, text2:"메시지1"},
        {id2:2, text2:"메시지2"},
        {id2:3, text2:"메시지3"},
        {id2:4, text2:"메시지4"}
    ]);


    const [inputText, setInputText] = useState("");
    const [nextId,setNextId] = useState(5);

    const [inputMsg, setInputMsg] = useState("");
    const [nextId2,setNextId2] = useState(5);

    const onChange = (e) => setInputText(e.target.value);
    console.log(inputText);

    const onChange2 = (e) => setInputMsg(e.target.value);
    console.log(inputText);

    const onclick = () => {
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        });
        const nextMsgs = msgs.concat({
            id2:nextId,
            text2:inputMsg
        });

        setNextId(nextId+1);
        setNames(nextNames);

        setNextId2(nextId2+1);
        setMsgs(nextMsgs);

        setInputText("");
        setInputMsg("");
    }

   

    const onRemove =(id) => {
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    };
    const nameList = names.map((name) =>(
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    const msgList = msgs.map((msg) =>(
        <li key={msg.id2} onDoubleClick={() => onRemove(msg.id2)}>
            {msg.text2}
        </li>
    ));

    return (
        <div>
            이름 :<input value={inputText} onChange={onChange}/><p/>
            메시지 :<input value={inputMsg} onChange={onChange2}/>
            <button onClick={onclick}>추가</button>
            <ul>{nameList}</ul>
            <ul>{msgList}</ul>
        </div>
    );
};

export default InsertDelete;