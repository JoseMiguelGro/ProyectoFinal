import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">LOGIN</Link></li>
                <li><Link to="/seccion1">DAN DA DAN</Link></li>
                <li><Link to="/seccion2">My Dress-Up Darling</Link></li>
                <li><Link to="/seccion3">BLUELOCK</Link></li>
                <li><Link to="/seccion4">Rent-a-Girlfriend</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;