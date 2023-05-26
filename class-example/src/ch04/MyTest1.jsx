//MyTest1.jsx
//비구조화 할당 부분, 디폴트 props 부분, propTypes,
//rsc : 함수형 컴포넌트 자동 스니펫
//rcc : 클래스형 컴포넌트 자동 스니펫
// import React from 'react';
import PropTypes from 'prop-types'

import React, { Component } from 'react';

class MyTest1 extends Component {
    render() {
        //비구조화 할당. this.props는 객체입니다. 
        //수납도구, 여기에는 여러 가지의 속성이 있음
        //ex)this.props.name
        //ex)this.props.number
        //ex)this.props.children
        const{name,number,childern} = this.props
        return (
            <div>
                <h1>이름은 : {name}입니다. <br/></h1>
                <h1> childern 값 : {childern} <br/></h1>
                <h1>좋아하는 숫자 : {number}</h1>
            </div>
        );
    }
}

    MyTest1.defaultProps={
        name :"기본이름"
    };

    //디폴트 props 선언
    // eslint-disable-next-line react/no-typos
    MyTest1.PropTypes = {
        name : PropTypes.string,
        number: PropTypes.number.isRequired
    };
export default MyTest1;




// const MyTest1 = 
// ({name, number, childern}) => {
//     return (
//         <div>
//             <h1>이름은 : {name}입니다. <br/></h1>
//             <h1> childern 값 ; {childern} <br/></h1>
//             좋아하는 숫자 : {number}
//         </div>
//     );
// };

// MyTest1.defaultProps={
//     name :"기본이름"
// }

// //디폴트 props 선언
// // eslint-disable-next-line react/no-typos
// MyTest1.PropTypes = {
//     name : PropTypes.string,
//     number: PropTypes.number.isRequired
// };
// export default MyTest1;