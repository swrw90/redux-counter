let defaultState = {
    counter: 101
};

const mainReducer = (state = defaultState, action) => {
    if (action.type === "UP") {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === "DOWN") {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;