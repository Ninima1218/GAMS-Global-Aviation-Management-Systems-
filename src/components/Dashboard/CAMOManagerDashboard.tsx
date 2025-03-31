import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const CAMOManagerDashboard: React.FC = () => {
  const camoMetrics = [
    {
      label: 'Due Maintenance',
      value: 8,
      change: 2
    },
    {
      label: 'Active AOG',
      value: 1,
      change: 0
    },
    {
      label: 'Open AD/SB',
      value: 5,
      change: -2
    },
    {
      label: 'Expiring Certs',
      value: 3,
      change: 1
    }
  ];

  return (
    <PermissionGate permission={Permission.MANAGE_MAINTENANCE}>
      <BaseDashboard metrics={camoMetrics}>
        {/* Aircraft Status Section */}
        <div className="dashboard-section">
          <h2>Aircraft Status Overview</h2>
          <div className="aircraft-status">
            <div className="status-filters">
              <select className="filter-select">
                <option value="all">All Aircraft</option>
                <option value="in-service">In Service</option>
                <option value="maintenance">In Maintenance</option>
                <option value="aog">AOG</option>
              </select>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search by registration..."
              />
            </div>
            <table className="status-table">
              <thead>
                <tr>
                  <th>Registration</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Next Check</th>
                  <th>Hours/Cycles</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RA-12345</td>
                  <td>B737-800</td>
                  <td><span className="status-badge in-service">In Service</span></td>
                  <td>A-Check (15d)</td>
                  <td>2500/1200</td>
                  <td>
                    <button className="action-btn">Details</button>
                    <button className="action-btn">Schedule</button>
                  </td>
                </tr>
                <tr>
                  <td>RA-67890</td>
                  <td>A320</td>
                  <td><span className="status-badge maintenance">Maintenance</span></td>
                  <td>C-Check (In Progress)</td>
                  <td>5200/2800</td>
                  <td>
                    <button className="action-btn">Details</button>
                    <button className="action-btn">Update</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Maintenance Planning Section */}
        <div className="dashboard-section">
          <h2>Maintenance Planning</h2>
          <div className="maintenance-planning">
            <div className="planning-chart">
              <h3>Upcoming Maintenance Events</h3>
              <div className="chart-placeholder">
                {/* Timeline chart will be added here */}
              </div>
            </div>
            <div className="planning-tasks">
              <div className="task-card urgent">
                <h4>Critical Tasks</h4>
                <ul>
                  <li>AD 2024-02 Implementation (Due: 5d)</li>
                  <li>RA-12345 A-Check Planning</li>
                  <li>Engine LLP Replacement RA-67890</li>
                </ul>
              </div>
              <div className="task-card">
                <h4>Scheduled Tasks</h4>
                <ul>
                  <li>Weekly Reliability Report</li>
                  <li>Monthly Utilization Review</li>
                  <li>Quarterly Maintenance Planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Documentation Section */}
        <div className="dashboard-section">
          <h2>Technical Documentation</h2>
          <div className="tech-docs">
            <div className="docs-actions">
              <button className="action-btn primary">Upload Document</button>
              <button className="action-btn">Request Approval</button>
            </div>
            <div className="docs-list">
              <div className="doc-item">
                <span className="doc-icon">📋</span>
                <div className="doc-info">
                  <h4>Aircraft Maintenance Program Rev.5</h4>
                  <p>Status: Under Review</p>
                </div>
                <button className="action-btn">Review</button>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📋</span>
                <div className="doc-info">
                  <h4>MEL Revision 2024-1</h4>
                  <p>Status: Approved</p>
                </div>
                <button className="action-btn">View</button>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Monitoring Section */}
        <div className="dashboard-section">
          <h2>Compliance Monitoring</h2>
          <div className="compliance-monitor">
            <div className="compliance-stats">
              <div className="stat-card">
                <h4>AD Compliance</h4>
                <p>98.5%</p>
                <span className="trend-indicator up">+0.5% this month</span>
              </div>
              <div className="stat-card">
                <h4>SB Implementation</h4>
                <p>85%</p>
                <span className="trend-indicator down">-2% this month</span>
              </div>
              <div className="stat-card">
                <h4>Documentation Status</h4>
                <p>95%</p>
                <span className="trend-indicator up">+1% this month</span>
              </div>
            </div>
            <div className="findings-list">
              <h3>Recent Findings</h3>
              <ul className="alert-list">
                <li className="alert-item medium">
                  <span className="alert-priority">Medium</span>
                  <span className="alert-message">Component life tracking discrepancy found</span>
                  <span className="alert-time">1d ago</span>
                </li>
                <li className="alert-item low">
                  <span className="alert-priority">Low</span>
                  <span className="alert-message">Documentation update needed for new procedure</span>
                  <span className="alert-time">3d ago</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </BaseDashboard>
    </PermissionGate>
  );
}; 