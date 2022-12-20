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

  const order = {
    buyer: { name: "Jorge", phone: "123", email: "a@asas.com" },
    items:items.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
    // items,
    // total,
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");

  addDoc(ordersCollection, order)
    .then(() => {
      setUpdatingProducts(true);
    })
    .catch((err) => console.error({ err }))
    .finally(() => {});

  // Ctrl + el clic en donde quiero en la palabra q quiero que me redireccione

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            // setIsLoading(false);
            alert("Compra finalizada");
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatingProducts]);


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
