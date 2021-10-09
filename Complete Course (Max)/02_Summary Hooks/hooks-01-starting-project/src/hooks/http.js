import { useReducer } from 'react'


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

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, {
      loading: false,
      error: null
    });

    fetch(`https://react-hooks-project-f9b5a-default-rtdb.firebaseio.com/ingredients/${ingredientId}.jon`, {
      method: 'DELETE',
    }).then(response => {
      dispatchHttp({type: 'RESPONSE'}); //setIsLoading(false);
      dispatchState({ type: 'DELETE', id: ingredientId });
    }).catch(error => {
      dispatchHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
    });
};

export default useHttp;