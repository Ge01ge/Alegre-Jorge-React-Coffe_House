import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./ItemDetail.module.scss";
import { ItemCount } from "../ItemCount/ItemCount";
import CartContext from "../Context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const [purchase, setPurchase] = useState(false);
  const [currentStock, setCurrentStock] = useState(item?.stock);
  

  function handleAdd(count) {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
      setPurchase(true)
    }
  }

  return (
    <div>
      <div className=" col-6 col-md-4 mx-auto p-2 my-2">
        <div className={` ${styles.cart1}`}>
          <img src={item?.img} className={` ${styles.img}`} alt={item?.name} />
          <h5 className="mx-4 text-white fs-3">{item?.name}</h5>
          <p className={` mx-4 text-white ${styles.justifyP}`}>{item?.description}</p>
          <p className={` mx-4 text-white ${styles.justifyP}`}>
            {" "}
            <strong>Categoria: </strong>
            {item?.category}
          </p>

          <span className="text-white mx-4 ">
            <strong> Price: </strong>${item?.price}
          </span>

          {currentStock > 0 && (
            <p className={` my-2 ${styles.justifyP}`}>
            <span
              className={`fs-5 text-white px-4 py-2 my-4 ${styles.margin1}`}
            >
              In Stock: {currentStock}
            </span>
            </p>
            
          )}

          <div className=" ">
            {!purchase ? (
              // <ItemCount stock={item.stock} handleAdd={handleAdd} />
              <ItemCount stock={item.stock} currentStock={currentStock} handleAdd={handleAdd} />
            ) : (
              // si el usuario agregó un producto, ItemCount se va a ocultar y en su lugar se va a ver el Link que lleva al carrito
              <Link to="/cart" className={`btn btn-dark px-2 my-4 ${styles.margin1}`}>
                Confirmar Compra
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;