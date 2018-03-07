import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link
} from 'react-router-dom'
import {Home} from './home.js';
import {Nav} from './nav.js';
import {Login} from './loginForm.js';
import {Register} from './registrationForm.js';
import {UserList} from './userList.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>User Dashboard</h1>
        <Nav />
        <switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/login" component={Register}></Route>
          <Route exact path="/users" component={UserList}></Route>
        </switch>
      </div>
    )
  }
}

export default App;
