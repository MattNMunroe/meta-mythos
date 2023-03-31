import React from "react"
import {Link, useNavigate } from "react-router-dom"
import "./NavBar.scss"

const Nav = () => {
    return (
    <nav>
        <Link className="nav-link" to="/">
            Home
        </Link>
        <div>
            <Link className="nav-link" to='/about'>
                About
            </Link>
        </div>
        <div>
            <Link className="deities" to='/deities'>
                Deity Guide
            </Link>
        </div>
    </nav>
    )
}

export default Nav