import React from 'react';
import {Router, Route} from 'react-router';
import Form from './Form';

class PopupLogin extends React.Component {

    render() {
        return(
            <div className="modal fade" id="login-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="loginmodal-container">
                        <h1>Login to Your Account</h1><br />
                        <Form action="/ajax/login" method="post" callback={((response) => {this._response(response)})} error_cb={((response) => {console.log('ERROR')}).bind(this)}>
                            <input type="text" name="email" placeholder="Username"/>
                                <input type="password" name="password" placeholder="Password"/>
                                    <input type="submit" name="login" className="login loginmodal-submit" value="Login"/>
                        </Form>

                        <div className="login-help">
                            <a href="#">Register</a> - <a href="#">Forgot Password</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    
    _response(response) {
        $('#login-modal').modal('hide');
    }
    
}
export default PopupLogin;
