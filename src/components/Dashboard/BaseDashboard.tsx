import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { DashboardMetric } from '../../types/dashboard';
import { RoleSwitcher } from '../Auth/RoleSwitcher';
import './Dashboard.css';

interface DashboardProps {
  metrics?: DashboardMetric[];
  children?: React.ReactNode;
}

export const BaseDashboard: React.FC<DashboardProps> = ({ metrics, children }) => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <RoleSwitcher />
      <div className="dashboard-header">
        <h1>My Dashboard</h1>
        <div className="user-info">
          <span>Hi, {user?.firstName}!</span>
          <span className="role-badge">{user?.role.replace(/_/g, ' ')}</span>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* KPI Section */}
        {metrics && metrics.length > 0 && (
          <div className="dashboard-section kpi-section">
            <h2>Key Performance Indicators</h2>
            <div className="kpi-grid">
              {metrics.map((metric, index) => (
                <div key={index} className="kpi-card">
                  <div className="kpi-label">{metric.label}</div>
                  <div className="kpi-value">{metric.value}</div>
                  {metric.change !== undefined && (
                    <div className={`kpi-change ${metric.change >= 0 ? 'positive' : 'negative'}`}>
                      {metric.change >= 0 ? '↑' : '↓'} {Math.abs(metric.change)}%
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Issues Report Section */}
        <div className="dashboard-section issues-section">
          <h2>Reported Issues</h2>
          <div className="issues-gauge">
            {/* Placeholder for gauge visualization */}
            <div className="gauge-chart">
              <div className="gauge-value">7</div>
              <div className="gauge-label">Issues last 7 days</div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="dashboard-section map-section">
          <h2>Locations On Map</h2>
          <div className="map-container">
            {/* Map component will be added here */}
          </div>
        </div>

        {/* Children Components */}
        {children}
      </div>

      {/* Action Buttons */}
      <div className="dashboard-actions">
        <button className="action-btn">Save My Dashboard</button>
        <button className="action-btn secondary">Reset My Dashboard</button>
      </div>
    </div>
  );
}; 