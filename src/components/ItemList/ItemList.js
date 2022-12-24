import Item from "../Item/Item";
import styles from "./ItemList.module.scss";

const ItemList = ({ products }) => {
  return (
    <div className=" container-fluid row">
      <div className={`${styles.listContainer}`}>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
