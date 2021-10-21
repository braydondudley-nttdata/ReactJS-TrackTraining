import { useContext, useEffect, useState, useDispatch, useSelector } from "react";
import CartIcon from "../cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import CartButtonContext from '../../store/cart-button-context'
import CartContext from '../../store/cart-context'

function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartBtnCtx = useContext(CartButtonContext);
  const cartCtx = useContext(CartContext);

  // const dispatch = useDispatch();
  // const counter = useSelector((state) => state.btnIsHighlighted);
  // const show = useSelector((state) => state.showCounter);

  const highlightHandler = () => {
    // dispatch({ type: 'add_animation' });
    cartBtnCtx.setCartIsOpen()
  };

  const { items } = cartCtx // abstracts ONLY the 'items' property inside the cartCtx object

  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount
  }, 0);

  // console.log(JSON.stringify(cartBtnCtx))
  
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
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
