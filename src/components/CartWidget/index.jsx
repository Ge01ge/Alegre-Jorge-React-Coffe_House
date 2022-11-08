import React from "react";

import styles from "./CartIcon.module.css";

export const CartWidget = () =>{
    return (
        <i className="bi bi-cart-plus-fill pt-2 {styles.cart_icon}" ></i>
    );
    // style={{width: 100 !important, height: 100  !important,
    //     paddingTop: 50  !important,}}

}
export default CartWidget;