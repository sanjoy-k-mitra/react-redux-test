import React from 'react'

const Profile = React.createClass({
    getInitialState:function(){
        return {current :1};
    },
    componentDidUpdate: function(){
        console.log("Updating...")
    },
    jump: function(to, event){
        this.setState({current: this.state.current + to});
        console.log("Clicked " +to, event.target);
    },
    render: function(){

        return <div className="profile">
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <button type="btn navbar-btn btn-default" onClick={this.jump.bind(this, -1)}><span className="glyphicon glyphicon-arrow-left"/></button>
                    <button type="btn navbar-btn btn-default" onClick={this.jump.bind(this, 1)}><span className="glyphicon glyphicon-arrow-right"/></button>
                    <h4>Profile</h4>
                </div>
            </nav>
            Current Page : {this.state.current}

        </div>
    }
});

export default Profile;