import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

import { item as itemMock } from "../../Mocks/Item.mock";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(itemMock), 2000)).then(
      (data) => setItem(data)
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
