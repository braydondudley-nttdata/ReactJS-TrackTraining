import { useContext } from 'react'

import Modal from '../ui/Modal';
import CartItem from './CartItem';
import classes from "./Cart.module.css";
import CartButtonContext from '../../store/cart-button-context'
import CartContext from '../../store/cart-context'

function Cart(props) {
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

  const onOrderHandler = () => {
    const isValid = true;
    if (isValid) {
      console.log("order submitted")
      cartBtnCtx.setCartIsOpen()
    }
  }

  return (
    <Modal onClose={props.onClose}>
      {listItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={cartBtnCtx.setCartIsOpen}>Close</button>
        {hasItems && <button className={classes.button} onClick={onOrderHandler}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
