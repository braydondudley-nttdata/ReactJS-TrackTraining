import { Fragment } from "react";

import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <Fragment>
      <div className={classes.modal}>{props.children}</div>
    </Fragment>
  );
}

export default Modal;
