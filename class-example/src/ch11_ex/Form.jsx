import React, { useRef, useState } from 'react';

const styles = {
    image: {
      with: 200,
      height: 200,
      borderRadius: 50,
    },
  };


  
const Form = (props) => {
    // 1) 이미지
    const [imgFile, setImgFile] = useState("");
    
    const imgRef = useRef();

    const saveImgFile = () => {
        const file = imgRef.current.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result)
        };
    };


    // 2)이메일
    const [emailvalue, setEmailValue] = useState("");

    // 3) 패스워드
    const [passvalue, setPassValue] = useState("");

    // 4) 패스워드 확인
    const [passvalue2, setPassValue2] = useState("");

    const handleChange = (event) => {
    setEmailValue(event.target.value);
    // 2)이메일
    console.log("작성한 이메일 : " + emailvalue);
  };

  const handleChange2 = (event) => {
    setPassValue(event.target.value);
    // 3) 패스워드
    console.log("작성한 비밀번호 : " + passvalue);
  };

  const handleChange3 = (event) => {
    setPassValue2(event.target.value);
      // 4) 패스워드 확인
    console.log("작성한 비밀번호 확인 : " + passvalue2);
  };


  const handleSubmit = (event) => {
     // 2)이메일
    alert("작성한 이메일 : " + emailvalue);
     // 3) 패스워드
     alert("작성한 패스워드 : " + passvalue);
     // 4) 패스워드 확인
     alert("작성한 패스워드 확인 : " + passvalue2);
    event.preventDefault();
  };



    return (
        
        <form onSubmit={handleSubmit}>   
<div>
      {/* 업로드 된 이미지 미리보기 */}
      <img
        // 조건부 렌더링 -> 표현식으로 삼항다항식을 이용해서 , 해당 조건이 참이면, 참일 때 수행하고, 거짓이면
        // 거짓 수행
        src={imgFile ? imgFile : `./san1.png`}
        alt="프로필 이미지"
        style={styles.image}
      />
      <br />
      {/* 이미지 업로드 input */}
      <input
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={saveImgFile}
        // useRef가 적용이 됨
        // 순서2
        ref={imgRef}
      />
    </div>
        <label>
        이메일 :
        <input type="email" value={emailvalue} onChange={handleChange} />
        </label><p/>
        <label>
        비밀번호 :
        <input type="password" value={passvalue} onChange={handleChange2} />
        </label><p/>
        <label>
        비밀번호 확인 :
        <input type="password" value={passvalue2} onChange={handleChange3} />
        </label><p/>
        <button type="submit">제출</button>
        </form>
        
    );
};

export default Form;