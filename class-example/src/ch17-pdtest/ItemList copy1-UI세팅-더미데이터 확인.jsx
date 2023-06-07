import React,{useState,useEffect} from "react";
import styled from "styled-components";
import PdItem from "./PdItem";
import axios from "axios";

// 목록의 틀
// box-sizing: border-box; -> 해당 div 태그 안에 요소의 크기를 유지하면서,
// 테두와 안쪽 여백의 너비에 영향을 주지 않는 역할.
const ItemListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
// const sampleArticle = {
//   MAIN_TITLE: "제목",
//   ITEMCNTNTS: "내용",
//   MAIN_IMG_NORMAL: "https://via.placeholder.com/160",
// };

const ItemList = () => {
  // state 관리 하기 위한 변수들, 하나는 데이터, 로딩(받고 있는지 상태 여부)
  const[articles,setArticles] = useState(null);
  const[loading,setLoading] = useState(false);

  // useEffect : 마운트, 업데이트를 훅스로 쉽게 구현하는 함수.
  // useEffect(콜백함수, 의존배열) 1) 없는 것 : 매번 업데이트 마다 콜백 함수 호출 2) [] : 최초 1회 시 콜백함수 호출 3)[x]: x값이 번경될 때마다 콜백 함수 호출
  useEffect(()=>{
    // async 함수 이름 앞에 사용
    const fetchData = async() =>{
      setLoading(true);
      try{
        // await Promise 반환 타입 앞에 사용

        const response = await axios.get("https://apis.data.go.kr/6260000/FoodService/getFoodKr?servicekey=ILEuvHedm5Mts3ZpudoU8a9%2BDdaOwoecKJOjXjU%2B9ojDsxSn8dG%2BRugXbJrL4r4biQE3pvzrt4mCSa1caDW8Vw%3D%3D&numOfRows=100&pageNo=1&resultType=json")
        // response.data 이 부분까지는 고정이고, 해당 공공데이터의 데이터 구조에 따라서 조금씩 다름.
        console.log(response.data.getFoodKr.item);
        setArticles(response.data.getFoodKr.item);
      }catch(e){
        console.log(e)
      }
      setLoading(false);
    };
    fetchData();
  },[])

  // 대기중일 때 
  if(loading){
    return <ItemListBlock>대기중...</ItemListBlock>
  }

  // 아직 response 값이 설정되지 않았을 때, 공공데이터를 못 받은 경우.
  if(!articles){
    console.log("articles 응답이 없습니다.")
  
  // 화면에 안그려줌
  return null;
  }

  return (
    <ItemListBlock>
      {articles.map((article) =>(
        <PdItem key ={article.MAIN_TITLE} article={article}/>
      ))}
    </ItemListBlock>
  );
};

export default ItemList;