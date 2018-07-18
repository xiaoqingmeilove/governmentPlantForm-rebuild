import {takeEvery} from 'redux-saga'
import { AddAsync,SubAsync } from './worker.js'

export function* watchIncrementAsync() {
    yield* takeEvery('ADD', AddAsync)
}

export function* watchDecrementAsync() {
    yield* takeEvery('SUB', SubAsync)
}
