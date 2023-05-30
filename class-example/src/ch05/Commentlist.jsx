import React from "react";
import Comment from "./Comment";
//부모 컴포넌트 
const Commentlist = (props) => {
  return (
    <div>
      {/* 자식 컴포넌트에 props로 데이터를 전달함. name, comment 속성을 전달함. 자식 컴포넌트 
      업데이트 -> render -> 다시 그린다. 
      다시 그리는 경우 -> 업데이트라고 이야기함
      업데이트 조건 -> p.s.부.강
      1)props가 바뀔 때 2)state 상태 변경 시 3)부모 컴포넌트 변경시 4)강제 변경 시 
      */}
      <Comment name = "이상용" comment = "댓글1"/>
      <Comment name = "이상용" comment = "댓글2"/>
    </div>
  );
};

export default Commentlist;