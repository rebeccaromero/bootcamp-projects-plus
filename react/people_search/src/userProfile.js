import React from 'react';
import userList from './reducers';

export class UserProfile extends React.Component {
    render() {
        let users = [];
        console.log(userList);
        for (let i = 0; i < userList.length; i++) {
            users.push(<p>userList[i].name</p>)
        }
        return (
            <div>
                <div>
                    <a href="">Back</a>
                </div>
                <div className="user-info">
                    <div>{users}</div>
                </div>
            </div>
        )
    }
}