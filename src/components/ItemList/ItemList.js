import Item from "../Item/Item";
import styles from "./ItemList.module.scss";

const ItemList = ({ products }) => {
  return (

  
    
    <div className=" container-fluid mx-auto ">
      <div className={` ${styles.listcontainer}`}>
    {products.map((product) => (
    <Item key={product.id} product={product} />
    ))}
    
    </div>
    </div>
    
  );
  }; 

export default ItemList;
