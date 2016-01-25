/**
 * Created by ahsanul on 1/25/16.
 */
import {Map} from 'immutable'

import {PROFILE_REQUEST_DATA, PROFILE_RECEIVE_DATA} from '../actions/profile.js'

export default function reducer(state = Map({}), action){
    switch (action.type){
        case PROFILE_REQUEST_DATA:
            console.log("Reducer Profile", state, action)
            break;
        case PROFILE_RECEIVE_DATA:
            console.log("Reducer Profile", state, action)
            break

    }

    return state;
}