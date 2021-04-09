import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <Link to="/">
                    <figure>
                        <img src="/" alt="logo" />
                    </figure>
                    <span>Lucas</span>
                    <span>Madrigal</span>
                </Link>
            </div>
        )
    }
}

export default Navbar;