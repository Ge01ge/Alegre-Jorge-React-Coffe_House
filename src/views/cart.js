import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Layout } from "../components/Layout";
import CartContext from "../components/Context/CartContext";
import ItemCart from "../components/Item/ItemCart";

import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const CartView = () => {
  const navigate = useNavigate();
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const { productsAdded: items, clear, totalPrice } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };
 return (
    <Layout>
      <h1>Cart View</h1>

      <div className="flex flex-col max-w-[50%]">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl">No has agregado productos</h1>
            <Link className="navbar-brand" to="/">
              Ir de Compras...
            </Link>
          </div>
        ) : (
          <>
            {items.map((product) => (
              <ItemCart key={product.item.id} product={product} />
            ))}

            <p>total: {totalPrice()} </p>

            <button
          type="button"
          className="btn btn-dark px-4 mx-4 my-2"
          onClick={goToCheckout}
        >
          Finalizar Compra
          
        </button>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CartView;