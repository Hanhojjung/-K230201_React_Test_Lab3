//ConfirmDialog.jsx
//rsc를 입력하면 

import React from 'react';
import Button from './Button';
const ConfirmDialog = props => {
    return (
        <div>
            <p>내용 확인</p>
            <Button color="green">확인</Button>
            <Button color="red">확인2</Button>
        </div>
    );
};

export default ConfirmDialog;