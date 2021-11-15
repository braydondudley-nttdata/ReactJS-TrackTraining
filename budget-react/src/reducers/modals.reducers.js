// reducer can take in current state and action (payload carried from dispatch)
export default (state = { isOpen: false }, action) => {
  switch (action.type) {
    case "OPEN_EDIT_MODAL":
      return { ...state, isOpen: true, id: action.payload.id };
    case "CLOSE_EDIT_MODAL":
      return { ...state, isOpen: false, id: null };
    default:
      return state;
  }
};
