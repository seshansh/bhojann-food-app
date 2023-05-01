import React from "react";
import './HeaderCart.css';
import CartIcon from "../Cart/CartIcon";

const HeaderCart = () => {
    return <button className="cart_button">
        <span className="cart_icon">
            <CartIcon />
        </span>
        <span>Cart</span>
        <span className="cart_badge">4</span>
    </button>
}

export default HeaderCart;