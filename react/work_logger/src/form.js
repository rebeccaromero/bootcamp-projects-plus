import React from 'react';

export class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            valid: false,
            errors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if (e.target.project.value === "Work"){
            var workItem = {
                description: e.target.description.value,
                time: e.target.time.value
            }
            this.props.submitWork(workItem);
        } else {
            var personalItem = {
                description: e.target.description.value,
                time: e.target.time.value
            }
            this.props.submitPersonal(personalItem);
        }
    }

    validate(e){
        if (e.target.value.length > 4) {
            this.setState({
                valid: true,
                errors: ''
            })
        } else {
            this.setState({
                errors: 'Description must be at least 5 characters long',
                valid: false
            })
        }
    }

    render() {
         if (this.state.valid) {
            var button = <input type="submit" value="Add" />
        } else {
            var button = <input type="submit" value="Add" disabled/>
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Project: <select name="project" id="project">
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>
                    </select><br/>
                    Description: <input onChange={this.validate} type="text" name="description" required minLength='5' /><br/>
                    Minutes: <input type="number" name="time" min='0' max='240' /><br/>
                    {button}
                </form>
            </div>
        );
    }
}