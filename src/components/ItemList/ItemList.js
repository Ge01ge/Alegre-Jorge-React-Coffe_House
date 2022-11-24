import Item from "../Item/Item";
import styles from "../ItemDetail/ItemDetail.module.scss";

const ItemList = ({ products }) => {
  return (

    //  className="flex justify-content-center align-items-center flex-wrap"
    
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
