import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {

    return(
        <div class="nav-container">
            <nav>
                <Link classname="nav-link" to="/" >Home </Link>
                <Link classname="nav-link" to="/projects">Projects </Link>
                <Link classname="nav-link" to="/connect"> Connect </Link>
            </nav>
        </div>
    )
}

export default NavBar;