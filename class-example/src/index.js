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
import BeforeUseCallback from './ch7-3-AfterUseCallback/BeforeUseCallback';
import AfterUseCallback from './ch7-3-AfterUseCallback/AfterUseCallback';
import TextInputTest from './ch07/TextInputTest';
import Accomodate from './ch07_ex/Accomodate';
import Toggle from './ch8/Toggle';
import LandingPage from './ch9_ex/LandingPage';
import AttendanceBook from './ch10_ex/AttendanceBook';
import NameForm from './ch11/NameForm';
import FileImageTest from './ch11/FileImageTest';
import TestNullValue from './ch11/TestNullValue';
import Form from './ch11_ex/Form';
import Calc from './ch12/Calc';
import WelcomeDialog from './ch13/WelcomeDialog';
import ProfileCard from './ch13_ex/ProfileCard';
import Main from './ch14/Main';
import MainPage from './ch15/MainPage';
import Sample from './ch15/Sample';
import Blocks from './ch15_ex/Blocks';

// 생명 주기를 테스트를 하는 코드에서는, React.StrictMode를 제거하고 실행하는게 가독성 면에서 좋습니다. 
// 수행이 2번씩 일어나기 때문.
ReactDOM.render(
  <React.StrictMode>
    {/* <InsertDelete/> */}
    {/* <Counter/> */}
    {/* <TestBefore/> */}
    {/* <TestAfter/> */}
    {/* <BeforeUseCallback/> */}
    {/* <AfterUseCallback/> */}
    {/* <TextInputTest/> */}
    {/* <Accomodate/> */}
    {/* <Toggle/> */}
    {/* <LandingPage/> */}
    {/* <AttendanceBook/> */}
    {/* <FileImageTest/> */}
    {/* <NameForm/> */}
    {/* <TestNullValue/> */}
    {/* <Form/> */}
    {/* <Calc/> */}
    {/* <WelcomeDialog/> */}
    {/* <ProfileCard/> */}
    {/* <Main/> */}
    {/* <MainPage/> */}
    {/* <Sample/> */}
    <Blocks/>

  </React.StrictMode>,
  document.getElementById('root')
);

// setTimeout(() => {
//   ReactDOM.render(<input value={null}/>, document.getElementById('root'))
// }, 1000);

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
