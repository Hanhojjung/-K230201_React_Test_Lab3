import React from 'react';
import FancyBorder from './FancyBorder';

const WelcomeDialog = (props) => {
    return (
        // FancyBorder의 child는 2개 -> h1, p 
        <FancyBorder color="blue">
            {/* h1의 child는 어서오세요 */}
            <h1 className="Dialog-title">
                어서오세요
            </h1>
            <p className="Dialog-message">
                우리 사이트에 방문하신 것을 환영합니다!
            </p>
        </FancyBorder>
    );
};

export default WelcomeDialog;