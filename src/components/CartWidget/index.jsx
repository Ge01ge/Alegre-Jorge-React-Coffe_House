import React from "react";

import styles from "./CartIcon.module.scss";

export const CartWidget = () =>{
    return (
        <i className={`bi bi-cart-plus-fill pt-2 ${styles.cart_icon}`} ></i>
    );
    
}
export default CartWidget;