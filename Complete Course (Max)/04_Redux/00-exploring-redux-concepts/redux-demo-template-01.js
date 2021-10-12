// ---- Very Basic Redux Format Setup ----
// (run 'node redux-demo-template-01.js' to test this)


const redux = require('redux'); // import redux

// 1) setup reducer function to talk to and change data in redux Store
const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter: state.counter + 1, // uses previous state snapshot and increments total reducer calls by 1
    };
}

// 2) create redux's Central Data Store (pass in our reducer function to connect it)
const store = redux.createStore(counterReducer);

// 2.5) something that's subscribed to Store (normally will be our components in React)
const counterSubscriber = () => {
    const latestSnapshot = store.getState();
    console.log(latestSnapshot);
}

// 3) subscribe to Store
store.subscribe(counterSubscriber);

// 4) dispatch an action (tell what type of operation to perform)
store.dispatch({ type: 'increment' });