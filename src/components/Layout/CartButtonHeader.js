import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButtonHeader.module.css";

const CartButtonHeader = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButtonHeader;
