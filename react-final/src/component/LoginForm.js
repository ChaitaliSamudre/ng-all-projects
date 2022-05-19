import React from "react";


export default class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isError: {
                username: '',
                password: ''
            }
        }
    }

    regExp = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    )

    formValid = ({ isError, ...rest }) => {
        let isValid = false;
        Object.values(isError).forEach(val => {
            if (val.length > 0) {
                isValid = false
            } else {
                isValid = true
            }
        });
        Object.values(rest).forEach(val => {
            if (val === null) {
                isValid = false
            } else {
                isValid = true
            }
        });
        return isValid;
    };

    onSubmit = e => {
        if (this.formValid(this.state)) {
            console.log(this.state)
        } else {
            console.log("Form is invalid!");
        }
    };

    formValChange = (e) => {
        e.preventDefault();
        const { username, value } = e.target;
        let isError = { ...this.state.isError };

        switch (username) {
            case "username":
                isError.username =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 character required" : "";
                break;
            default:
                break;
        }

        console.log(isError, value)
        this.setState({
            isError,
            [username]: value
        });
    }

    render() {
        const { isError } = this.state;

        console.log(isError.username)
        return (
            <>
                <h3>React Form Validation Tutorial</h3>
                <form onSubmit={this.onSubmit} noValidate>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" name="username" 
                            onChange={this.formValChange} />

                        {isError.username.length > 0 && (
                            <span>{isError.username}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" name="password"
                            onChange={this.formValChange} />

                        {isError?.password.length > 0 && (
                            <span >{isError?.password}</span>
                        )}
                    </div>
                    <button type="submit" className="btn btn-block btn-danger">Login</button>
                </form>
            </>
        );

    }
}