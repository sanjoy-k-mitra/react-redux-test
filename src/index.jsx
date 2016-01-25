import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'

import routes from './routes'
import reducer from './reducer.js'

let loggerMiddleware = logger()


let createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore)

let store = createStoreWithMiddleware(reducer)

var TestApp = React.createClass({
    render: function(){
        return <Provider store={store}>
            <Router>{routes}</Router>
        </Provider>;
    }
});
ReactDOM.render(
    <TestApp/>,
    document.getElementById('app')
);