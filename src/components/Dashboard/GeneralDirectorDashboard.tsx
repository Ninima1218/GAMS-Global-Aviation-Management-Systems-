import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const GeneralDirectorDashboard: React.FC = () => {
  const executiveMetrics = [
    {
      label: 'Safety Rating',
      value: '4.8/5',
      change: 0.2
    },
    {
      label: 'On-Time Performance',
      value: '96%',
      change: -1.5
    },
    {
      label: 'Fleet Availability',
      value: '92%',
      change: 2.1
    },
    {
      label: 'Compliance Rate',
      value: '99%',
      change: 0
    }
  ];

  return (
    <PermissionGate permission={Permission.VIEW_EXECUTIVE_DASHBOARD}>
      <BaseDashboard metrics={executiveMetrics}>
        {/* Strategic Overview Section */}
        <div className="dashboard-section">
          <h2>Strategic Overview</h2>
          <div className="strategic-overview">
            <div className="overview-grid">
              <div className="overview-card">
                <h3>Safety Performance</h3>
                <div className="performance-stats">
                  <div className="stat-item">
                    <span className="stat-label">Safety Reports</span>
                    <span className="stat-value">125</span>
                    <span className="trend-indicator down">-15% vs prev. month</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Open Findings</span>
                    <span className="stat-value">8</span>
                    <span className="trend-indicator up">+2 this month</span>
                  </div>
                </div>
              </div>
              <div className="overview-card">
                <h3>Operational Efficiency</h3>
                <div className="performance-stats">
                  <div className="stat-item">
                    <span className="stat-label">Aircraft Utilization</span>
                    <span className="stat-value">12.5 hrs/day</span>
                    <span className="trend-indicator up">+0.5 hrs vs target</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Maintenance TAT</span>
                    <span className="stat-value">3.2 days</span>
                    <span className="trend-indicator down">-0.5 days vs target</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Department Performance Section */}
        <div className="dashboard-section">
          <h2>Department Performance</h2>
          <div className="department-performance">
            <div className="performance-table-container">
              <table className="performance-table">
                <thead>
                  <tr>
                    <th>Department</th>
                    <th>KPI Status</th>
                    <th>Critical Issues</th>
                    <th>Projects</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Flight Operations</td>
                    <td><span className="status-badge completed">On Track</span></td>
                    <td>0</td>
                    <td>4 Active</td>
                    <td><button className="action-btn">View Details</button></td>
                  </tr>
                  <tr>
                    <td>Maintenance</td>
                    <td><span className="status-badge in-progress">At Risk</span></td>
                    <td>2</td>
                    <td>3 Active</td>
                    <td><button className="action-btn">View Details</button></td>
                  </tr>
                  <tr>
                    <td>Safety</td>
                    <td><span className="status-badge completed">On Track</span></td>
                    <td>1</td>
                    <td>2 Active</td>
                    <td><button className="action-btn">View Details</button></td>
                  </tr>
                  <tr>
                    <td>Quality</td>
                    <td><span className="status-badge completed">On Track</span></td>
                    <td>0</td>
                    <td>3 Active</td>
                    <td><button className="action-btn">View Details</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Executive Actions Section */}
        <div className="dashboard-section">
          <h2>Executive Actions</h2>
          <div className="executive-actions">
            <div className="action-cards">
              <div className="action-card pending">
                <h4>Pending Approvals</h4>
                <ul>
                  <li>
                    <span className="action-title">Annual Safety Program Review</span>
                    <span className="action-meta">Requested by: Safety Manager</span>
                    <button className="action-btn">Review</button>
                  </li>
                  <li>
                    <span className="action-title">Q2 Budget Allocation</span>
                    <span className="action-meta">Requested by: Finance</span>
                    <button className="action-btn">Review</button>
                  </li>
                </ul>
              </div>
              <div className="action-card">
                <h4>Recent Updates</h4>
                <ul>
                  <li>
                    <span className="action-title">Monthly Safety Review Completed</span>
                    <span className="action-meta">2 days ago</span>
                  </li>
                  <li>
                    <span className="action-title">New Aircraft Delivery Schedule Confirmed</span>
                    <span className="action-meta">1 week ago</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Overview Section */}
        <div className="dashboard-section">
          <h2>Compliance Overview</h2>
          <div className="compliance-overview">
            <div className="compliance-grid">
              <div className="compliance-card">
                <h4>Regulatory Compliance</h4>
                <div className="compliance-chart">
                  <div className="chart-placeholder">
                    Compliance Rate Chart
                  </div>
                </div>
                <div className="compliance-stats">
                  <div className="stat-item">
                    <span className="stat-label">Open Audit Findings</span>
                    <span className="stat-value">3</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Due Responses</span>
                    <span className="stat-value">1</span>
                  </div>
                </div>
              </div>
              <div className="compliance-card">
                <h4>Documentation Status</h4>
                <div className="doc-status-list">
                  <div className="doc-status-item">
                    <span className="doc-type">Manuals</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '95%' }}></div>
                    </div>
                    <span className="status-value">95% Up to date</span>
                  </div>
                  <div className="doc-status-item">
                    <span className="doc-type">Certificates</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '100%' }}></div>
                    </div>
                    <span className="status-value">100% Valid</span>
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