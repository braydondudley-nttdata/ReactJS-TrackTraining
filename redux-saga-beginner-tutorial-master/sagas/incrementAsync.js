import { put, takeEvery } from 'redux-saga/effects'

// delayFn takes in amount of time and runs a Promise with a setTimeout
const delay = (ms) => new Promise(res => setTimeout(res, ms))

// saga worker that performs another saga after a 1000ms delay
export function* incrementAsync() {
  console.log('Start Delay');
  yield delay(1000)
  console.log('Stop Delay');
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  console.log('hit 1');
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  console.log('hit 2');
}