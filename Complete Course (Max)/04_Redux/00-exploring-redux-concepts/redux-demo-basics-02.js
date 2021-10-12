const redux = require('redux');

// check for operations and perform appropriate changes to return to store
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return { counter: state.counter + 1};
    } 
    if (action.type === 'decrement') {
        return { counter: state.counter - 1};
    }
    return state;
}

// create store and connect reducer function
const store = redux.createStore(counterReducer);

// something that wants to subscribe and use store data
const counterSubscriber = () => {
    const latestSnapshot = store.getState();
    console.log(latestSnapshot);
}

// subscribe to store
store.subscribe(counterSubscriber);

// dispatch different types of operations
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });