import React from 'react';
import ReactDOM from 'react-dom';
//'react-dom-client' -> 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConfirmDialog from './ch04/ConfirmDialog';
import Tick from './ch04/Tick';
import Weekend from './ch04_ex/Weekend';
import MyTest1 from './ch04/MyTest1';
import Commentlist from './ch05/Commentlist';

ReactDOM.render(
  <React.StrictMode>
    <Commentlist/>
  </React.StrictMode>,
  document.getElementById('root')
)

//setInterval(콜백함수, 시간(ms)) -> 특정 시간마다, 첫번째 매개변수에서 정의한 함수가 실행한다.
//ReactDOM
// setInterval( () => {
//   ReactDOM.render(
//     <React.StrictMode>
//     {/* <MyTest1 number={10}>
//       child 영역
//     </MyTest1> */}
//     </React.StrictMode>,
//     document.getElementById('root')
//   );  
// }, 1000
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
