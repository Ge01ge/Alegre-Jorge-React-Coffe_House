import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import styles from "./ItemDetail.module.scss";
import { ItemCount } from "../ItemCount/ItemCount";
import CartContext from "../Context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <div>
      <div className="card col-md-4 mx-auto">
        <div className="bg-warning text-dark bg-opacity-10">
          <img src={item.img} className={` ${styles.img}`} alt={item.name} />
          <h5 className="card-title mx-2">{item.name}</h5>
          <p className="card-text mx-2">{item.description}</p>
          <p className="card-text mx-2">
            {" "}
            <strong>Categoria: </strong>
            {item.category}
          </p>

          <span className="card-text mx-2">
            <strong> Price: </strong>${item.price}
          </span>

          {currentStock > 0 && (
            <p
              className={`card-title p-2 m-2 border border-success rounded ${styles.textStock1}`}
            >
              In Stock: {currentStock}
            </p>
          )}

          <div className=" ">
            {/* Count */}
            {currentStock > 0 ? (
              <ItemCount count={count} handleCount={handleCount} />
            ) : (
              <span
                className={`card-title p-2 m-2 border border-danger rounded ${styles.textStock2}`}
              >
                Sin stock
              </span>
            )}
            <ItemCount
              handleCount={handleCount}
              count={count}
            />
            <div className=" px-2">
              <button
                onClick={handleAdd}
                className=" bg-gray px-2 mx-4 my-2 rounded"
                disabled={currentStock === 0}
              >
                Agregar al carrito
              </button>
              <button
                  onClick={handleCheckout}
                  className="btn btn-dark px-2 mx-4 my-2"
                  disabled={count === 0}
                >
                  Finalizar Compra
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
