import { Layout } from "../components/Layout";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Item from "../components/Item/Item";
import  CartContext  from "../components/Context/CartContext";
import { useCartContext } from "../components/Context/CartContext";

const CartView = () => {

  const {productsAdded, totalPrice} = useCartContext();

  console.log({productsAdded})

  if (productsAdded.length === 0) {
    return(
      <div>
        <p className="card-text px-2">No hay elementos en el carrito</p>
        {/* <Link className="navbar-brand" to='/'>
            Ir de Compras...
        </Link> */}
      </div>
    );
  }
 
  return (
    <Layout>
      <h1>Cart View</h1>

    </Layout>
  );
};

export default CartView;