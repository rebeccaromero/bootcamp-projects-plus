import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Square} from './square.js';

class App extends Component {
  render() {
    return (
      <div>
        < Square fontColor='white' backgroundColor='blue' />
        < Square fontColor='blue' backgroundColor='red' />
        < Square fontColor='green' backgroundColor='pink' />
      </div>
    );
  }
}

export default App;
