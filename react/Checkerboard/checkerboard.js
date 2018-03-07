import React from 'react';
import ReactDOM from 'react-dom';

class Checkerboard extends React.Component {
    render() {
        return (
            <div>
                <input type="number" name="rows" />
                <button>Generate Board!</button>
            </div>
        )
    }
}

ReactDOM.render(<Checkerboard />, document.getElementById('app'));