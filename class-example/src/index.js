import React from 'react';
import ReactDOM from 'react-dom';
//'react-dom-client' -> 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfirmDialog from './ch04/ConfirmDialog';
import Tick from './ch04/Tick';

//setInterval(콜백함수, 시간(ms)) -> 특정 시간마다, 첫번째 매개변수에서 정의한 함수가 실행한다.
//ReactDOM
setInterval( () => {
  ReactDOM.render(
    <React.StrictMode>
    <Tick/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
