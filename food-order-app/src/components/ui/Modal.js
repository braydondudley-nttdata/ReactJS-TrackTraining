import { Fragment, useContext } from "react";
import ReactDOM from 'react-dom';

import CartButtonContext from '../../store/cart-button-context'
import classes from "./Modal.module.css";

const Backdrop = props => {
  const cardBtnCtx = useContext(CartButtonContext);
  
  return <div className={classes.backdrop} onClick={cardBtnCtx.setCartIsOpen}/>;
}

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
