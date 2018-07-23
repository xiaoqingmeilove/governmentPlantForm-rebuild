import {takeEvery} from 'redux-saga'
import * as workers from './worker.js'

export function* watchAsync() {
    yield* takeEvery('*', function* logger(action) {
        console.log("dssss",action,workers)
        if(action.type.indexOf("ACTION")!=-1){
            const type = action.type.split("/")[1]
            yield workers[type](action.payload)
        }else if(action.type.indexOf("WORKER")!=-1){

        }
    })
}

// export function* watchDecrementAsync() {
//     yield* takeEvery('SUB', SubAsync)
// }
