import React from 'react';

export class Square extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: this.props.backgroundColor, height: 200, width: 200, display: 'inline-block'}}>
                <p style={{color: this.props.fontColor}}>{this.props.fontColor} on {this.props.backgroundColor}</p>
            </div>
        );
    }
}