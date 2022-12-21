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
      <div className=" col-md-4 mx-auto">
        <div className="bg-warning text-dark bg-opacity-10">
          <img src={item?.img} className={` ${styles.img}`} alt={item?.name} />
          <h5 className="card-title mx-2">{item?.name}</h5>
          <p className="card-text mx-2">{item?.description}</p>
          <p className="card-text mx-2">
            {" "}
            <strong>Categoria: </strong>
            {item?.category}
          </p>

          <span className="card-text mx-2">
            <strong> Price: </strong>${item?.price}
          </span>

          {currentStock > 0 && (
            <p
              className={`card-title p-2 m-2 border border-success rounded ${styles.textStock1}`}
            >
              In Stock: {currentStock}
            </p>
          )}

          <div className=" ">
            {!purchase ? (
              // <ItemCount stock={item.stock} handleAdd={handleAdd} />
              <ItemCount stock={item.stock} currentStock={currentStock} handleAdd={handleAdd} />
            ) : (
              // si el usuario agregó un producto, ItemCount se va a ocultar y en su lugar se va a ver el Link que lleva al carrito
              <Link to="/cart" className="btn btn-dark px-2 mx-4 my-2">
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