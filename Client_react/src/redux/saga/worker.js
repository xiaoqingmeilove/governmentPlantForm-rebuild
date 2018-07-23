import {put,select} from 'redux-saga/effects'

export function* login(payload) {
    const state= yield select()
    console.log("整个state",state,payload)
    yield put({type: 'WORKER/Done', payload })
}
