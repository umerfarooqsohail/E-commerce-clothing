import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <NavLink className="header-logo-container" to="/"><img className="header-logo" src={process.env.PUBLIC_URL+"/image/IMAG0219.png"} alt="logo"/></NavLink>
            <div className="header-options">
                <NavLink className="header-option" to="/shop">Shop</NavLink>
                <NavLink className="header-option" to="/shop">Contact</NavLink>
                <NavLink className="header-option" to="/signinsignout">Signup</NavLink>
            </div>
        </div>
    );
}

export default Header;
