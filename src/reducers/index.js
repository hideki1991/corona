import { combineReducers } from 'redux'
import data from './data'
import countryid from './countryid'

export default combineReducers({
    data: data,
    countryid: countryid,
})