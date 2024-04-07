// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddExpense from './components/AddExpense';
import Sidebar from './components/Sidebar';
import { Menu } from '@material-ui/icons';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Router>
      <div className="app">
        <button className="menu-button" onClick={toggleSidebar}>
          <Menu />
        </button>
        <Sidebar showSidebar={showSidebar} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-expense" element={<AddExpense />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
