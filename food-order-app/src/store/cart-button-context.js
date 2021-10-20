import { createContext } from 'react'

const CartButtonContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: (isOpen) => {}
})

export default CartButtonContext
