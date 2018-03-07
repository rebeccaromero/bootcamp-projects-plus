import React, { Component } from 'react';
import './App.css';
import {Form} from './display.js';

class App extends Component {
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      mode: 'form'
    }
  }

  submitForm(){
    this.setState({
      mode: 'submitted'
    })
  }

  render() {
    if (this.state.mode === 'form'){
      return (
        <div className="App">
          <h1>Validated Form</h1>
          <div>
            <Form submitForm={this.submitForm}/>
          </div>
        </div>
      );
    } else {
      return (
        <h3>Thanks! your form was submitted!</h3>
      )
    }
  }
}

export default App;
