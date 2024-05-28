// src/Components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;