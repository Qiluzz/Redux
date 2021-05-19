const initialState = {
    count: 0
}

export default function reducer(state = initialState,action) {
    switch (action.type) {
    case "increment":
        return { count: state.count + 1 }
        break;
    case "decrement":
        return { count: state.count - 1 }
        break;
    default:
        return state
        break;
    }
}