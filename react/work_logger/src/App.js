import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form} from './form.js';
import {PersonalItems} from './personalItems.js';
import {WorkItems} from './workItems.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        personalItems: [],
        workItems: [],
        personalTime: 0,
        workTime: 0
    };
    this.submitPersonal = this.submitPersonal.bind(this);
    this.submitWork = this.submitWork.bind(this);
  }

  submitPersonal(personalItem){
    var items = this.state.personalItems;
    items.push(personalItem);
    var time = this.state.personalTime + parseInt(personalItem.time);
    this.setState({
      personalItems: items,
      personalTime: time
    })
    console.log(this.state.personalItems)
  }

  submitWork(workItem){
    var items = this.state.workItems;
    items.push(workItem);
    var time = this.state.workTime + parseInt(workItem.time);
    console.log('new work time: ' + time);
    this.setState({
      workItems: items,
      workTime: time
    })
    console.log(this.state.workTime);
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1>Work Logger</h1>
          <Form submitPersonal={this.submitPersonal} submitWork={this.submitWork} />
        </div>
        <div>
            <PersonalItems personalItems={this.state.personalItems} personalTime={this.state.personalTime}/>
            <WorkItems workItems={this.state.workItems} workTime={this.state.workTime} />
        </div>
      </div>
    );
  }
}

export default App;
