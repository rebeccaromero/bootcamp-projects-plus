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

export class PersonalItems extends React.Component {
    render() {
        var time = this.props.personalTime > 0 ? convertToTime(this.props.personalTime) : '';
        var list = [];
        for (let i = 0; i < this.props.personalItems.length; i++) {
            console.log('meow');
            list.push(<p>{convertToTime(this.props.personalItems[i].time)} {this.props.personalItems[i].description}</p>);
        }
        return (
            <div>
                <h2>Personal   {time}</h2>
                <div className="personal-list">
                    {list}
                </div>
            </div>
        );
    }
}