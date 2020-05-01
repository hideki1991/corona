


const data = (state = {confirmed:[],deaths:[],recovered:[]}, action) => {
    let newstate = state
    switch (action.type) {
        case 'ADD_CONFIRMED':
            newstate.confirmed = action.data
            return newstate
        case 'ADD_DEATHS':
            newstate.deaths = action.data
            return newstate
        case 'ADD_RECOVERED':
            newstate.recovered = action.data
            return newstate
        default:
            return newstate
    }
}

export default data