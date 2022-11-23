import Item from "../Item/Item";
// import styles from "../ItemDetail/ItemDetail.module.scss";

const ItemList = ({ products }) => {
  return (

    // className={` ${styles.listContainer}`}
    <ul className="flex justify-content-start align-items-center flex-wrap" >
    {products.map((product) => (
    <Item key={product.id} product={product} />
    ))}
    
    </ul>
  );
  }; 

export default ItemList;
