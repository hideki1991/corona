
const countryid = (state = 0, action) => {
    switch (action.type) {
        case 'SET_COUNTRY':
            return action.countryID
        default:
            return state
    }
}

export default countryid