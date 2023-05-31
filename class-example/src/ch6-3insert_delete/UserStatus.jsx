// UserStatus.jsx
import React,{useState, useEffect} from 'react';

// 온라인 여부를 상태로 확인하는 작업
const UserStatus = (props) => {
    const [isOnline, setIsOnlie] = useState(null)

    function handleStatusChange(status){
        setIsOnlie(status.isOnline);
    }

    const exFunc2 = () =>{
        // ServerAPI.subscribeUserStatus(props.id,handleStatusChange);
        return() =>{
            // 언마운트와 같은 효과를 준다. 
            // ServerAPI.unsubscribeUserStatus(props.id,handleStatusChange);
        }
    }
    // 매번 업데이트 할 때마다 해당 exFunc2 호출
    useEffect
    if(isOnline === null)
    {
        return '대기중'
    }
    return isOnline? '온라인' : '오프라인';
};

export default UserStatus;