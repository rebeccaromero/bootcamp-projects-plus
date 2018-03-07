import React from 'react';

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValid: false,
            emailValid: false,
            nameErrors: '',
            emailErrors: '',
            name: '',
            email: ''
        }
        this.validateName = this.validateName.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    validateName(e) {
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        })
        if (e.target.value.length > 7) {
            console.log('long enough');
            this.setState({
                nameValid: true,
                nameErrors: ''
            })
        } else {
            this.setState({
                nameErrors: 'Name must be at least 8 characters long',
                nameValid: false
            })
        }
    }
    
    validateEmail(e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validEmail = re.test(e.target.value)
        this.setState({
            email: e.target.value
        })
        if (validEmail === true) {
            this.setState({
                emailValid: true,
                emailErrors: ''
            })
        } else {
            this.setState({
                emailErrors: "Please enter VALID email",
                emailValid: false
            })
        }
    }

    handleClick(e){
        e.preventDefault()
        this.props.submitForm()
    }

    render() {
        if (this.state.nameValid && this.state.emailValid) {
            var button = <button onClick={this.handleClick}>Submit</button>
        } else {
            var button = <button disabled>Submit</button>
        }
        return (
            <form>
                <input onChange={this.validateName} type="text" placeholder="Full Name" value={this.state.name} required minLength='8'/><p>{this.state.nameErrors}</p><br/>
                <input onChange={this.validateEmail} type="text" placeholder="Email" value={this.state.email} required minLength='8'/><p>{this.state.emailErrors}</p><br/>
                {button}
            </form>
        )
    }
}