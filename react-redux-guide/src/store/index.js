import { createStore } from 'redux';
import reducer from './reducer/root.reducer';

export const store = createStore(reducer)
