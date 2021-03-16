import React from 'react';
import './LeftSidebar.css';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <div>
            <ul className="left_menu">
                <li>
                    <NavLink to="/current-season">Сезон 2020 года</NavLink>
                </li>
                <li>
                    <NavLink to="/race-schedule">Календари гонок</NavLink>
                </li>
                <li>
                    <NavLink to="/circuits">Трассы</NavLink>
                </li>
                <li>Season List</li>
                <li>Race Results</li>
                <li>Qualifying Results</li>
                <li>Standings</li>
                <li>Driver Information</li>
                <li>Constructor Information</li>
                <li>
                    <NavLink to="/news">News</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default LeftSidebar;
