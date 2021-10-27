// import { useContext, Fragment } from "react";
import { Fragment } from "react";
import axios from 'axios'

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
// import CartContext from '../../store/cart-context'

function Header(props) {

  // const openCartHandler = () => {
  //   // Redirect or useHistory to change url page???
  //   props.open
  // }
  const postHandler = () => {
    const mealcount = axios.get('https://saga-quick-attempt-default-rtdb.firebaseio.com/mealcount.json')
    console.log(JSON.stringify(mealcount))
  }
  // async function postHandler({ id, description }) {
  //   await axios.post('https://saga-quick-attempt-default-rtdb.firebaseio.com/', {
  //     id,
  //     description,
  //   });
  // }

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button onClick={() => postHandler}>Temp button</button>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt='meals image'/>
      </div>
    </Fragment>
  );
}

export default Header;
