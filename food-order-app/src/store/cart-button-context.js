import { createContext } from 'react'

const CartButtonContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: (isOpen) => {},
  openCart: () => {},
  closeCart: () => {}
})

export default CartButtonContext
