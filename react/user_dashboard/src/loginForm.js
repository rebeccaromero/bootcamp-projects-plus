import React from 'react';
import axios from 'axios';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = e.target.name.value;
        let password = e.target.password.value;
        var nameExists;
        var passwordMatch;
        axios.post(`http://localhost:3333/check-name`, {name: name})
            .then((data) => {
                nameExists = data.data;
            })
            .catch((error) => {
                console.log(error)
            });
        axios.post(`http://localhost:3333/match-password`, {name: name, password: password})
            .then((data) => {
                passwordMatch = data.data;
            })
            .catch((error) => {
                console.log(error)
            });
        this.props.history.replace({ pathname: '/users' });
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" name="name" />
                    Password: <input type="password" name="password" />
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}