import React from "react";

import styles from "./CartIcon.module.scss";
import { useCartContext } from "../Context/CartContext";



// barra vertical: alt + 124 => | 
export const CartWidget = () =>{
    const {totalProducts} = useCartContext();
    return (
        <>
        <i className={`bi bi-cart-plus-fill pt-2 ${styles.cart_icon}`} ></i>
        <span>{totalProducts() || ''}</span>
        </>
        
    );
    
}
export default CartWidget;