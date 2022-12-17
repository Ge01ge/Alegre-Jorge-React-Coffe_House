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
        //   className={`mx-auto ${styles.img1}`}
      />
      <div>
        <h5 className={`card-title p-2 `}>{product.item.name}</h5>
        <p className="card-text px-2">Cantidad: {product.quantityAdded} Unidades</p>
        <p className="card-text px-2">Precio U.: ${product.item.price}</p>
        <p className="card-text px-2">SubTotal: ${product.quantityAdded * product.item.price}</p>
        
        <button
          type="button"
          className="btn btn-dark px-4 mx-4 my-2"
          onClick={() => removeItem(product.item.id)}
        >
          {/* className="flex flex-col w-[200px] h-[350px] bg-white rounded p-4 shadow cursor-pointer transition-all hover:shadow-lg" */}
          Eliminar
        </button>
      </div>
    </div>
  );
};


export default ItemCart;
