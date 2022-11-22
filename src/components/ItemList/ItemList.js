import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
  <ul className="flex items-center justify-center gap-4">
  {products.map((product) => (
  <Item key={product.id} product={product} />
  ))}
  
  </ul>
  );
  }; 

export default ItemList;
