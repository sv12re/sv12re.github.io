import React from 'react';
import {Outlet} from 'react-router-dom';
import Navigation from './Navigation';


const Layout = () => (
    <div className="CaSTL">
        <div className="CaSTL__header">
            <h1>CaSTL</h1>
            <Navigation />
        </div>
        <div className="CaSTL__content">
            <Outlet />
        </div>
        <div className="CaSTL__footer">

        </div>
    </div>
)

export default Layout;