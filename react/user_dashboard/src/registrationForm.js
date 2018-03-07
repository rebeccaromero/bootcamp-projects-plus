import React from 'react';
import axios from 'axios';

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValid: false,
            nameErrors: '',
            passwordValid: false,
            passwordErrors: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    validateName(name) {
        var exists;
        if (name.length > 1) {
            axios.post(`http://localhost:3333/check-name`, {name: name})
                .then((data) => {
                    console.log('NOW SEE HERE');
                    console.log(data.data);
                    console.log(data.data.exists);
                    exists = data.data.exists;
                    if (exists === false) {
                        this.setState({
                            nameValid: true,
                            nameErrors: ''
                        });
                        return true;
                    } else {
                        this.setState({
                            nameErrors: 'This name has already been taken suckaaa',
                            nameValid: false
                        })
                return false;
            }
                })
                .catch((error) => {
                    console.log(error)
                })
            
        } else {
            this.setState({
                nameErrors: 'Name must be at least 2 characters long',
                nameValid: false
            })
            return false;
        }
    }

    validatePassword(password) {
        if (password.length > 7) {
            this.setState({
                passwordValid: true,
                passwordErrors: ''
            })
            return true;
        } else {
            this.setState({
                passwordErrors: 'Password must be at least 8 characters long',
                passwordValid: false
            })
            return false;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = e.target.name.value;
        let password = e.target.password.value
        let validName = this.validateName(name);
        let validPassword = this.validatePassword(password);
        if (validName === true && validPassword === true) {
            this.addUser(name, password);
        }
    }

    addUser(name, password){
        axios.post('http://localhost:3333/api/users', {name: name, password: password})
            .then(() => {
                this.props.history.replace({ pathname: '/users' });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <div>
                    <p>{this.state.nameErrors}</p>
                    <p>{this.state.passwordErrors}</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" name="name" required />
                    Password: <input type="password" name="password" required />
                    <input type="submit" value="Register"/>
                </form>
            </div>
        );
    }
}