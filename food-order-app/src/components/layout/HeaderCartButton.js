import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import CartButtonContext from '../../store/cart-button-context'
import CartContext from '../../store/cart-context'


function HeaderCartButton(props) {
  // const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartBtnCtx = useContext(CartButtonContext);
  const cartCtx = useContext(CartContext);

  const dispatch = useDispatch();
  const btnHighlighted = useSelector((state) => state.btnIsHighlighted);
  if (btnHighlighted === null) btnHighlighted = false;

  // const action = (type, payload) => {
  //   if (payload !== null) {
  //     dispatch({type, payload})
  //   } else {
  //     dispatch({type})
  //   }
  // }

  const { items } = cartCtx // abstracts ONLY the 'items' property inside the cartCtx object


  const highlightHandler = () => {
    // dispatch({ type: 'OPEN_CART', payload: items });
    cartBtnCtx.setCartIsOpen()
  };

  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount
  }, 0);

  // console.log(JSON.stringify(cartBtnCtx))
  
  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    dispatch({type: 'UPDATE_CART'})
  }, [items]);

  return (
    <div>
      <button className={btnClasses} onClick={highlightHandler}>
        <span className={classes.icon}>
          <CartIcon/>
        </span>
        <span>
          Your Cart
        </span>
        <span className={classes.badge}>
          {numberOfCartItems}
        </span>
      </button>
    </div>
  );
}

export default HeaderCartButton;


// import { useContext, useEffect, useState, useDispatch, useSelector } from "react";
// import CartIcon from "../cart/CartIcon";

// import classes from "./HeaderCartButton.module.css";
// import CartButtonContext from '../../store/cart-button-context'
// import CartContext from '../../store/cart-context'

// function HeaderCartButton(props) {
//   const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
//   const cartBtnCtx = useContext(CartButtonContext);
//   const cartCtx = useContext(CartContext);

//   // const dispatch = useDispatch();
//   // const counter = useSelector((state) => state.btnIsHighlighted);
//   // const show = useSelector((state) => state.showCounter);

//   const { items } = cartCtx // abstracts ONLY the 'items' property inside the cartCtx object

//   const highlightHandler = () => {
//     // dispatch({ type: 'ADD_ANIM' });
//     cartBtnCtx.setCartIsOpen()
//   };

//   const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
//     return curr + item.amount
//   }, 0);

//   // console.log(JSON.stringify(cartBtnCtx))
  
//   const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

//   useEffect(() => {
//     if (items.length === 0) {
//       return;
//     }
//     setBtnIsHighlighted(true);

//     const timer = setTimeout(() => {
//       setBtnIsHighlighted(false);
//     }, 300);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [items]);

//   return (
//     <div>
//       <button className={btnClasses} onClick={highlightHandler}>
//         <span className={classes.icon}>
//           <CartIcon/>
//         </span>
//         <span>
//           Your Cart
//         </span>
//         <span className={classes.badge}>
//           {numberOfCartItems}
//         </span>
//       </button>
//     </div>
//   );
// }

// export default HeaderCartButton;
