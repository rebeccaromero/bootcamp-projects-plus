import React from 'react';
import { StartButton } from './startButton.js';
import { ResetButton } from './resetButton.js';

export class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 3
        }
        this.lowerTimer = this.lowerTimer.bind(this);
        this.startCountdown = this.startCountdown.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    lowerTimer() {
        var timeLeft = this.state.timer - 1;
        console.log(timeLeft);
        this.setState({ timer: timeLeft });
    }

    resetTimer(num) {
        console.log('resetting number');
        console.log(num);
        this.setState({ timer: num});
    }

    startCountdown() {
        this.props.reset();
        this.props.changeMode('loading');
        var _this = this;
        console.log('Dig, man ');
        var guessInterval
        var countdownInterval = setInterval(function() {_this.lowerTimer(), startGame()}, 1000);
        console.log(this.state.timer);
        function startGame() {
            if (_this.state.timer === 0) {
                console.log('WE\'VE HIT ZERO!');
                clearInterval(countdownInterval);
                _this.resetTimer(4);
                _this.props.changeMode('memorize');
                setTimeout(() => {_this.props.changeMode('guess')}, 1000);
                guessInterval = setInterval(function() {_this.lowerTimer(), endGame()}, 1000);
            }
        }
        function endGame() {
            if (_this.state.timer === 0) {
                clearInterval(guessInterval);
                _this.resetTimer(3);
                _this.props.changeMode('gameOver');
            }
        }
    }

    render() {
        var html
        if (this.props.mode === 'standby') {
            html = <StartButton startCountdown={this.startCountdown} />;
        } else if (this.props.mode === 'loading') {
            html = <p>Get ready to memorize in...{this.state.timer}</p>;
        } else if (this.props.mode === 'memorize') {
            html = <p>MEMORIZE!</p>;
        } else if (this.props.mode === 'guess') {
            html = <p>Guess...{this.state.timer}!</p>;
        } else if (this.props.mode === 'gameOver') {
            html = <ResetButton startCountdown={this.startCountdown} />;
        }
        return (html);
    }
}