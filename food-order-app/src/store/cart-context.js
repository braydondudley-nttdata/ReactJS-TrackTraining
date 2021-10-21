import { createContext } from 'react'

const CartContext = createContext({
  items: [],
  amount: 0,
  AddItem: (item) => {},
  RemoveItem: (item) => {},
  ClearCart: () => {}
})

export default CartContext
