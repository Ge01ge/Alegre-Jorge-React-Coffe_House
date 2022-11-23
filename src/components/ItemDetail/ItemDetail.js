import React from "react";
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({ item }) => {
  return (
    <div className="card col-md-4 mx-auto">
        <div className="bg-warning text-dark bg-opacity-10">
          <img src={item.img} className={` ${styles.img}`} alt={item.name} />
          <h5 className="card-title mx-2">{item.name}</h5>
          <p className="card-text mx-2">{item.description}</p>
          <p className="card-text mx-2">Categoria: {item.category}</p>
          <p className="card-text mx-2">Stock: {item.stock}</p>
          <p className="card-text mx-2">${item.price}</p>
          <button type="button" className="btn btn-dark px-4 mx-4 my-2">Comprar</button>
        </div>
      </div>
  );
};

export default ItemDetail;
