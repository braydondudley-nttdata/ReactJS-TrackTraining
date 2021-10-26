import { all, takeEvery } from 'redux-saga/effects'

import AnimationSaga from './AnimationSaga'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield takeEvery('UPDATE_CART', AnimationSaga)
}



// let response2 = yield call(apiCall, "POST", serviceUrl.user, {
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
// })  //post request