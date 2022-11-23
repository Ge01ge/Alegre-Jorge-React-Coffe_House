import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

import {getData } from "../../Mocks/Item.mock";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getData().then(
       (data) => setItem(data.find((item)=> item.id === "1"))
     );
   }, []);

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
