import { useContext, } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Layout } from "../components/Layout";
import CartContext from "../components/Context/CartContext";
import ItemCart from "../components/Item/ItemCart";
import styles from "./views.module.scss";

// import {
//   addDoc,
//   collection,
//   doc,
//   getFirestore,
//   updateDoc,
// } from "firebase/firestore";

const CartView = () => {
  const navigate = useNavigate();
  // const [updatingProducts, setUpdatingProducts] = useState(false);
  const { productsAdded: items, totalPrice } = useContext(CartContext);

  const goToCheckout = () => {
    navigate("/checkout");
  };
 return (
    <Layout>

      <div className="flex flex-col max-w-[50%]">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl px-4 py-2">No has agregado productos</h1>
            <Link className={`fs-5 text-decoration-none ${styles.margin2}`} to="/">
              Ir de Compras...✔️
            </Link>
          </div>
        ) : (
          <>
            {items.map((product) => (
              <ItemCart key={product.item.id} product={product} />
            ))}

            <p className={`fs-4 px-4 my-2 ${styles.margin1}`}> 
            <span className={`fw-bold`}>Total:</span> ${totalPrice()} </p>

            <button
          type="button"
          className={`btn btn-dark px-4 ${styles.margin2}`}
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