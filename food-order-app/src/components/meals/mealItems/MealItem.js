import { useContext } from 'react'

import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`; //concats '$' with price string AND rounds price to 2 decimals

  const addToCartHandler = count => {
    cartCtx.AddItem({
      id: props.id,
      name: props.name,
      count: count,
      price: props.price //should be original price, not rounded value
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  )
}

export default MealItem
