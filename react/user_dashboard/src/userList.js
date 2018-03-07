import React from 'react';
import axios from 'axios';

export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        // fetch('hhtps://localhost:3000/api/users');
        console.log('BLAASDRDSHAFOD');
        axios.get(`http://localhost:3333/api/users`)
            .then((data) => {
                console.log('THEN:')
                console.log(data);
                this.setState({ users: data.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        let list = [];
        for (let i = 0; i < this.state.users.length; i++) {
            list.push(<p>{this.state.users[i].name}</p>);
        }
        return (
            <div>
                <h2>UserList</h2>
                <div>
                    {list}
                </div>
            </div>
        );
    }
}