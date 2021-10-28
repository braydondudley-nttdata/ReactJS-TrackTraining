import { createStore, combineReducers } from 'redux'
import entriesReducer from '../reducers/entries.reducers';

export default () => {
  const combinedRFns = combineReducers({
    entries: entriesReducer,
  })
  const store = createStore(combinedRFns);
  return store
}