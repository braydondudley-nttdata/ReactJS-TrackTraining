import React from 'react'

import classes from "./Cart.module.css";

function Cart() {
  const listItems = <ul className={classes['cart-items']}>{
    [
      {id: 'c1', name: 'Bob', amount: 3, price: 12.99},
    ].map(item => <li>{item.name}</li>)
  }</ul>

  return (
    <div>
      {listItems}
      <div className={classes.total}>
        <span>abc</span>
        <span>36.72</span>
      </div>
      <div></div>
    </div>
  )
}

export default Cart
