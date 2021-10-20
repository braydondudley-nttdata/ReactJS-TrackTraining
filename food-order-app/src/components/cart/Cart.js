import { useContext } from 'react'

import Modal from '../ui/Modal';
import classes from "./Cart.module.css";
import CartButtonContext from '../../store/cart-button-context'

function Cart(props) {
  const cartBtnCtx = useContext(CartButtonContext);

  const listItems = <ul className={classes['cart-items']}>{
    [
      {id: 'c1', name: 'Bob', amount: 3, price: 12.99},
    ].map(item => <li key={item.id}>{item.name}</li>)
  }</ul>

  return (
    <Modal onClose={props.onClose}>
      {listItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.72</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={cartBtnCtx.setCartIsOpen}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
