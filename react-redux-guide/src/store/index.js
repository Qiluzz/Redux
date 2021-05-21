import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/root.reducer';
import logger from './middleware/logger';
import test from './middleware/test.middleware';
import thunk from './middleware/thunk'

export const store = createStore(reducer, applyMiddleware(logger, test, thunk))
