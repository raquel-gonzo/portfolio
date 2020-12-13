import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {

    return(
        <div class="nav-container">
            <nav>
                <Link to="/" >Home </Link>
                <Link to="/projects">Projects </Link>
                <Link to="/connect"> Connect </Link>
            </nav>
        </div>
    )
}

export default NavBar;