import { combineReducers } from 'redux'
import counterReducer from './count.reducer'
import modalReducer from './modal.reducer'


//{counter:{count:0}, modal:{isShow:false}}
export  default combineReducers({
    counter: counterReducer,
    modal: modalReducer
})