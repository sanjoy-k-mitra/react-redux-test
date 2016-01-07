import React from 'react';
import ReactDOM from 'react-dom';

var TestApp = React.createClass({
    render: function(){
        return <div>
            <h1>Hello, world! I am a novie Node learner.</h1>
        </div>;
    }
});
ReactDOM.render(
    <TestApp/>,
    document.getElementById('app')
);