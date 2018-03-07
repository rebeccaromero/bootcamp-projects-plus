import React from 'react';
import './box.css';
import {Countdown} from './countdown.js';

function getPicks() {
    console.log('picking');
    var picked = [];
    while (picked.length < 4) {
        var pick = Math.floor(Math.random()*11);
        var pickExists = false;
        for (let i = 0; i < picked.length; i++) {
            if (picked[i] === pick) {
                pickExists = true;
            }
        }
        if (pickExists) {
            pickExists = false;
        } else {
            picked.push(pick);
        }
    }
    console.log(picked);
    return picked
}

export class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "standby",
            boxStats: []
        }
        this.changeMode = this.changeMode.bind(this);
        this.reset = this.reset.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    changeMode(newMode) {
        this.setState({ mode: newMode});
    }

    reset() {
        var picks = getPicks();
        var stats = [];
        for (let i = 0; i < 12; i++) {
            stats.push({chosen: false, clicked: false});
        }
        for (let i = 0; i < picks.length; i++) {
            stats[picks[i]].chosen = true;
        }
        console.log(stats);
        this.setState({ boxStats: stats });
    }

    handleClick(e) {
        var index = e.target.id;
        var stats = this.state.boxStats;
        if (this.state.mode === 'guess') {
            stats[index].clicked = true;
        }
        this.setState({boxStats: stats});
    }

    render() {
        const boxes = [];
        console.log('rendering');
        console.log(this.state.boxStats);
        for (let i = 0; i < 12; i++) {
            var className = 'box'
            if (this.state.mode === 'memorize') {
                if (this.state.boxStats[i].chosen === true) {
                    className = 'box chosen';
                } else {
                    className = 'box blank';
                }
            } else if (this.state.mode === 'gameOver') {
                if (this.state.boxStats[i].chosen === true && this.state.boxStats[i].clicked === true) {
                    className = 'box correct';
                }
                if (this.state.boxStats[i].chosen === true && this.state.boxStats[i].clicked === false) {
                    className = 'box missed';
                }
                if (this.state.boxStats[i].chosen === false && this.state.boxStats[i].clicked === true) {
                    className = 'box incorrect';
                }
                if (this.state.boxStats[i].chosen === false && this.state.boxStats[i].clicked === false) {
                    className = 'box';
                }
            }
            boxes.push(<div id={i} onClick={this.handleClick} className={className}></div>)
        }
        return (
            <div>
                <div className="game-board">
                    {boxes}
                </div>
                <Countdown mode={this.state.mode} changeMode={this.changeMode} reset={this.reset} />  
            </div>
        )
    }
}