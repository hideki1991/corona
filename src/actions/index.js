
export const addConfirmed = data => ({
    type: 'ADD_CONFIRMED',
    data: data,
})
export const addDeaths = data => ({
    type: 'ADD_DEATHS',
    data: data,
})
export const addRecovered = data => ({
    type: 'ADD_RECOVERED',
    data: data,
})

export const setCountry = countryID => ({
    type: 'SET_COUNTRY',
    countryID: countryID,
})

export const setLog = () => ({
        type: "SET_LOG"
    })

export const setDifference = () => ({
    type: "SET_DIFFERENCE"
})
