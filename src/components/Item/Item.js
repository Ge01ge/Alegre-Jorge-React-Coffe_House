import { useNavigate } from "react-router-dom";
import styles from "../ItemDetail/ItemDetail.module.scss";

const Item = ({ product }) => {

  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  return (

    <div className={`d-inline-flex ${styles.espacio}`}>
      <div className={` ${styles.cart1}`}>
        <div className="card border border-dark bg-warning text-dark bg-opacity-10">
          <h5 className={`card-title p-2 ${styles.carText}`}>{product.name}</h5>
          <img
            src={product.img}
            alt={product.description}
            className={`mx-auto ${styles.img1}`}
          />
          <p className="card-text px-2">En Stock: {product.stock} Unidades</p>
          <p className="card-text px-2">Precio: ${product.price}</p>
          <button type="button" className="btn btn-dark px-4 mx-4 my-2" onClick={handleNavigate}>
          {/* className="flex flex-col w-[200px] h-[350px] bg-white rounded p-4 shadow cursor-pointer transition-all hover:shadow-lg" */}
            Ver Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
