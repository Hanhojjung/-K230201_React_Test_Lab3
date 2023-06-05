import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color : ${(props) => props.dark ? "white" : "dark"};
    background :  ${(props) => props.dark? "black":"white"};
    border : 1px solid black;
`;

const Test = styled.div`
    color : ${(props) => props.dark ? "white" : "dark"};
    background :  ${(props) => props.dark? "black":"white"};
    border : 1px solid black;
`;

const Sample = (props) => {
    return (
        <div>
            <Button>Nomal</Button><br/>
            <Button dark>Dark</Button>
            <Test dark>속성테스트</Test>        
        </div>
    );
};

export default Sample;