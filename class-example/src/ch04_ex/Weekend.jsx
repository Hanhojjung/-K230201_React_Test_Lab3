import React from "react";
import Todolist from "./Todolist";
import MyTest1 from "../ch04/MyTest1";

const Weekend = (props) => {
    return (
        <div>
            {/* <Todolist date= {new Date().toLocaleTimeString()} todo1 ="공부하기" todo2 = "청소하기"/> */}
            <MyTest1 name="이상용" number={7} childern={3} >
               
            </MyTest1>

        </div>
    );
};

export default Weekend;