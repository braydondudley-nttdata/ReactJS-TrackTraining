import React, { Fragment, useEffect, useContext } from "react";
import { useDispatch } from 'react-redux'

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import CartContext from '../../store/cart-context'

function Meals() {
  const dispatch = useDispatch();
  const cartCtx = useContext(CartContext)

  useEffect(() => {
    dispatch({type: 'POST_CART', payload: cartCtx})
  }, [cartCtx])

  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default Meals;
