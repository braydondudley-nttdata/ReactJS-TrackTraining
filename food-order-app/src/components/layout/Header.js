import { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

function Header() {

  const openCartHandler = () => {
    // Redirect or useHistory to change url page???
    
  }

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={openCartHandler}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='img title'/>
      </div>
    </Fragment>
  );
}

export default Header;
