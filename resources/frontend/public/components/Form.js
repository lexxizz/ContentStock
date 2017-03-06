import React from 'react';
import Request from 'napishem-frontend-utils/modules/Request';

class Form extends React.Component {


    render() {

        return(
            <form className={this.props.className} noValidate action={this.props.action} method={this.props.method} style={this.props.style} onSubmit={this.__submit.bind(this)}>
                {this.props.children}
            </form>
        );
    }

    __submit(e) {

        e.preventDefault();

        var data = new FormData(e.target);

        var r = new Request(this.props.action, 'POST');
        r.send(((response) => {

            if(response.status == "ERROR") {

                if(this.props.error_cb) {
                    return this.props.error_cb(response);
                }

                return console.warn("ERROR: " + response.code + " with message " + response.message);
            }


            this.props.callback(response);

        }).bind(this), data);
    }
}

export default Form;