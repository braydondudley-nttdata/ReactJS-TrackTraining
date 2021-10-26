import { useContext } from 'react';
import { createStore } from 'redux';
// import CartButtonContext from './cart-button-context'
// const cartBtnCtx = useContext(CartButtonContext);
// cartBtnCtx.setCartIsOpen()

const initialState = { btnIsHighlighted: false };

export const AnimationReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_BTN_TRUE':
      return { btnIsHighlighted: true }
    case 'SET_BTN_FALSE':
      return { btnIsHighlighted: false }
    // case 'OPEN_CART':
    //   cartBtnCtx.setCartIsOpen()
    //   return state
    default:
      return state
  }
  // if (action.type === 'ADD_ANIM') {
  //   return {
  //     btnIsHighlighted: !state.btnIsHighlighted
  //   };
  // }
  // return state;
};

const store = createStore(AnimationReducer);

export default store;