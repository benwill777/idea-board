import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage
    extends Component {
    render() {
        return (
            <div>
                <Link to='/login'> <button>Login Here</button></Link>
            </div>
        );
    }
}

export default HomePage
    ;