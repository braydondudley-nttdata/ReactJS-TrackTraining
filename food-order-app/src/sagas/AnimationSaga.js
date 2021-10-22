import { delay } from 'redux-saga/effects';

function* AnimationSaga() {
  console.log('I have been called');
  yield delay(300);
  console.log('I am doing noting');
}

export default AnimationSaga