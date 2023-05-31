import React, { Component } from 'react';

// 클래스형 컴포넌트 보다 함수형 공부를 더하는 것을 추천
class Toggle extends Component {
    constructor(props){
        super(props);

        this.state = {isToggleOn:true}

        // bind를 해야 this 사용 가능
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>{this.state.isToggleOn?'켜짐':"꺼짐"}</button>
        );
    }
}

export default Toggle;