// import { useState } from "react";

import Input from "../../ui/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  // const [pressed]

  const addMealHandler = () => {
    
  }

  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      }} />
      <button onClick={addMealHandler}>+ Add</button>
    </form>
  );
}

export default MealItemForm;
