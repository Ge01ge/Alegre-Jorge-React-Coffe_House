import React from "react";
// import styles from "../ItemDetail/ItemDetail.module.scss";

export const ItemCount = ({ count, handleCount }) => {
    return (
      <div className="flex mt-10 w-4/5 bg-gray-200 rounded">
        <button
          onClick={() => handleCount("minus")}
          className="flex justify-center items-center btn btn-dark px-4 mx-4 my-2 text-white"
        >
          -
        </button>
        <span
          id="counter"
          className="flex flex-1 justify-center items-center mx-4 font-bold"
        >
          {count}
        </span>
        <button
          onClick={() => handleCount("plus")}
          className="flex justify-center items-center btn btn-dark px-4 mx-4 my-2 text-white"
        >
          +
        </button>
      </div>
    );
  };