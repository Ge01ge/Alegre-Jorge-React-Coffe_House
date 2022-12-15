// import React from "react";
import React, { useState,useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext (CartContext);

export const CartContextProvider = ({ children }) => {
    const [productsAdded, setProductsAdded] = useState([]);

    console.log( productsAdded);

    function addItem(item, quantity) {
      const isAlreadyAdded = isInCart(item.id);
      if (isAlreadyAdded) {
        setProductsAdded((prevState) =>
          prevState.map((productAdded) =>
            productAdded.item.id === item.id
              ? {
                  ...productAdded,
                  quantityAdded: productAdded.quantityAdded + quantity,
                }
              : productAdded
          )
        );
      } else {
        setProductsAdded((prevState) =>
          prevState.concat({ item, quantityAdded: quantity })
        );
      }
    }
  
    function removeItem(itemId) {
      setProductsAdded((prevState) =>
        prevState.filter((product) => product.item.id !== itemId)
      );
    }
  
    function clear() {
      setProductsAdded([]);
    }
  
    function isInCart(itemId) {
      return Boolean(productsAdded.find((product) => product.item.id === itemId));
    }
  
    const totalPrice = () =>{
        return productsAdded.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => productsAdded.reduce((acumulador , productActual) => acumulador + productActual.quantity, 0);

    return (
      <CartContext.Provider
        value={{ addItem, removeItem, clear, isInCart, totalPrice, totalProducts, productsAdded }}
      >
        {children}
      </CartContext.Provider>
    );
  };

export default CartContext;