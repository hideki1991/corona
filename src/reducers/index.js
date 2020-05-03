import { combineReducers } from 'redux'
import data from './data'
import countryid from './countryid'
import log from './log'

export default combineReducers({
    data: data,
    countryid: countryid,
    log:log
})