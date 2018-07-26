import {put,select} from 'redux-saga/effects'
import createHistory from 'history/createHashHistory'
const history = createHistory()

export function* login(payload) {
    history.replace('/main/user')
    yield put({type: 'WORKER/Done', payload })
}
