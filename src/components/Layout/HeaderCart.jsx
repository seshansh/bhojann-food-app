import React, { useContext, useEffect, useState } from "react";
import classes from './HeaderCart.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCart = (props) => {
    const [btnHighlighted, setBtnHighlighted] = useState(false);
    
    const cartCtx = useContext(CartContext);

    const numbOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0);

    const {items} = cartCtx;
    
    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnHighlighted(true);

        const timer = setTimeout(()=>{
            setBtnHighlighted(false);
        },300)
        
        return () => {
            clearTimeout(timer);
        };
    },[items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Cart</span>
        <span className={classes.badge}>{numbOfCartItems}</span>
    </button>
}

export default HeaderCart;