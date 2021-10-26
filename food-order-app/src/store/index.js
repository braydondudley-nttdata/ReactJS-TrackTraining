import { useContext } from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

// import CartButtonContext from './cart-button-context'
// const cartBtnCtx = useContext(CartButtonContext);
// cartBtnCtx.setCartIsOpen()

import rootSaga from '../sagas/root'

const initialState = { btnIsHighlighted: false };

export const AnimationReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_BTN_TRUE':
      console.log("true")
      return { btnIsHighlighted: true }
    case 'SET_BTN_FALSE':
      console.log("false")
      return { btnIsHighlighted: false }
    case 'UPDATE_CART':
    //   cartBtnCtx.setCartIsOpen()
      return state
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

const sagaMiddleware = createSagaMiddleware();
const store = createStore(AnimationReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store;