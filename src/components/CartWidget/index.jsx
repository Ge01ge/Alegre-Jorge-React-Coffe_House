import React from "react";

import styles from "./CartIcon.module.scss";
import { useCartContext } from "../Context/CartContext";



// barra vertical: alt + 124 => | 
export const CartWidget = () =>{
    const {totalProducts} = useCartContext();
    return (
        <span >
        <i className={`bi bi-cart-plus-fill pt-2 ${styles.cart_icon}`} ></i>
        <span className={`${styles.contador_carrito}`}>{totalProducts() || ''}</span>
        </span>
        
    );
    
}
export default CartWidget;