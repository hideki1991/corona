const difference = (state = false, action) => {
    switch (action.type) {
        case 'SET_DIFFERENCE':
            let newState = !state
            return newState
        default:
            return state
    }
}

export default difference