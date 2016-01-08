import React from 'react'

const App = React.createClass({
    render: function(){
        return <div className="container-fluid">
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            Test App
                        </div>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="/#/dashboard">Dashboard</a></li>
                            <li><a href="/#/profile">Profile</a></li>
                            <li><a href="//google.com">Goole</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {this.props.children}
        </div>
    }
});

export default App;