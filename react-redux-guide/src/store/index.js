import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/root.reducer';
// import logger from './middleware/logger';
// import test from './middleware/test.middleware';
// import thunk from './middleware/thunk'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/root.saga'


//创建sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware, thunk))

sagaMiddleware.run(rootSaga)