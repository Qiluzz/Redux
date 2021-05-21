import { takeEvery,put,delay } from 'redux-saga/effects';
import { SHOWMODAL_ASYNC } from '../const/modal.const';
import { showModal } from '../action/action.modal';


function* showModal_async_fn(action) {

    yield delay(2000)
    yield put(showModal())

}

export default function* modalSaga(){
    yield takeEvery(SHOWMODAL_ASYNC, showModal_async_fn)
}
