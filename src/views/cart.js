import { Layout } from "../components/Layout";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Item from "../components/Item/Item";
import  CartContext  from "../components/Context/CartContext";
import { useCartContext } from "../components/Context/CartContext";
import { TrashWidget } from "../components/TrashWidget"; 

const CartView = () => {

  // const {productsAdded, totalPrice} = useCartContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { productsAdded, clear,totalPrice } = useContext(CartContext);

  const handleFinalizePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
      clear();
      setIsLoading(false);
      alert("Compra finalizada");
      navigate("/");
    }, 2000);
  };


  // if (productsAdded.length === 0) {
  //   return(
  //     <div>
  //       <p className="card-text px-2">No hay elementos en el carrito</p>
  //       <Link className="navbar-brand" to='/'>
  //           Ir de Compras...
  //       </Link>
  //     </div>
  //   );
  // }
 
  return (
    <Layout>
      <h1>Cart View</h1>

      <div className="flex flex-col max-w-[50%]">
        {productsAdded.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            {/* <img src={EmptyCart} alt="Empty Cart" className="w-44 h-44" /> */}
            <h1 className="text-2xl">No has agregado productos</h1>
            <Link className="navbar-brand" to='/'>
              Ir de Compras...
            </Link>
          </div>
        ) : (
          <div>
            <div className="flex gap-4">
              {productsAdded.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div className="relative">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end mt-4">
              {/* {isLoading ? (
                <Loading size="50px" />
              ) : 
              (
                <button
                  onClick={handleFinalizePurchase}
                  className="rounded-lg p-2 bg-gray-800 text-white"
                >
                  Finalizar Compra
                </button>
              )} */}
              <button
                  onClick={handleFinalizePurchase}
                  className="rounded-lg p-2 bg-gray-800 text-black"
                >
                  Finalizar Compra
                </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;