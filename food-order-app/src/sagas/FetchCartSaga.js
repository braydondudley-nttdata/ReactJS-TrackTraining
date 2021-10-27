import { call, put, take } from 'redux-saga/effects';
import fetchMeals from './fetchMeals';
import postMeals from './postMeals';

const mealUrl = 'https://saga-quick-attempt-default-rtdb.firebaseio.com/meals.json';
const cartUrl = 'https://saga-quick-attempt-default-rtdb.firebaseio.com/cart.json';

export function* fetchCart(action) {
  const jsonResponse = yield call(fetchMeals, cartUrl)
  console.log("Saga: ")
  console.log(JSON.stringify(jsonResponse))
  // yield put({type: 'UPDATE_ITEMS'}) // Update current cart with jsonResponse!!
}

export function* postCart(action) {
  const jsonResponse = yield call(postMeals, cartUrl, action.payload)
  console.log("Post: ")
  console.log(JSON.stringify(jsonResponse))
}
