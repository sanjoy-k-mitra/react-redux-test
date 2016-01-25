/**
 * Created by ahsanul on 1/25/16.
 */


export const PROFILE_REQUEST_DATA = "request_data"
export const PROFILE_RECEIVE_DATA = "receive_data"

export function requestDashboardData(id){
    return {
        type: PROFILE_REQUEST_DATA,
        userId: id
    }
}