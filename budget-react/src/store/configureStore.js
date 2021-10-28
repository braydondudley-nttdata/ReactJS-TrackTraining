import { createStore, combineReducers } from 'redux'
import entriesReducers from '../reducers/entries.reducers';

export default () => {
  const combinedRFns = combineReducers({
    entries: entriesReducer,
  })
  const store = createStore(combinedRFns);
  return store
}