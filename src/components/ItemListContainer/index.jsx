import React, { useEffect, useState } from "react";
import Title from "../Title";
import { getData } from "../../Mocks/Item.mock";

import ItemList from "../ItemList/ItemList";

export const ItemListContainer = ({greeting}) =>{
    // alt + 96 = ` (acento grave)
    const [items, setItems] = useState([]);

  useEffect(() => {
   getData().then(
      (data) => setItems(data)
    );
  }, []);

  console.log(items)

    return(
      <>
        <Title greeting={greeting} />
        < ItemList products={items} />
      </>
    );
}

export default ItemListContainer;