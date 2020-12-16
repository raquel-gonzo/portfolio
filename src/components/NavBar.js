import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {

    return(
        <div className="nav-container">
            <nav>
                <Link className="nav-link" to="/" >Home </Link>
                <Link className="nav-link" to="/projects">Projects </Link>
                <Link className="nav-link" to="/connect"> Connect </Link>
            </nav>
        </div>
    )
}

export default NavBar;