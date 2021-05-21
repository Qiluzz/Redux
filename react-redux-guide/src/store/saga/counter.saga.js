import { delay, put, takeEvery} from 'redux-saga/effects';
import { INCREMENT_ASYNC } from '../const/counter.const';
// import { increment_async, increment } from '../action/action.count';
import {increment_async, increment} from '../action/counter.actions';




//takeEvery 接收 action
// put 触发 action

function * increment_async_fn(action) {

    yield delay(2000)
    yield put(increment(action.payload))
    
}


export default function * counterSaga() {
    // 接收action
    yield takeEvery(increment_async, increment_async_fn)
    
    
}