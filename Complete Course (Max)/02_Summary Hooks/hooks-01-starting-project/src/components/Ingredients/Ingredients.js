import React, { useState, useEffect, useCallback } from 'react'

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]); // empty array because we know our state will be a list of ingredients

  // fetch GET
  useEffect(() => {
    fetch('https://react-hooks-project-f9b5a-default-rtdb.firebaseio.com/ingredients.json')
    .then(response => response.json())
    .then(responseData => {
      const loadedIngredients = [] // 1. initialize retrieved ingredient list
      for (const key in responseData) { // 2. update ingredient list with every found entry
        loadedIngredients.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount
        });
      };
      setUserIngredients(loadedIngredients); // 3. set state ONCE only after retrieving fetched list
    });
  }, []);

  // rendering check
  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  }, [userIngredients])

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients)
  }, []);

  // fetch POST
  const addIngredientHandler = newIngredient => {
    fetch('https://react-hooks-project-f9b5a-default-rtdb.firebaseio.com/ingredients.json', {
        method: 'POST',
        body: JSON.stringify(newIngredient),
        headers: { 'Content-Type': 'application/json'},
      }
    ).then(response => {
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevIngredients => [
          ...prevIngredients, 
          { id: responseData.name, ...newIngredient }
      ]);
    });
  };

  const removeIngredientHandler = ingredientId => {
    setUserIngredients(prevIngredients => 
        prevIngredients.filter(currIngredient => currIngredient.id !== ingredientId)
      );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
