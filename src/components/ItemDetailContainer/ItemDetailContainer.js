import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

import {getData } from "../../Mocks/Item.mock";

const ItemDetailContainer = () => {
  const { category } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getData().then(
       (data) => {
        if (category) {
          const categories = data.find(
            (item) => item.id === "1"
          );
          setItem(categories);
        } else {
          setItem();
        }
      }
    );
  }, []);

  // useEffect(() => {
  //   getData().then(
  //      (data) => setItem(data.find((item)=> item.id === "1"))
  //    );
  //  }, []);

  if (!item) {
    return <p>Loading...</p>;
  }

  return(
  <>
    <ItemDetail item={item} />
  </>
  );
  
};

export default ItemDetailContainer;
