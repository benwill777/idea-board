import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class LoginPage extends Component {
    render() {
        return (
            <div>
                <Link to='/'> <button>Go Home </button></Link>
            </div>
        );
    }
}

export default LoginPage;