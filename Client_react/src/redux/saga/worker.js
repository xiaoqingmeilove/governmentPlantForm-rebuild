import {put} from 'redux-saga/effects'

export function* AddAsync() {
    yield new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, 1000)
    })
    yield put({type: 'Done', payload: 1})
}

export function* SubAsync() {
    yield new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, 1000)
    })
    yield put({type: 'Done', payload: -1})
}
