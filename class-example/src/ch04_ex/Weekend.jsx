import React from "react";
import Todolist from "./Todolist";

const Weekend = (props) => {
    return (
        <div>
           <Todolist date= {new Date().toLocaleTimeString()} todo ="공부하기" />
        
        </div>
    );
};

export default Weekend;