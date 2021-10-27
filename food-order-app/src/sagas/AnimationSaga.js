import { delay, call, put } from 'redux-saga/effects';

function* animationSaga() {
  yield put({type: 'SET_BTN_TRUE'})
  yield delay(300);
  yield put({type: 'SET_BTN_FALSE'})
}

export default animationSaga