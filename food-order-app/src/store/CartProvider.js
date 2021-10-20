import { useState } from 'react'
import CartButtonContext from './cart-button-context'
// import CartContext from './cart-context'

const CartProvider = (props) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
    console.log("openCart hit")
  }

  const closeCartHandler = () => {
    setCartIsOpen(false);
    console.log("closeCart hit")
  }

  const cartCtx = {
    cartIsOpen: cartIsOpen,
    setCartIsOpen: cartIsOpen ? closeCartHandler : openCartHandler
  }

  return (
    <CartButtonContext.Provider value={cartCtx}>
      {props.children}
    </CartButtonContext.Provider>
  )
}

export default CartProvider
