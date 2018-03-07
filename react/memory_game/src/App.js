import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Box} from './box.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Memory Game</h1>
        <div>
        </div>
        <Box />    
      </div>
    );
  }
}

export default App;
