/**
 * Created by ahsanul on 1/25/16.
 */


export const DASHBOARD_REQUEST_DATA = "dashboard_request_data"
export const DASHBOARD_RECEIVE_DATA = "dashboard_receive_data"

export function requestDashboardData(){
    return {
        type: DASHBOARD_REQUEST_DATA,

    }
}