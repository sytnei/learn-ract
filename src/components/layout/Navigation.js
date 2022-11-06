import React from 'react';
import { Link } from 'react-router-dom';


function Navigation({ isLogged, setIsLogged }) {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
            <li>
                <Link to="/courses">Courses</Link>
            </li>
            {!isLogged && (
                <li>
                    <Link to="/login">Login</Link>
                </li>)}
            {isLogged && (
                <li>
                    <Link to="#" onClick={() => { setIsLogged(false) }}>Log out</Link>
                </li>)}
        </ul>
    );
}

export default Navigation;