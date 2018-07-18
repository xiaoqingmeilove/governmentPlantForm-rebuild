import {fork} from 'redux-saga/effects'
import { watchDecrementAsync,watchIncrementAsync } from './watcher.js'

export function * helloSaga() {
    yield [
        fork(watchDecrementAsync),
        fork(watchIncrementAsync)
    ]
}