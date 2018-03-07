import React from 'react';

export class ChangeCount extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.decrease}>Decrement</button>
                <button onClick={this.props.increase}>Increment</button>
            </div>
        );
    }
}