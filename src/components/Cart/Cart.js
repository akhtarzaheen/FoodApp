import React, { useContext, useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const Cartctx = useContext(cartContext);
  const totalAmount = `$${Cartctx.totalAmount.toFixed(2)}`;
  const hasItems = Cartctx.item.length > 0;

  const CartItemRemoveHandler = (id) => {
    Cartctx.removeItem(id);
  };

  const CartItemAddHandler = (item) => {
    Cartctx.addItem({ ...item, amount: 1 });
  };
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {Cartctx.item.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          amount={item.amount}
          onRemove={CartItemRemoveHandler.bind(null, item.id)}
          onAdd={CartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const actionsBtn = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.closeCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.closeCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onClose={props.closeCart} />}
      {!isCheckout && actionsBtn}
    </Modal>
  );
};

export default Cart;
