import { delay, put, takeEvery} from 'redux-saga/effects';
import { INCREMENT_ASYNC } from '../const/counter.const';
import { increment_async, increment } from '../action/action.count';

//takeEvery 接收 action
// put 触发 action

function * increment_async_fn() {
    yield delay(2000)
    yield put(increment(10))
    
}

export default function * counterSaga() {
    // 接收action
    yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
    
}