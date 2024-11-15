// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaExchangeAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4 text-white flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Nextap</h1>
      <div className="flex space-x-6">
        <Link to="/dashboard" className="flex items-center hover:text-indigo-300">
          <FaHome className="mr-2" />
          Dashboard
        </Link>
        <Link to="/profile" className="flex items-center hover:text-indigo-300">
          <FaUser className="mr-2" />
          Profile
        </Link>
        <Link to="/sendreceive" className="flex items-center hover:text-indigo-300">
          <FaExchangeAlt className="mr-2" />
          Send/Receive
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;