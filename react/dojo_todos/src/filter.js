import React from 'react';

export class Filter extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        e.preventDefault();
        console.log(e.target.value);
        this.props.changeFilter(e.target.value);
    }

    render(){
        return (
            <div className="filter">
                <form>
                    <input onClick={this.handleChange} type="radio" name="filter" value="all" /> All
                    <input onClick={this.handleChange} type="radio" name="filter" value="active" /> Active
                    <input onClick={this.handleChange} type="radio" name="filter" value="complete" /> Complete
                </form>
            </div>
        )
    }
}