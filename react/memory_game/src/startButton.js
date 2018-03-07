import React from 'react';

export class StartButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.startCountdown()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Start Game</button>
            </div>  
        )
    }
}