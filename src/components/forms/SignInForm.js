import React from 'react';

import logo from "../../images/logo.jpg";

class SignInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
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
                            <h1>Sign Up</h1>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <input type="email" placeholder="Email" />
                            <button>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignInForm;