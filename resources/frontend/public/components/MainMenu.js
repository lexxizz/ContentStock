import React from 'react';
import {Router, Route, Link} from 'react-router';

class MainMenu extends React.Component{
    
    render() {
        return(
            <div className="col-lg-8 col-md-12 main-menu">

                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav single-page-nav">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link" href="#">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/gallery'} className="nav-link" href="#">Галерея</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Войти</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Зарегистрироваться</a>
                        </li>
                    </ul>
                </nav>

            </div>
        )
    }
    
}

export default MainMenu;