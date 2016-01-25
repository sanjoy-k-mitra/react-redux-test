import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/dashboard.js'

export const PureDashboard = React.createClass({
    componentDidMount: function(){
        this.props.requestDashboardData();
    },
    render: function(){
        return <div className="dashboard">
            <h4>Dashboard</h4>
            <label>Name: {this.props.name}</label>
        </div>
    }
});

function mapStateToProps(state){
    return {
        name: state.dashboard.get('name')
    }
}

export const Dashboard = connect(mapStateToProps, actions)(PureDashboard)