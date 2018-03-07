import { combineReducers } from 'redux';
import userList from './userList.js';
import filter from './filter.js';

const userListApp = combineReducers({
    userList,
    filter
})

export default userListApp