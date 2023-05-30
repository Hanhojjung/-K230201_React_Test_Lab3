//Comment.jsx
import React from "react";
import logo from "./img1.jpg";
import AvatarImg from "./AvatarImg";
//자식 컴포넌트 
const styles = {
  wrapper: {
    margin: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    boderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    boderRadius: 25,
  },
  contentContainer: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 18,
  }
};

const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      {/* <div style={styles.imageContainer}>
        
        <img src={logo} alt="로컬사진" style={styles.image} />
      </div> */}
      <AvatarImg src={logo} alt="사진1" style={styles.image}/>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
};

export default Comment;


