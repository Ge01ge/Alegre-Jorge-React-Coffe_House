import React from "react";
import { useCartContext } from "../Context/CartContext";

import styles from "./ItemCart.module.scss";

const ItemCart = ({ product }) => {
    const {removeItem} = useCartContext();

  return (
    <div className={`${styles.itemCart}`}>
      <img
        src={product.item.img}
        alt={product.item.name}
      />
      <div>
        <h5 className={`fs-3 p-2 `}>{product.item.name}</h5>
        <p className="fs-5 px-2">Cantidad: {product.quantityAdded} Unidades</p>
        <p className="fs-5 px-2">Precio U.: ${product.item.price}</p>
        <p className="fs-5 px-2">SubTotal: ${product.quantityAdded * product.item.price}</p>
        
        <button
          type="button"
          className="btn btn-dark px-4 mx-4 my-2"
          onClick={() => removeItem(product.item.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};


export default ItemCart;
