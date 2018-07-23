import {fork} from 'redux-saga/effects'
import { watchAsync } from './watcher.js'

export function * helloSaga() {
    yield [
        fork(watchAsync),
    ]
}