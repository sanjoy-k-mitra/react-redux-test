import React from 'react'
import {Route} from 'react-router'

import App from './Components/App.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Profile from './Components/Profile.jsx'

const routes = <Route component={App}>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/profile" component={Profile}/>
</Route>

export default routes;