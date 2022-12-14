import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, getDocs, collection, doc } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";

// import { getData } from "../../Mocks/Item.mock";
import { db } from "../../index";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  
  console.log(data)

  useEffect(() => {
    const refProps = [db, "items"];
    const ref = id ? doc(...refProps, id) : collection(...refProps);

    // If we need get only 1 item
    if (id) {
      getDoc(ref)
        .then((item) => {
          console.log({ item });
          if (item.exists()) {
            setData({ id: item.id, ...item.data() });
          }
        })
        .catch((err) => console.error({ err }));
      return;
    }

    // If we need get all items
    getDocs(ref).then((result) =>
      setData(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <ItemDetail item={data} />
    </>
  );
};

export default ItemDetailContainer;

