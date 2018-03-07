import React, { Component } from 'react';
import './App.css';
import {ListItem} from './listItem.js';
import {Filter} from './filter.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      itemsLeft: 2,
      filter: "all",
      newTodoText: ""
    };
    this.increaseItemsLeft = this.increaseItemsLeft.bind(this);
    this.decreaseItemsLeft = this.decreaseItemsLeft.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.finishList = this.finishList.bind(this);
    this.unscratchAll = this.unscratchAll.bind(this);

  }

  increaseItemsLeft() {
    this.setState({ itemsLeft: this.state.itemsLeft + 1 })
  }

  decreaseItemsLeft() {
    this.setState({ itemsLeft: this.state.itemsLeft - 1 })
  }

  changeFilter(newFilter) {
    this.setState({
      filter: newFilter
    })
  }

  finishList() {
    this.setState({ itemsLeft: 0})
  }

  unscratchAll(count) {
    this.setState({ itemsLeft: count})
  }

  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <ListItem filter={this.state.filter} increaseItemsLeft={this.increaseItemsLeft} decreaseItemsLeft={this.decreaseItemsLeft} finishList={this.finishList} unscratchAll={this.unscratchAll} itemsLeft={this.state.itemsLeft} />
        <div>
          <p>{this.state.itemsLeft} left to do</p>
          <Filter  changeFilter={this.changeFilter}/>
        </div>
      </div>
    );
  }
}

export default App;
