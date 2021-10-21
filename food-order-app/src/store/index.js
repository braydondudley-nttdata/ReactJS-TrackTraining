import { createStore } from 'redux';

const initialState = { btnIsHighlighted: false };

const animationReducer = (state = initialState, action) => {
  if (action.type === 'add_animation') {
    return {
      btnIsHighlighted: !state.btnIsHighlighted
    };
  }
  return state;
};

const store = createStore(animationReducer);

export default store;