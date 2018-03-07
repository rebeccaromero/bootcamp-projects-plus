import {connect} from 'react-redux';
import UserList from '../components/UserList.js';

const getShownUsers = (users, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return users
    }
}

const mapStateToProps = state => {
            return {
                users : getShownUsers(state.users, 'SHOW_ALL')
            }
        }
const userList = connect(
    mapStateToProps
)

const ShownUsersList = connect(
    mapStateToProps
)(UserList)

export default ShownUsersList