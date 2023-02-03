import React from 'react';
import {Outlet, Link} from 'react-router-dom';

const Layout = () => (
    <div className="CaSTL">
        <div className="CaSTL__header">
            <h1>CaSTL</h1>
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
        </div>
        <div className="CaSTL__content">
            <Outlet />
        </div>
        <div className="CaSTL__footer">

        </div>
    </div>
)

export default Layout;