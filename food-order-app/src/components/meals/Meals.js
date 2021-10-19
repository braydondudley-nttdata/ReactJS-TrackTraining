import React, { Fragment } from "react";

import Header from "../layout/Header";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

function Meals() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default Meals;
