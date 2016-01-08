import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import routes from './routes'

var TestApp = React.createClass({
    render: function(){
        return <Router>{routes}</Router>;
    }
});
ReactDOM.render(
    <TestApp/>,
    document.getElementById('app')
);