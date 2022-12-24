import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import CartContext from "../components/Context/CartContext";

// firebase
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const CheckoutView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const { productsAdded, items, clear, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  //   const getTotalByProduct = (quantity, price) => {
  //     return quantity * price;
  //   };

  const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;

    setIsLoading(true);

    // const order = {
    //   buyer: { name, phone, email },
    //   items: productsAdded.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
    //   total: totalPrice(),
    // //   items,
    // //   total,
    // };

    const order = {
      buyer: { name, phone, email },
      items: productsAdded,
      total: totalPrice(),
    };
    console.log(order);
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      productsAdded.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
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
      <div className="container py-2">
        <form onSubmit={handleFinalizePurchase}>
          <div class="mb-3">
            <input
              className="form-control rounded-md"
              placeholder="Nombre Completo"
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control rounded-md"
              placeholder="Numero de Telefono"
              type="number"
              required
            />
          </div>
          <div className="mb-3 ">
            <input
              className="form-control rounded-md"
              placeholder="Email"
              type={"email"}
              required
            />
          </div>
          <div className=" mb-3 ">
            <span className=" py-2">
              Total a pagar: <strong>${totalPrice()}</strong>
            </span>
          </div>
          <button
            type="submit"
            className=" btn btn-dark text-white disabled:opacity-50 p-2"
            disabled={isLoading}
          >
            Finalizar
          </button>
        </form>

      </div>
    </Layout>
  );
};

export default CheckoutView;
