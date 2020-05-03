const log = (state = false, action) => {
    switch (action.type) {
        case 'SET_LOG':
            let newState = !state
            return newState
        default:
            return state
    }
}

export default log