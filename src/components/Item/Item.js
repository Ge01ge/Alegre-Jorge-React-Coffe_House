import { useNavigate } from "react-router-dom";
import styles from "../ItemDetail/ItemDetail.module.scss";

const Item = ({ product, quantityAdded }) => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  return (
    <div className={` ${styles.espacio}`}>
      <div className={` ${styles.cart1}`}>
        <div className={`card bg-warning bg-opacity-10 ${styles.mb}`}>
          <h5 className={`card-title p-2 ${styles.carText}`}>{product.name}</h5>
          <img
            src={product.img}
            alt={product.description}
            className={`mx-auto ${styles.img1}`}
          />

          <span
            className={product.stock === 0 ? "fs-5 text-danger px-4 py-2 mx-auto my-2 border border-danger rounded bg-light" : "fs-5 text-success px-4 py-2 mx-auto my-2 border border-success rounded bg-light" }
          >
            {product.stock === 0
              ? "Sin Stock"
              : quantityAdded
              ? `Agregados: ${quantityAdded}`
              : `En Stock: ${product.stock}`}
          </span>

          <p className="card-text  text-white px-2">Precio: ${product.price}</p>
          
          <button
            type="button"
            className="btn btn-dark px-4 mx-2 mb-2"
            onClick={handleNavigate}
          >
            Ver Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
