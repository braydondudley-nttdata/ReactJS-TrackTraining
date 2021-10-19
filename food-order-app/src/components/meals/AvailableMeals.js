import React from 'react'

import Card from '../ui/Card';
import MealItem from './mealItems/MealItem';
import classes from './AvailableMeals.module.css';
import DUMMY_MEALS from '../../assets/dummy-meals'

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((item) =>
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  )

  return (
    <div>
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    </div>
  )
}

export default AvailableMeals
