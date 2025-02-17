// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4">
      <ul>
        <li><Link to="/dashboard" className="block py-2 px-4">Dashboard</Link></li>
        <li><Link to="/inventory" className="block py-2 px-4">Inventory</Link></li>
        <li><Link to="/sales" className="block py-2 px-4">Sales</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
