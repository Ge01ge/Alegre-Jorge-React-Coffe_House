
const Item = ({ product }) => {
    return (
      <div>
        <img src={product.img} className={styles.img} alt="Product" />
        <li>{product.name}</li>

        
      </div>
      
    );
  };
  
  export default Item;