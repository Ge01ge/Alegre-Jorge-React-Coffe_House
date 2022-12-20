export const ItemCount = ({ count, handleCount }) => {
  const [count, setCount] = useState(1);

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  return (
    <div className="flex mt-10 w-4/5 bg-gray-200 rounded">
      <ItemCount stock={maxQuantity} handleAdd={handleAdd} />
      <button
        onClick={() => handleCount("minus")}
        className="flex justify-center items-center p-2 w-2/5 h-full bg-gray-800 text-white"
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
        className="flex justify-center items-center p-2 w-2/5 h-full bg-gray-800 text-white"
      >
        +
      </button>
      <button
        onClick={() => handleAdd(count)}
        className=" bg-gray px-2 mx-4 my-2 rounded"
        disabled={currentStock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
