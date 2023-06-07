import React from 'react';
import styled, {css} from "styled-components";

// name은 작업 할 때 사용할 변수
// text 실제 웹화면에 보이는 한글 이름
const categories = [
    {name : 'food', text:'부산맛집정보 서비스'},
    {name : 'walking', text:'부산도보여행 서비스'},
    {name : 'place', text:'부산명소 서비스'}
    
]

 // 카테고리 부분 스타일 설정
//  white-space: pre; -> 텍스트와 줄 바꿈
// font-weight:600; -> 텍스트 굵기
 const CategoriesBlock = styled.div`
    display: flex;
    padding : 1rem;
    width: 768px;
    margin : 0 auto;
    @media screen and (max-width:768px){
        width: 100%;
        overflow-x:auto;

    }
 `
// 추가 UI
// 선택된 카테고리 값에 따라 스타일 변경.
// 카테고리 값을 state 관리. 라우터를 적용하기 전 버전. 
// css 요소를 추가. 


const Category = styled.div`
    font-size : 1.2rem;
    cursor:pointer;
    white-space:pre;
    text-decoration:none;
    color:inherit;
    padding-bottom: 0.2rem;
    
    &.hover{
        color : #495057;
    }

    ${props=> 
        props.active && css`
        font-weight : 600px;
        border-bottom:2px solid #22b8cf;
        color: #22b8cf;
            &:hover{
                color:#3bc9db;
            }
        `}

    &.active{
        font-weight:600;
        border-bottom:2px solid ##22b8cf;
        color : #22b8cf;
          &:hover{
            color:#3bc9db;
          }
        } 
        &+&{
            margin-left : 1rem;
        } 
`;

// props 부모 => 자식 데이터 전달, 사용
// state 끌어올리기, 자식 -> 부모 : 이벤트(부모에 설정이된 세터 함수)
// 예) onSelect 함수가 호출이 되면, 부모쪽 APP.js에 선언된 세터함수가 호출되면서, 업데이트가 됨
// props 객체(읽기전용) -> 불변성, 순수함수.
const Categories = ({onSelect,category}) => {
    return (
        <CategoriesBlock>
            {categories.map((c)=>(
                <Category key ={c.name} 
                    active={category === c.name}
                    onClick={()=> onSelect(c.name)}
                >{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;