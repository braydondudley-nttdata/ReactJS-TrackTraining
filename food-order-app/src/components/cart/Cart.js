import { Fragment, useContext, useState } from 'react'

import Modal from '../ui/Modal';
import CartItem from './CartItem';
import classes from "./Cart.module.css";
import CartButtonContext from '../../store/cart-button-context'
import CartContext from '../../store/cart-context'
import Checkout from './Checkout';

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartBtnCtx = useContext(CartButtonContext);
  const cartCtx = useContext(CartContext);

  // console.log(JSON.stringify(cartCtx)) // --debugging to see contents of cart

  // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.RemoveItem(id);
  };
  
  const cartItemAddHandler = (item) => {
    cartCtx.AddItem({ ...item, amount: 1 });
  };
 
  const orderHandler = () => {
    setIsCheckout(true);

    // const isValid = true;
    // if (isValid) {
    //   console.log("order submitted")
    //   cartBtnCtx.setCartIsOpen()
    // }
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch('https://saga-quick-attempt-default-rtdb.firebaseio.com/', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    })
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.ClearCart();
  }

  const listItems = <ul className={classes['cart-items']}>{
    cartCtx.items.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    ))
  }</ul>

  // [{
  //   id: 'c1', 
  //   name: 'Bob', 
  //   amount: 3, 
  //   price: 12.99,
  //   onRemove={cartItemRemoveHandler.bind(null, item.id)},
  //   onAdd={cartItemAddHandler.bind(null, item)}
  // }].map(item => <li key={item.id}>{item.name}</li>)

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={cartBtnCtx.setCartIsOpen}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <Fragment>
      {listItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
      <button className={classes.button} onClick={cartBtnCtx.setCartIsOpen}>
        Close
      </button>
    </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}

export default Cart
