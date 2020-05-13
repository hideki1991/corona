const perPop = (state = false, action) => {
    switch (action.type) {
        case 'SET_PERPOP':
            let newState = !state
            return newState
        default:
            return state
    }
}

export default perPop