

const Item = ({ product }) => {
  return (
    <div className="flex items-center justify-center gap-4">
    <div style={{BorderColor: 'black'}}>
      <h5 className="card-title" >{product.name}</h5>
      <img src={product.img}  alt={product.description} style={{width: '150px', height: '150px'}}/>
      <p className="card-text">{product.stock}</p>
      <p className="card-text">{product.price}</p>
    </div>
  </div>
    
  );
};

export default Item;
