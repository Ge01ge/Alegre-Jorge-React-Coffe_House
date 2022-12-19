import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../../index";

import Title from "../Title";
// import { getData } from "../../Mocks/Item.mock";

import ItemList from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    //  getData().then(
    //     (data) => {
    //       if (category) {
    //         const categories = data.filter(
    //           (product) => product.category === category
    //         );
    //         setItems(categories);
    //       } else {
    //         setItems(data);
    //       }
    //     }
    //   );

    if (!category) {
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((result) =>
        setItems(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    } else {
      const q = query(
        collection(db, "items"),
        where("category", "==", category)
      );
      getDocs(q).then((result) =>
        setItems(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    }
  }, [category]);


  if (items.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Title greeting={greeting} />
      <ItemList products={items} />
    </>
  );
};

export default ItemListContainer;
