import {takeEvery} from 'redux-saga'
import {put,select} from 'redux-saga/effects'
import createHistory from 'history/createHashHistory'
import * as workers from './worker.js'
const history = createHistory()
export function* watchAsync() {
    yield* takeEvery('*', function* logger(action) {
        if(action.type == 'loading/loading'){
            return
        }
        if(action.type.indexOf("ACTION")!=-1){
            const type = action.type.split("/")[1]
            yield put({type: 'loading/loading', payload:{loading:true} })
            yield workers[type](action.payload)
        }
        else if(action.type.indexOf("WORKER")!=-1){
            const state= yield select()
            if(state.todos.loading){
                yield put({type: 'loading/loading', payload:{loading:false} })
            }
            return
        }
    })
}
