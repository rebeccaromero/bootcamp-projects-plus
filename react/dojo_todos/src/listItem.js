import React from 'react';
import './listItem.css';
import { AddItem } from './addItem.js';

export class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {id: 1, text: "Learn React", completed: true},
                {id: 2, text: "Build a todo app", completed: false},
                {id: 3, text: "Big bucks no whammy", completed: false},
                {id: 4, text: "Pet pepper", completed: true},
            ],
        }
        this.addItem = this.addItem.bind(this);
        this.changeCompletion = this.changeCompletion.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.selectAll = this.selectAll.bind(this);
        this.deleteComplete = this.deleteComplete.bind(this);
    }

    addItem(task) {
        var newItem = {id: 5, text: task, completed: false};
        this.state.items.push(newItem);
        this.props.increaseItemsLeft();
    }

    handleDelete(e) {
        console.log('delete');
        console.log(e.target.value);
        if (this.state.items[e.target.value].completed === false) {
            this.props.decreaseItemsLeft();
        } 
        var items = this.state.items;
        items.splice(e.target.value, 1);
        this.setState({
            items: items
        });
    }

    changeCompletion(e) {
        console.log('Complete or Not?');
        console.log(e.target.id);
        var index = e.target.id;
        var items = this.state.items;
        var status;
        if (this.state.items[index].completed === true) {
            status = false;
            this.props.increaseItemsLeft();
        } else {
            status = true;
            this.props.decreaseItemsLeft();
        }
        items[index].completed = status;
        this.setState({ items: items });
    }

    selectAll() {
        var items = this.state.items;
        if (this.props.itemsLeft !== 0){
            for (let i = 0; i < items.length; i++) {
                items[i].completed = true;
            }
            this.props.finishList();
        } else {
            for (let i = 0; i < items.length; i++) {
                items[i].completed = false;
            }
            this.props.unscratchAll(items.length);
        }
        this.setState({
            items: items
        })
    }

    deleteComplete() {
        var items = this.state.items;
        for (let i = items.length - 1; i > -1; i--) {
            if (items[i].completed) {
                items.splice(i, 1);
            }
        }
        this.setState({ items: items });
    }

    render() {
        const somethingDone = this.props.itemsLeft !== this.state.items.length;
        const list = [];
        if (this.props.filter === "all") {
            for(let i = 0; i < this.state.items.length; i++){
                if (this.state.items[i].completed) {
                    list.push(<div><p id={i} onClick={this.changeCompletion} style={{ textDecoration: 'line-through' }}>{this.state.items[i].text}</p><button style={{ color: 'red' }} value={i} onClick={this.handleDelete}>X</button></div>)
                } else {
                    list.push(<div><p id={i} onClick={this.changeCompletion} >{this.state.items[i].text}</p><button style={{ color: 'red' }} value={i} onClick={this.handleDelete}>X</button></div>)
                }
            }
        } else if (this.props.filter === "active") {
            for(let i = 0; i < this.state.items.length; i++){
                if (!this.state.items[i].completed) {
                    list.push(<div><p id={i} onClick={this.changeCompletion}>{this.state.items[i].text}</p><button style={{ color: 'red' }} value={i} onClick={this.handleDelete}>X</button></div>)
                }
            }
        } else {
            for(let i = 0; i < this.state.items.length; i++){
                if (this.state.items[i].completed) {
                    list.push(<div><p id={i} onClick={this.changeCompletion} style={{ textDecoration: 'line-through' }}>{this.state.items[i].text}</p><button style={{ color: 'red' }} value={i} onClick={this.handleDelete}>X</button></div>)
                }
            }
        }
        if (somethingDone) {
            return (
                <div>
                    <button style={{ backgroundColor: 'gray', color: 'white' }} onClick={this.selectAll}> **Select All** </button>
                    <AddItem addItem={this.addItem} />
                    <div className="list-display">
                        {list}
                    </div>
                    <button className="delete-complete" onClick={this.deleteComplete}>Delete Completed</button>
                </div>
            );
        } else {
            return (
                <div>
                    <button style={{ backgroundColor: 'gray', color: 'white' }} onClick={this.selectAll}> **Select All** </button>
                    <AddItem addItem={this.addItem} />
                    <div className="list-display">
                        {list}
                    </div>
                </div>
            );
        }
    }
}