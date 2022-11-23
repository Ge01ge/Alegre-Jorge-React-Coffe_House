import styles from "../ItemDetail/ItemDetail.module.scss";

const Item = ({ product }) => {
  return (

    // className={`d-inline-flex ${styles.espacio}`}
   
    <div className={`d-inline-flex ${styles.espacio}`}>
      <div className={`col-md-4 ${styles.cart1}`}>
        <div className="card col-md-8 border border-dark bg-warning text-dark bg-opacity-10">
          <h5 className="card-title px-2">{product.name}</h5>
          <img
            src={product.img}
            alt={product.description}
            className={`mx-auto ${styles.img1}`}
          />
          <p className="card-text px-2">En Stock: {product.stock} Unidades</p>
          <p className="card-text px-2">Precio: ${product.price}</p>
          <button type="button" className="btn btn-dark px-4 mx-4 my-2">
            Ver Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
