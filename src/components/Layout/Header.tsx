import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { RoleSwitcher } from '../Auth/RoleSwitcher';
import '../../styles/Header.css';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <header className="header">
      <div className="header-left">
        <h2>Airline Management System</h2>
      </div>
      <div className="header-right">
        <RoleSwitcher />
        <div className="user-info">
          <span className="user-name">{user.firstName} {user.lastName}</span>
          <span className="user-role">{user.role}</span>
        </div>
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
}; 