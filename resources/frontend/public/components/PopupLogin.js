import React from 'react';
import {Router, Route} from 'react-router';

class PopupLogin extends React.Component {

    render() {
        return(
            <div className="modal fade" id="login-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="loginmodal-container">
                        <h1>Login to Your Account</h1><br />
                        <form>
                            <input type="text" name="user" placeholder="Username"/>
                                <input type="password" name="pass" placeholder="Password"/>
                                    <input type="submit" name="login" className="login loginmodal-submit" value="Login"/>
                        </form>

                        <div className="login-help">
                            <a href="#">Register</a> - <a href="#">Forgot Password</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PopupLogin;
