import { useRef, useState } from "react";

import Input from "../../ui/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; // used to test validity AND updates total count in reducer

    console.log('entered: ' + enteredAmount) // --debug

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }
    
    props.onAddToCart(enteredAmountNumber); // Calls function in MealItem.js that updates state information to cart context
  }

  // NOTE: button in form will automatically trigger onSubmit 
  // (no need to add onClick event, and also need to preventDefault refresh on submission)
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input 
        ref={amountInputRef}
        label="Amount" 
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }
      } />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (range: 1-5).</p>}
    </form>
  );
}

export default MealItemForm;
