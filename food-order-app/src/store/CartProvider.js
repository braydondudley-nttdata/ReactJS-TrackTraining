import { useState, useReducer } from 'react'
import { useHistory } from 'react-router-dom';

import CartButtonContext from './cart-button-context'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {

  // ---- ADD action ----
  if (action.type === 'ADD') {
    // update total amount with curr + (new price * new amount)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount //update amount to current + added amount by action
      };
      updatedItems = [...state.items]; // init to current state of items
      updatedItems[existingCartItemIndex] = updatedItem; // fill in final slot with newly added item
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  // ---- REMOVE action ----
  if (action.type === 'REMOVE') {

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    // Update Amount
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    // Update Items
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  // ---- CLEAR action ----
  if (action.type === 'CLEAR') {
    return defaultCartState;
  }

  return defaultCartState;
}

// const animationReducer = (state, action) => {

//   // ---- ADD action ----
//   if (action.type === 'ADD') {

//   }
//   return defaultCartState;
// }

const CartProvider = (props) => {
  const history = useHistory();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  // const [itemList, setItemList] = useState({
  //   id: '',
  //   name: '',
  //   description: '',
  //   price: 0,
  // });

  const openCartHandler = () => {
    console.log("openCart hit")
    setCartIsOpen(true);
    history.push('/cart');
  }

  const closeCartHandler = () => {
    console.log("closeCart hit")
    setCartIsOpen(false);
    history.push('/meals');
  }

  const cartBtnCtx = {
    cartIsOpen: cartIsOpen,
    setCartIsOpen: cartIsOpen ? closeCartHandler : openCartHandler,
    openCart: openCartHandler,
    closeCart: closeCartHandler
  }

  const AddItemToCartHandler = (item) => {
    console.log('add item')
    dispatchCartAction({type: 'ADD', item: item});
  }

  const RemoveItemFromCartHandler = (id) => {
    console.log('remove item')
    dispatchCartAction({type: 'REMOVE', id: id});
  }

  const clearCartHandler = () => {
    console.log('clear items')
    dispatchCartAction({type: 'CLEAR'});
  };

  const cartCtx = {
    items: cartState.items,
    amount: cartState.amount,
    AddItem: AddItemToCartHandler,
    RemoveItem: RemoveItemFromCartHandler,
    ClearCart: clearCartHandler, 
  }

  return (
    <CartButtonContext.Provider value={cartBtnCtx}>
      <CartContext.Provider value={cartCtx}>
        {props.children}
      </CartContext.Provider>
    </CartButtonContext.Provider>
  )
}

export default CartProvider
