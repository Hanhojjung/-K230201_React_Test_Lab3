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
import NotiList from './ch06/NotiList';
import MenuItemList from './ch06_ex/MenuItemList';
import TestSample from './ch6-3insert_delete/TestSample';
import InsertDelete from './ch06_ex/InsertDelete';
import Counter from './ch07/Counter';
import TestBefore from './ch7-2-useMemo/TestBefore';
import TestAfter from './ch7-2-useMemo/TestAfter';

// 생명 주기를 테스트를 하는 코드에서는, React.StrictMode를 제거하고 실행하는게 가독성 면에서 좋습니다. 
// 수행이 2번씩 일어나기 때문.
ReactDOM.render(
  <React.StrictMode>
    {/* <InsertDelete/> */}
    {/* <Counter/> */}
    {/* <TestBefore/> */}
    <TestAfter/>
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
