import { DECREMENT, INCREMENT } from "../const/counter.const";

const initialState = {
    count: 0
}

export default function reducer(state = initialState,action) {
    switch (action.type) {
    case INCREMENT:
        return { 
            ...state,
            count: state.count + action.payload}
        break;
    case DECREMENT:
        return {
            ...state, 
            count: state.count - action.payload }
        break;
    default:
        return state
        break;
    }
}