import React from 'react';
// URL 매핑할 때, 해당 path 경로의 변수를 동적으로 사용할 예정.
// 1번 게시글 보고싶다 -> 호스트 서버/board/1
// 문법 -> board/:(콜론) 동적변수, 사용
import { useParams } from 'react-router-dom';
import Categories from '../Categories';
import ItemList from '../ItemList';
const ItemsPage = ({match}) => {
    // useParams를 사용함
    // 순서1. 선언 useParams
    const params = useParams();
    // 순서. 적용
    // params.category 값이 존재하면 해당 값을 사용하고 만약 없다면, 기본 값으로 'food'를 사용함

    // 해당 페이지 컴포넌트를 사용하므로
    // 기존에 onSelect 함수를 이용해서 해당 카테고리 값을 설정 및 적용 했는데,
    // 이제는 라우팅을 사용해서 필요가 없다. 기존 카테고리 변경 함수인 onSelect 
    const category = params.category || 'food';
    return (
        <>
        <Categories/>
        <ItemList  category={category}/>
        </>
    );
};

export default ItemsPage;