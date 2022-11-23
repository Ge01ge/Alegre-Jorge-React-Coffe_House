import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../Title";
import { getData } from "../../Mocks/Item.mock";

import ItemList from "../ItemList/ItemList";


export const ItemListContainer = ({greeting}) =>{
    
    const { category } = useParams();
    const [items, setItems] = useState([]);


    // useEffect(() => {
    //   new Promise((resolve) =>
    //     setTimeout(() => {
    //       resolve(item);
    //     }, 2000)
    //   ).then((data) => {
  
    useEffect(() => {
   getData().then(
      (data) => {
        if (category) {
          const categories = data.filter(
            (product) => product.category === category
          );
          setItems(categories);
        } else {
          setItems(data);
        }
      }
    );
  }, [category]);

  if (items.length === 0) {
    return <p>Loading...</p>;
  }

    return(
      <>
        <Title greeting={greeting} />
        < ItemList products={items} />
      </>
    );
}

export default ItemListContainer;