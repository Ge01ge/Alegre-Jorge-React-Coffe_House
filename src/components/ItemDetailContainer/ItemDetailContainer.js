import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

import {getData } from "../../Mocks/Item.mock";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);


  useEffect(() => {
    getData().then(
       (data) => setItem(data.find((prod)=> prod.id === id))
     );
   }, [id]);

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
