import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>GAMS</h1>
      </div>
      <nav className="nav-menu">
        <NavLink to="/" className="nav-item">
          Dashboard
        </NavLink>
        <NavLink to="/reports" className="nav-item">
          Reports
        </NavLink>
        <NavLink to="/risk-assessment" className="nav-item">
          Risk Assessment
        </NavLink>
        <NavLink to="/training" className="nav-item">
          Training
        </NavLink>
      </nav>
    </aside>
  );
}; 