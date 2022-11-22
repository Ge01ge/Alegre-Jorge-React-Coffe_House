import React from "react";
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({ item }) => {
  return (
    <div className="card col-md-6 mx-auto">
        <div>
          <img src={item.img} className={styles.img} alt={item.description} />
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <button type="button" className="btn btn-dark m-2 ">
            {item.price}
          </button>
        </div>
      </div>
  );
};

export default ItemDetail;
