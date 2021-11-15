import { createStore, combineReducers } from 'redux'
import entriesReducer from '../reducers/entries.reducers';
import modalsReducer from '../reducers/modals.reducers';
import { composeWithDevTools } from 'redux-devtools-extension'

export default () => {
  const combinedRFns = combineReducers({
    entries: entriesReducer,
    modals: modalsReducer
  })
  const store = createStore(combinedRFns, composeWithDevTools());
  return store
}