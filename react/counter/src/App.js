import React, { Component } from 'react';
import './App.css';
import {Counter} from './counter.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counters: []
    }
    this.newCounter = this.newCounter.bind(this);
  }
  newCounter(){
      this.state.counters.push(
        <Counter />
      );
      this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.newCounter}>Add Counter</button>
        <Counter />
        {this.state.counters}
      </div>
    );
  }
}

export default App;
