import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PdItem2 from "./PdItem2";

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

const ItemList2 = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  
    const fetchData = async () => {
      setLoading(true);
      try {
      
        const query = category === "place" ? "place" : `${category}`;

        switch (query) {
          case "place":
            var response = await axios.get(
                "http://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=ILEuvHedm5Mts3ZpudoU8a9%2BDdaOwoecKJOjXjU%2B9ojDsxSn8dG%2BRugXbJrL4r4biQE3pvzrt4mCSa1caDW8Vw%3D%3D&pageNo=1&numOfRows=100&resultType=json"
              );
             
              console.log(response.data.getAttractionKr.item);
              setArticles(response.data.getAttractionKr.item);
              break;

          case "festival":
            var response = await axios.get(
               "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=ILEuvHedm5Mts3ZpudoU8a9%2BDdaOwoecKJOjXjU%2B9ojDsxSn8dG%2BRugXbJrL4r4biQE3pvzrt4mCSa1caDW8Vw%3D%3D&pageNo=1&numOfRows=10&resultType=json"
                  );
              console.log(response.data.getFestivalKr.item);
              setArticles(response.data.getFestivalKr.item);
              break;
          default:
            alert("카테고리 선택 해주세요.");

            
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
    
  }, [category]);

  
  if (loading) {
    return <ItemListBlock>대기중.....</ItemListBlock>;
  }

  if (!articles) {
    console.log("articles 응답이 없습니다. ");

    return null;
  }


  return (
    <ItemListBlock>
      {articles.map((article) => (
        <PdItem2 key={article.MAIN_TITLE} article={article} />
      ))}
    </ItemListBlock>
  );
};

export default ItemList2;