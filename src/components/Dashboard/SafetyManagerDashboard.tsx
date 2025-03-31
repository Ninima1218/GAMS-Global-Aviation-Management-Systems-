import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const SafetyManagerDashboard: React.FC = () => {
  const safetyMetrics = [
    {
      label: 'Safety Reports',
      value: 125,
      change: -15
    },
    {
      label: 'Open Investigations',
      value: 8,
      change: 2
    },
    {
      label: 'Risk Level',
      value: 2.1,
      change: -0.3
    },
    {
      label: 'Training Compliance',
      value: 98,
      change: 1.5
    }
  ];

  return (
    <PermissionGate permission={Permission.MANAGE_SAFETY}>
      <BaseDashboard metrics={safetyMetrics}>
        {/* Safety Reports Overview Section */}
        <div className="dashboard-section">
          <h2>Safety Reports Overview</h2>
          <div className="reports-list">
            <div className="reports-filters">
              <select className="filter-select">
                <option value="all">All Reports</option>
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
              <select className="filter-select">
                <option value="all">All Departments</option>
                <option value="flight-ops">Flight Operations</option>
                <option value="maintenance">Maintenance</option>
                <option value="ground-ops">Ground Operations</option>
              </select>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search reports..."
              />
            </div>
            <table>
              <thead>
                <tr>
                  <th>Report ID</th>
                  <th>Type</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Submitted</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SR-2024-089</td>
                  <td>Incident</td>
                  <td>Flight Ops</td>
                  <td><span className="status-badge in-progress">In Progress</span></td>
                  <td><span className="alert-priority high">High</span></td>
                  <td>2024-02-15</td>
                  <td>
                    <button className="action-btn">View</button>
                    <button className="action-btn">Update</button>
                  </td>
                </tr>
                <tr>
                  <td>SR-2024-088</td>
                  <td>Hazard</td>
                  <td>Maintenance</td>
                  <td><span className="status-badge pending">Pending</span></td>
                  <td><span className="alert-priority medium">Medium</span></td>
                  <td>2024-02-14</td>
                  <td>
                    <button className="action-btn">View</button>
                    <button className="action-btn">Assign</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk Analysis Section */}
        <div className="dashboard-section">
          <h2>Risk Analysis</h2>
          <div className="risk-analysis">
            <div className="chart-container">
              <h3>Risk Distribution by Category</h3>
              <div className="chart-placeholder">
                Risk Distribution Chart
              </div>
            </div>
            <div className="risk-metrics">
              <div className="stat-card">
                <h4>Top Risk Areas</h4>
                <ul>
                  <li>
                    <span className="risk-area">Ground Operations</span>
                    <span className="risk-value high">High (4.2)</span>
                  </li>
                  <li>
                    <span className="risk-area">Weather Related</span>
                    <span className="risk-value medium">Medium (3.1)</span>
                  </li>
                  <li>
                    <span className="risk-area">Maintenance</span>
                    <span className="risk-value medium">Medium (2.8)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Items Section */}
        <div className="dashboard-section">
          <h2>Action Items</h2>
          <div className="action-items">
            <div className="action-item urgent">
              <h4>High Priority</h4>
              <ul>
                <li>Review incident report SR-2024-089</li>
                <li>Update risk assessment for ground operations</li>
                <li>Schedule safety committee meeting</li>
              </ul>
            </div>
            <div className="action-item">
              <h4>Upcoming Tasks</h4>
              <ul>
                <li>Monthly safety report due in 5 days</li>
                <li>Safety training review for Q1</li>
                <li>Update emergency response procedures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Safety Performance Trends */}
        <div className="dashboard-section">
          <h2>Safety Performance Trends</h2>
          <div className="performance-trends">
            <div className="chart-container">
              <h3>Incident Rate Trend</h3>
              <div className="chart-placeholder">
                Incident Rate Chart
              </div>
            </div>
            <div className="trend-metrics">
              <div className="stat-card">
                <h4>Key Indicators</h4>
                <div className="performance-stats">
                  <div className="stat-item">
                    <span className="stat-label">Incident Rate (per 1000 FH)</span>
                    <span className="stat-value">0.8</span>
                    <span className="trend-indicator down">-0.2 vs prev. month</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Average Response Time</span>
                    <span className="stat-value">4.2h</span>
                    <span className="trend-indicator down">-1.1h vs target</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseDashboard>
    </PermissionGate>
  );
}; 