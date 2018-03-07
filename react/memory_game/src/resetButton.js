import React from 'react';

export class ResetButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.startCountdown();
    }

    render() {
        return <button onClick={this.handleClick} >Play Again</button>
    }
}