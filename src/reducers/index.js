import { combineReducers } from 'redux'
import data from './data'
import countryid from './countryid'
import log from './log'
import difference from "./difference";

export default combineReducers({
    data: data,
    countryid: countryid,
    log:log,
    difference: difference
})