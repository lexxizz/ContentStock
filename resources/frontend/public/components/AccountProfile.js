import React from 'react';
import {Router, Route, Link} from 'react-router';

class AccountProfile extends React.Component{
    
    constructor(props) {

        super(props);

        this.__changeEvent = this._onChange.bind(this);

        this.state = {};
    }

    componentDidMount() {
        // UserStore.addChangeListener(this.__changeEvent);
        // UserActions.getUser();
    }

    _onChange() {
        // this.setState(UserStore.getUser());
    }
    
    render() {
        return(
            <div className="col-md-9 well admin-content" id="home">
                <p>
                    Hello! This is a forked snippet.<br />
                    It is for users, which use one-page layouts.
                </p>
                <p>
                    Here's the original one from BhaumikPatel: <a href="http://bootsnipp.com/snippets/featured/vertical-admin-menu" target="_BLANK">Vertical Admin Menu</a>
                    <br />
                    Thank you Baumik!
                </p>
            </div>
    )
    }
    
}

export default AccountProfile;