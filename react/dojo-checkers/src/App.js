import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var styles = {
  row: {height: '20px'},
  cell: {height: '20px', width: '20px', display:'inline-block'},
  colorA: {backgroundColor: 'black'},
  colorB: {backgroundColor: 'red'}
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <form onSubmit="">
          <input type="number" name="rows" />
          <button>Generate Board!</button>
        </form>
      </div>
    );
  }
}

export default App;
