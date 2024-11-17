import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
   
    const navItems = [
        { text: 'Home', path: '/' },
        { text: 'About', path: '/about' },
        { text: 'Projects', path: '/projects' },
        { text: 'Contact', path: '/contact' },
    ];

    return (
        <nav>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
