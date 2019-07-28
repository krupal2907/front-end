import React from 'react';

import logo from "../../images/logo.jpg";

class LogInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            account_type: "",
        }
    }

    render() {
        return (
            <div className="signin">
                <div className="form-padder">
                    <form className="form-wrapper card">
                        <img className="form-logo" src={logo} />
                        <div className="form-flex">
                            <h1>Log In</h1>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LogInForm;