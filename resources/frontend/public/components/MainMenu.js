import React from 'react';
import {Router, Route, Link} from 'react-router';
import PopupLogin from './PopupLogin';
import Request from 'napishem-frontend-utils/modules/Request';
import UserActions from '../actions/User';
import UserStore from '../stores/User';

class MainMenu extends React.Component{

    constructor(props) {

        super(props);

        this.__changeEvent = this._onChange.bind(this);

        this.state = {};
    }

    componentDidMount() {
        UserStore.addChangeListener(this.__changeEvent);
        UserActions.getUser();
    }

    _onChange() {
        this.setState(UserStore.getUser());
    }

    _logout() {
        let url = '/ajax/logout';
        var r = new Request(url, 'post');
        r.send(((response) => {

            if(response.status == "ERROR") {
                console.log('ERROR');
            }else{
                UserActions.getUser();
            }
        }).bind(this));
    }

    _registerField() {
        if (!this.state.user) {
            return (
                <li className="nav-item">
                    <a href="#" className="nav-link" data-toggle="modal" data-target="#login-modal">Зарегистрироваться</a>
                </li>
            )
        }
        return(
            <li className="nav-item">
                <a href="#" className="nav-link" onClick={this._logout.bind(this)}>Выйти</a>
            </li>
        )
    }


    _loginField() {
        if(!this.state.user) {
            return(
                    <li className="nav-item">
                        <a href="#" className="nav-link" data-toggle="modal" data-target="#login-modal">Войти</a>
                    </li>
            )
        }
        return(
                <li className="nav-item">
                    <Link to={'/account/profile'} className="nav-link">{this.state.user.name}</Link>
                </li>
        )

    }
    
    render() {
        return(
            <div className="col-lg-8 col-md-12 main-menu">

                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav single-page-nav">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/gallery'} className="nav-link">Галерея</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/cart'} className="nav-link">Корзина</Link>
                        </li>
                        {this._loginField()}
                        {this._registerField()}
                    </ul>
                </nav>
                <PopupLogin />
            </div>
        )
    }
    
}

export default MainMenu;