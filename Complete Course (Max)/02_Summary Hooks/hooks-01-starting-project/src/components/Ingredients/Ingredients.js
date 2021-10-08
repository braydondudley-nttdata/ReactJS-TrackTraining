import React, { useReducer, useEffect, useCallback, useMemo } from 'react'

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

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null };
    case 'RESPONSE':
      return { ...curHttpState, loading: false };
    case 'ERROR':
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      return { ...curHttpState, error: null };
    default:
      throw new Error('Should not be reached!');
  }
};

const Ingredients = () => {
  // ----- replaces ingredient states
  const [userIngredients, dispatchState] = useReducer(ingredientReducer, []);
            // const [userIngredients, setUserIngredients] = useState([]); // empty array because we know our state will be a list of ingredients

  // ----- replaces http states
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null
  });
            // const [isLoading, setIsLoading] = useState(false);
            // const [error, setError] = useState('');

  // ----- rendering check
  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  }, [userIngredients])

  // Callback
  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setUserIngredients(filteredIngredients)
    dispatchState({
      type: 'SET', 
      ingredients: filteredIngredients
    });
  }, []);

  // fetch POST
  const addIngredientHandler = useCallback(newIngredient => {
    dispatchHttp({type: 'SEND'}); // setIsLoading(true);
    fetch('https://react-hooks-project-f9b5a-default-rtdb.firebaseio.com/ingredients.json', {
        method: 'POST',
        body: JSON.stringify(newIngredient),
        headers: { 'Content-Type': 'application/json'},
      }
    ).then(response => {
      dispatchHttp({type: 'RESPONSE'}); // setIsLoading(false);
      return response.json();
    }).then(responseData => {
      dispatchState({type: 'ADD', ingredient:  {
        id: responseData.name, 
        ...newIngredient 
      }});
      // setUserIngredients(prevIngredients => [
      //     ...prevIngredients, 
      //     { id: responseData.name, ...newIngredient }
      // ]);
    });
  }, []);

  const removeIngredientHandler = useCallback(ingredientId => {
    dispatchHttp({type: 'SEND'}); //setIsLoading(true);
    // fetch DELETE
    fetch(`https://react-hooks-project-f9b5a-default-rtdb.firebaseio.com/ingredients/${ingredientId}.jon`, {
      method: 'DELETE',
    }).then(response => {
      dispatchHttp({type: 'RESPONSE'}); //setIsLoading(false);
      dispatchState({ type: 'DELETE', id: ingredientId });
    }).catch(error => {
      dispatchHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
    });
  }, []);

  const clearError = useCallback(() => {
    dispatchHttp({ type: 'CLEAR' });
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClear={clearError}>{httpState.error} </ErrorModal>}

      <IngredientForm onAddIngredient={addIngredientHandler} loading={httpState.loading}/>

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler}/>
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
