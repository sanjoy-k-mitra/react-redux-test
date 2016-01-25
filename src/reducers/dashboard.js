/**
 * Created by ahsanul on 1/25/16.
 */
import {Map} from 'immutable'
import{DASHBOARD_REQUEST_DATA, DASHBOARD_RECEIVE_DATA} from '../actions/dashboard.js'


export default function reducer(state = Map({}), action){
    switch (action.type){
        case DASHBOARD_REQUEST_DATA:
            console.log("Reducer Dashboard", state, action)
            state = state.merge({
                name: "Sanjoy K Mitra"
            })
            break;
        case DASHBOARD_RECEIVE_DATA:
            console.log("Reducer Dashboard", state, action)
            break

    }

    return state;
}