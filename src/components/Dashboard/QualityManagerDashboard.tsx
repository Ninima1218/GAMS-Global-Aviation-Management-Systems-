import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const QualityManagerDashboard: React.FC = () => {
  const qualityMetrics = [
    {
      label: 'Open Findings',
      value: 15,
      change: -3
    },
    {
      label: 'Scheduled Audits',
      value: 8,
      change: 2
    },
    {
      label: 'CPA Progress',
      value: '85%',
      change: 5
    },
    {
      label: 'Doc Reviews',
      value: 12,
      change: -1
    }
  ];

  return (
    <PermissionGate permission={Permission.MANAGE_QUALITY}>
      <BaseDashboard metrics={qualityMetrics}>
        {/* Audit Management Section */}
        <div className="dashboard-section">
          <h2>Audit Management</h2>
          <div className="audit-management">
            <div className="audit-calendar">
              <h3>Upcoming Audits</h3>
              <div className="audit-filters">
                <select className="filter-select">
                  <option value="all">All Audit Types</option>
                  <option value="internal">Internal</option>
                  <option value="external">External</option>
                  <option value="surveillance">Surveillance</option>
                </select>
                <select className="filter-select">
                  <option value="all">All Departments</option>
                  <option value="flight-ops">Flight Operations</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="ground-ops">Ground Operations</option>
                </select>
              </div>
              <table className="audit-table">
                <thead>
                  <tr>
                    <th>Audit ID</th>
                    <th>Type</th>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AUD-2024-023</td>
                    <td>Internal</td>
                    <td>Flight Ops</td>
                    <td>2024-03-15</td>
                    <td><span className="status-badge scheduled">Scheduled</span></td>
                    <td>
                      <button className="action-btn">View Plan</button>
                      <button className="action-btn">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>AUD-2024-024</td>
                    <td>Surveillance</td>
                    <td>Maintenance</td>
                    <td>2024-03-20</td>
                    <td><span className="status-badge in-progress">In Progress</span></td>
                    <td>
                      <button className="action-btn">Add Finding</button>
                      <button className="action-btn">Update</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Findings Tracking Section */}
        <div className="dashboard-section">
          <h2>Findings Management</h2>
          <div className="findings-management">
            <div className="findings-overview">
              <div className="chart-container">
                <h3>Findings by Department</h3>
                <div className="chart-placeholder">
                  Findings Distribution Chart
                </div>
              </div>
              <div className="findings-metrics">
                <div className="stat-card">
                  <h4>Finding Statistics</h4>
                  <div className="stat-grid">
                    <div className="stat-item">
                      <span className="stat-label">Level 1</span>
                      <span className="stat-value">2</span>
                      <span className="trend-indicator up">+1 this month</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Level 2</span>
                      <span className="stat-value">8</span>
                      <span className="trend-indicator down">-2 this month</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Observations</span>
                      <span className="stat-value">5</span>
                      <span className="trend-indicator down">-1 this month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="findings-grid">
              <h3>Recent Findings</h3>
              <div className="findings-filters">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search findings..."
                />
                <select className="filter-select">
                  <option value="all">All Levels</option>
                  <option value="level1">Level 1</option>
                  <option value="level2">Level 2</option>
                  <option value="observation">Observation</option>
                </select>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Finding ID</th>
                    <th>Level</th>
                    <th>Description</th>
                    <th>Department</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>F-2024-045</td>
                    <td><span className="level-badge level1">Level 1</span></td>
                    <td>Documentation control issue</td>
                    <td>Maintenance</td>
                    <td>2024-03-30</td>
                    <td><span className="status-badge open">Open</span></td>
                    <td>
                      <button className="action-btn">View</button>
                      <button className="action-btn">Track</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quality Performance Section */}
        <div className="dashboard-section">
          <h2>Quality Performance</h2>
          <div className="quality-performance">
            <div className="performance-grid">
              <div className="performance-card">
                <h4>Audit Program Status</h4>
                <div className="progress-container">
                  <div className="progress-item">
                    <span className="progress-label">Annual Program Progress</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '45%' }}></div>
                    </div>
                    <span className="progress-value">45% Complete</span>
                  </div>
                  <div className="progress-item">
                    <span className="progress-label">Finding Closure Rate</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '78%' }}></div>
                    </div>
                    <span className="progress-value">78%</span>
                  </div>
                </div>
              </div>
              <div className="performance-card">
                <h4>Department Compliance</h4>
                <div className="compliance-list">
                  <div className="compliance-item">
                    <span>Flight Operations</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '92%' }}></div>
                    </div>
                    <span>92%</span>
                  </div>
                  <div className="compliance-item">
                    <span>Maintenance</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '88%' }}></div>
                    </div>
                    <span>88%</span>
                  </div>
                  <div className="compliance-item">
                    <span>Ground Operations</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '95%' }}></div>
                    </div>
                    <span>95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document Review Section */}
        <div className="dashboard-section">
          <h2>Document Reviews</h2>
          <div className="document-reviews">
            <div className="review-actions">
              <button className="action-btn primary">Start New Review</button>
              <button className="action-btn">Generate Report</button>
            </div>
            <div className="review-list">
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <div className="doc-info">
                  <h4>Quality Manual Rev 2024-1</h4>
                  <p>Status: Under Review</p>
                </div>
                <span className="review-status pending">Pending Approval</span>
                <button className="action-btn">Review</button>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <div className="doc-info">
                  <h4>Internal Audit Procedure</h4>
                  <p>Status: Changes Requested</p>
                </div>
                <span className="review-status review">In Review</span>
                <button className="action-btn">View Comments</button>
              </div>
            </div>
          </div>
        </div>
      </BaseDashboard>
    </PermissionGate>
  );
}; 