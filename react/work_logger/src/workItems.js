import React from 'react';

function convertToTime(minutes) {
    var hours = 0;
    while (minutes > 59) {
        minutes -= 60;
        hours += 1;
    }
    if (minutes > 9) {
        return hours + ':' + minutes;
    } else {
        return hours + ':0' + minutes;
    }
}

export class WorkItems extends React.Component {
    
    render() {
        console.log('work time: ' + this.props.workTime);
        var time = this.props.workTime > 0 ? convertToTime(this.props.workTime) : '';
        var list = [];
        for (let i = 0; i < this.props.workItems.length; i++) {
            console.log('meow');
            list.push(<p>{convertToTime(this.props.workItems[i].time)} {this.props.workItems[i].description}</p>);
        }
        return (
            <div>
                <h2>Work {time}</h2>
                <div className="work-list">
                    {list}
                </div>
            </div>
        );
    }
}