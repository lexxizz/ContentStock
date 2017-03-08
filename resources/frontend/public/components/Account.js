import React from 'react';
import {Router, Route, Link} from 'react-router';
import Division from './Division';

let __account_menu = [
    {"title": "Профиль", href: "/account/profile"},
    {"title": "Покупки", href: "/account/purchases"}
];

class Account extends React.Component{



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
            <Division menu={__account_menu} pathname={this.props.location.pathname}>
                {this.props.children}
            </Division>

    )
    }
    
}

export default Account;