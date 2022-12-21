import {  useState } from "react";
import styles from "../ItemDetail/ItemDetail.module.scss";

export const ItemCount = ({ handleAdd, currentStock, stock }) => {
  const [count, setCount] = useState(1);

  const restar = () => {
    if (count > 1) {
        setCount(count - 1);
    } 
}

const sumar = () => {
    if (count < stock) {
        setCount(count + 1);
    } 
}
  return (
    <div className="mx-4 ">
      
      <button
        onClick={restar}
        // className=" fs-4 text-dark rounded-5"
        className={`fs-4 text-danger rounded-5 ${styles.widthCount}`}

      >
        -
      </button>
      <span
        id="counter"
        className=" mx-2 text-white font-bold"
      >
        {count}
      </span>
      <button
        onClick={sumar}
        className={`fs-4 text-success rounded-5 ${styles.widthCount}`}
      >
        +
      </button>
      <button
        onClick={() => handleAdd(count)}
        className=" btn btn-dark px-2 mx-4 my-2 rounded "
        disabled={currentStock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};