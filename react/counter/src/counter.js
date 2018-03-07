import React from 'react';
import {ChangeCount} from './changeCount.js';

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }
    decrease(){
        this.setState({
            count: this.state.count - 1
        })
    }
    increase(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div className="counter">
                <h2>{this.state.count}</h2>
                <ChangeCount decrease={this.decrease} increase={this.increase}/>
            </div>
        );
    }
}