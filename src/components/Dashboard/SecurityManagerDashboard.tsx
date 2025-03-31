import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const SecurityManagerDashboard: React.FC = () => {
  const securityMetrics = [
    {
      label: 'Security Reports',
      value: 5,
      change: -2
    },
    {
      label: 'Active Alerts',
      value: 2,
      change: 1
    },
    {
      label: 'ID Breaches',
      value: 0,
      change: -1
    },
    {
      label: 'Pending Actions',
      value: 3,
      change: 0
    }
  ];

  return (
    <PermissionGate permission={Permission.MANAGE_SECURITY_REPORTS}>
      <BaseDashboard metrics={securityMetrics}>
        {/* Security Reports Section */}
        <div className="dashboard-section">
          <h2>Security Reports</h2>
          <div className="security-reports">
            <div className="report-filters">
              <select className="filter-select">
                <option value="all">All Categories</option>
                <option value="id-breach">ID Breach</option>
                <option value="ramp-security">Ramp Security</option>
                <option value="access-control">Access Control</option>
              </select>
              <select className="filter-select">
                <option value="all">All Status</option>
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <table className="reports-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#SEC001</td>
                  <td>2024-03-25</td>
                  <td>Ramp Security</td>
                  <td>Terminal A</td>
                  <td><span className="status-badge pending">Open</span></td>
                  <td>
                    <button className="action-btn">View</button>
                    <button className="action-btn">Assign</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Security Trends Section */}
        <div className="dashboard-section">
          <h2>Security Trends</h2>
          <div className="security-trends">
            <div className="trend-chart">
              <h3>Incidents by Category</h3>
              <div className="chart-placeholder">
                {/* Chart component will be added here */}
              </div>
            </div>
            <div className="trend-stats">
              <div className="stat-card">
                <h4>Most Common Issue</h4>
                <p>Ramp Access Violations</p>
                <span className="trend-indicator up">+12% this month</span>
              </div>
              <div className="stat-card">
                <h4>Best Performing Area</h4>
                <p>ID Management</p>
                <span className="trend-indicator down">-25% incidents</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Communications Section */}
        <div className="dashboard-section">
          <h2>Security Communications</h2>
          <div className="security-comms">
            <div className="comms-actions">
              <button className="action-btn primary">Create Alert</button>
              <button className="action-btn">Send Notification</button>
            </div>
            <div className="active-alerts">
              <h3>Active Alerts</h3>
              <ul className="alert-list">
                <li className="alert-item high">
                  <span className="alert-priority">High</span>
                  <span className="alert-message">Enhanced access control measures in Terminal B</span>
                  <span className="alert-time">2h ago</span>
                </li>
                <li className="alert-item medium">
                  <span className="alert-priority">Medium</span>
                  <span className="alert-message">Updated security procedure for night shifts</span>
                  <span className="alert-time">5h ago</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Security Manuals & Procedures */}
        <div className="dashboard-section">
          <h2>Security Manuals & Procedures</h2>
          <div className="security-docs">
            <div className="docs-search">
              <input type="text" placeholder="Search in manuals..." className="search-input" />
            </div>
            <div className="docs-list">
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <div className="doc-info">
                  <h4>Airport Security Manual</h4>
                  <p>Last updated: 2024-03-01</p>
                </div>
                <button className="action-btn">View</button>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <div className="doc-info">
                  <h4>Emergency Response Procedures</h4>
                  <p>Last updated: 2024-02-15</p>
                </div>
                <button className="action-btn">View</button>
              </div>
            </div>
          </div>
        </div>
      </BaseDashboard>
    </PermissionGate>
  );
}; 