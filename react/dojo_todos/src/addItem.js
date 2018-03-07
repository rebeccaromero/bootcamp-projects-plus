import React from 'react';

export class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log('Changing, yo');
        this.setState({value: e.target.value })
    }

    handleSubmit(e) {
        console.log(this.state.value);
        e.preventDefault();
        console.log('Time to addddddddddd item!!!!!!!');
        this.props.addItem(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input name='task' type="text" value={this.state.value} placeholder="What needs to be done?" onChange={this.handleChange} />
            </form>
        );
    }
}