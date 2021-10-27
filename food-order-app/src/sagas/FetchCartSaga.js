import { call, put, take } from 'redux-saga/effects';
import fetchMeals from './fetchMeals';
// import axios from 'axios'

export function* fetchCart() {
  const jsonResponse = yield call(fetchMeals, 'https://saga-quick-attempt-default-rtdb.firebaseio.com/meals.json')
  console.log("Saga: ")
  console.log(JSON.stringify(jsonResponse))
}

// export function* getAllEntries() {
//   yield take({type: 'GET_CART'});
//   console.log('I need to get the entries now');
//   const { data } = yield call(axios, 'http://localhost:3001/entries');
//   yield put(populateEntries(data));
// }

// export function* getEntryDetails(id) {
//   const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
//   console.log(data);
//   yield put(populateEntryDetails(id, data));
// }
// export function* getAllEntriesDetails() {
//   const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
//   for (let index = 0; index < payload.length; index++) {
//     const entry = payload[index];
//     yield fork(getEntryDetails, entry.id);
//   }
// }