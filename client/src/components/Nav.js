import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

export const Nav = () => {

    const [darkMode, setDarkMode] = useDarkMode('Dark Mode', false);

    const toggle = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }

    return(
        <nav className="navbar">
            <h1 className="nav-title">Women's Soccer Players</h1>
            <button onClick={toggle} className="btn">Change</button>
        </nav>
    )
}