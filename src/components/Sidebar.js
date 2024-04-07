// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ showSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar ? 'visible' : ''}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-expense">Add Expense</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
