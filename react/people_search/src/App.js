import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import ShownUsersList from './containers/ShownUsersList.js'
import {UserProfile} from './userProfile.js';
import {UserList} from './userList.js';

const mapStateToProps = state => ({
  users: state.userList
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <switch>
          <Route exact path="/" component={UserList}></Route>
          <Route exact path="/profile" component={UserProfile}></Route> 
        </switch>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
