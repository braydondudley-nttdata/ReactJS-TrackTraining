import { useContext } from "react";
import CartIcon from "../cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import CartButtonContext from '../../store/cart-button-context'
import CartContext from '../../store/cart-context'

function HeaderCartButton(props) {
  const cartBtnCtx = useContext(CartButtonContext);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.count
  }, 0);

  return (
    <div>
      <button className={classes.button} onClick={cartBtnCtx.setCartIsOpen}>
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
