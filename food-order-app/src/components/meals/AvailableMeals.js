import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux";

import Card from '../ui/Card';
import MealItem from './mealItems/MealItem';
import classes from './AvailableMeals.module.css';
import DUMMY_MEALS from '../../assets/dummy-meals'

// const postHandler = () => {
//   axios.get('https://saga-quick-attempt-default-rtdb.firebaseio.com/')
// }

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchMeals = async () => {
    //   const response = await fetch(
    //     'https://saga-quick-attempt-default-rtdb.firebaseio.com/meals.json'
    //   );

    //   if (!response.ok) {
    //     throw new Error('Something went wrong!');
    //   }

    //   const responseData = await response.json();
    //   console.log(JSON.stringify(responseData))

    //   const loadedMeals = [];
    //   for (const key in responseData) {
    //     loadedMeals.push({
    //       id: key,
    //       name: responseData[key].name,
    //       description: responseData[key].description,
    //       price: responseData[key].price,
    //     });
    //   }

    //   setMeals(loadedMeals);
    //   setIsLoading(false);
    // };

    // fetchMeals().catch((error) => {
      
    //   setIsLoading(false);
    //   setHttpError(error.message);
    // });
    dispatch({type: 'FETCH_CART'})
  }, []);

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
