import { useContext } from "react";
import CartIcon from "../cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import CartButtonContext from '../../store/cart-button-context'

function HeaderCartButton(props) {
  const cartBtnCtx = useContext(CartButtonContext);

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
          3
        </span>
      </button>
    </div>
  );
}

export default HeaderCartButton;
