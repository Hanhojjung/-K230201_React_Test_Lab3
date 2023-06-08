import React from 'react';
import { useParams } from 'react-router-dom';
import Categories2 from '../Categories2';
import ItemList2 from '../ItemList2';


const ItemsPage2 = ({match}) => {

    const params = useParams();
 
    const category = params.category || 'food';
    return (
     <>
        <Categories2/>
        <ItemList2 category={category}/>
     </>
    );
};

export default ItemsPage2;