import { Layout } from "../components/Layout";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Item from "../components/Item/Item";
import  CartContext  from "../components/Context/CartContext";
import { useCartContext } from "../components/Context/CartContext";
import { TrashWidget } from "../components/TrashWidget"; 
import ItemCart from "../components/Item/ItemCart";

const CartView = () => {

  // const {productsAdded, totalPrice} = useCartContext();
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { productsAdded, clear, totalPrice, totalProducts } = useContext(CartContext);

  // Ctrl + el clic en donde quiero en la palabra q quiero que me redireccione

  return (
    <Layout>
      <h1>Cart View</h1>
      
      <div className="flex flex-col max-w-[50%]">
        {productsAdded.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl">No has agregado productos</h1>
            <Link className="navbar-brand" to='/'>
              Ir de Compras...
            </Link>
          </div>
        ) : (
            
          <>
          <p>lalaal </p>
           
             {productsAdded.map(product => < ItemCart key={product.item.id} product={product}/>)}

             <p>total: {totalPrice()} </p>
            </>
            
        )}
      </div>
    </Layout>
  );
};

export default CartView;