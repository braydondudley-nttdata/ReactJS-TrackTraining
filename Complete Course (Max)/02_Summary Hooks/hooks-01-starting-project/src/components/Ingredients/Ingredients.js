import React, { useState } from 'react'

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]); // empty array because we know our state will be a list of ingredients

  const addIngredientHandler = newIngredient => {
    setUserIngredients(prevIngredients => [
        ...prevIngredients, 
        { id: Math.random().toString(), ...newIngredient }
    ]);
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
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
