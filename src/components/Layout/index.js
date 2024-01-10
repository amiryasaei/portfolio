import './index.scss';
import { NavBar } from '../NavBar/index.js'; 
import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => {
    return (
        <div className="App">
            <NavBar />
            <div className='page'><Outlet /></div> 
        </div>
     
    )
}

export default Layout