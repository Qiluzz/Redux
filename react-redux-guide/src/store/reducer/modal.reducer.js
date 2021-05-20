import { SHOWMODAL, HIDEMODAL } from "../const/modal.const";

const initialState = {
    isShow: false
}

export default function reducer(state = initialState, action) {
    console.log('222', state, action)
    switch (action.type) {
        case SHOWMODAL:
            return {
                ...state,
                isShow: true
            }
            break;
        case HIDEMODAL:
            return {
                ...state,
                isShow: false
            }
            break;
        default:
            return state
            break;
    }
}