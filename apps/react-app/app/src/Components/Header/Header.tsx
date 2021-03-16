import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <span>
                    <NavLink to="/">Formula 1 stats</NavLink>
                </span>
            </div>
            <div className="top_menu">
                <div>
                    <a href="/#">Main</a>
                </div>
                <div>
                    <a href="/#">Href</a>
                </div>
                <div>
                    <a href="http://ergast.com/mrd/">Ergast Api</a>
                </div>
                <div>
                    <a href="/#">Contacts</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
