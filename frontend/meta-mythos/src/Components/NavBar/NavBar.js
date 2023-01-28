import React from "React"
import {Link, useNavigate } from "react-router-dom"

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
    </nav>
    )
}

export default Nav