import { all } from 'redux-saga/effects'

import { helloSaga } from './hello'
import { watchIncrementAsync } from './incrementAsync' // WatcherFn will call WorkerFn so we only need to call WatcherFn here

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}