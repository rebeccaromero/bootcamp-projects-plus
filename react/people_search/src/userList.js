import React from 'react';
import userList from './reducers';
import {connect} from 'react-redux';
import ShownUsersList from './containers/ShownUsersList.js'

export class UserList extends React.Component {
    render() {
        console.log('USERLIST');
        console.log(ShownUsersList);

        console.log('USERS');
        console.log(userList);
        
        return (
            <div>
                <div>
                    <form>
                        <span>&#128269;</span><span>&nbsp;</span><input type="search" placeholder="search"/>
                    </form>
                </div>
                <div>
                    <ShownUsersList />
                </div>
            </div>
        )
    }
}