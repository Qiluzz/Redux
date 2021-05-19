import { createStore } from 'redux';
import reducer from './reducer/count.reducer';

export const store = createStore(reducer)
