import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/other">Other</Link>
            </li>
            <li>
                <Link to="/404">404</Link>
            </li>
        </ul>
    </nav>
)

export default Navigation;