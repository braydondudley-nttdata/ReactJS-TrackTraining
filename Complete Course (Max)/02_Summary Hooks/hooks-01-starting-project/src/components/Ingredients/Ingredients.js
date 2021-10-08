import React, { useReducer, useState, useEffect, useCallback } from 'react'

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients; // list of ingredients to replace the old list
    case 'ADD':
      return [...currentIngredients, action.ingredient]; //singular
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('ERROR: Should not get there!');
  }
}

// const httpReducer = (httpState, action) => { //(oldState, action getting)
//   // think about what actions you'll have for your https requests
//   switch (action.type) {
//     case 'SEND':
//       return {};
//     case 'RESPONSE':
//       return {};
//     case 'ERROR':
//       return {};
//     default:
//       throw new Error('Should not be reached')
//   }

// }

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  // const [userIngredients, setUserIngredients] = useState([]); // empty array because we know our state will be a list of ingredients
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // rendering check
  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  }, [userIngredients])

  // Callback
  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setUserIngredients(filteredIngredients)
    dispatch({
      type: 'SET', 
      ingredients: filteredIngredients
    });
  }, []);

  // fetch POST
  const addIngredientHandler = newIngredient => {
    setIsLoading(true);
    fetch('https://react-hooks-project-f9b5a-default-rtdb.firebaseio.com/ingredients.json', {
        method: 'POST',
        body: JSON.stringify(newIngredient),
        headers: { 'Content-Type': 'application/json'},
      }
    ).then(response => {
      setIsLoading(false);
      return response.json();
    }).then(responseData => {
      // setUserIngredients(prevIngredients => [
      //     ...prevIngredients, 
      //     { id: responseData.name, ...newIngredient }
      // ]);
      dispatch({type: 'ADD', ingredient:  {
        id: responseData.name, 
        ...newIngredient 
      }});
    });
  };

  const removeIngredientHandler = ingredientId => {
    setIsLoading(true);
    // fetch DELETE
    fetch(`https://react-hooks-project-f9b5a-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
    }).then(response => {
      setIsLoading(false);
      // setUserIngredients(prevIngredients => 
      //   prevIngredients.filter(currIngredient => currIngredient.id !== ingredientId)
      // );
      dispatch({ type: 'DELETE', id: ingredientId })
    }).catch(error => {
      setError('ERROR: Removal Response was not accepted');
    });
  };

  const clearError = () => {
    setError(null);
    setIsLoading(false);
  }

  return (
    <div className="App">
      {error && <ErrorModal onClear={clearError}>{error} </ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading}/>

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
