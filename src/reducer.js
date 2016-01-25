/**
 * Created by ahsanul on 1/25/16.
 */
import {combineReducers} from 'redux'

import dashboard from './reducers/dashboard.js'
import profile from './reducers/profile.js'


export default combineReducers({dashboard, profile})