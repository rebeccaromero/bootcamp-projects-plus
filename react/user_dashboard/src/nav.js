import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

export class Nav extends React.Component {
    render() {
        if (window.location.href === 'http://localhost:3000/') {
            var link = <Link to ='/login'>Login/Register</Link>
        } else if (window.location.href === 'http://localhost:3000/login') {
            var link = <Link to ='/'>Home</Link>
        } else if (window.location.href === 'http://localhost:3000/users') {
            var link = <Link to ='/'>Sign Out</Link>
        }
        return (
            <h4>{link}</h4>
        );
    }
}