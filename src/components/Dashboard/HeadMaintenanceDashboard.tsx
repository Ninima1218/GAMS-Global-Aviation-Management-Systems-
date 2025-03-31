import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const HeadMaintenanceDashboard: React.FC = () => {
  const maintenanceMetrics = [
    {
      label: 'Aircraft in Service',
      value: 12,
      change: 1
    },
    {
      label: 'Maintenance Due',
      value: 3,
      change: -1
    },
    {
      label: 'Team Available',
      value: '95%',
      change: 2
    },
    {
      label: 'Open Issues',
      value: 5,
      change: -2
    }
  ];

  return (
    <PermissionGate permission={Permission.VIEW_DEPARTMENT_DATA}>
      <BaseDashboard metrics={maintenanceMetrics}>
        {/* Aircraft Maintenance Status */}
        <div className="dashboard-section">
          <h2>Aircraft Maintenance Status</h2>
          <div className="maintenance-status">
            <div className="status-filters">
              <select className="filter-select">
                <option value="all">All Aircraft</option>
                <option value="in-service">In Service</option>
                <option value="maintenance">In Maintenance</option>
                <option value="storage">In Storage</option>
              </select>
              <select className="filter-select">
                <option value="all">All Types</option>
                <option value="b737">B737</option>
                <option value="a320">A320</option>
                <option value="b777">B777</option>
              </select>
              <button className="action-btn primary">Schedule Maintenance</button>
            </div>
            <div className="aircraft-grid">
              <div className="aircraft-card">
                <div className="aircraft-header">
                  <h3>B737-800</h3>
                  <span className="status-badge in-service">In Service</span>
                </div>
                <div className="aircraft-info">
                  <div className="info-row">
                    <span>Registration:</span>
                    <span>VP-BXX</span>
                  </div>
                  <div className="info-row">
                    <span>Next Check:</span>
                    <span>2024-04-15</span>
                  </div>
                  <div className="info-row">
                    <span>Flight Hours:</span>
                    <span>2,450</span>
                  </div>
                </div>
                <div className="maintenance-info">
                  <h4>Recent Maintenance</h4>
                  <div className="maintenance-list">
                    <span>A-Check completed on 2024-02-15</span>
                    <span>Engine inspection on 2024-03-01</span>
                  </div>
                </div>
                <div className="aircraft-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Schedule Check</button>
                </div>
              </div>
              <div className="aircraft-card">
                <div className="aircraft-header">
                  <h3>A320-200</h3>
                  <span className="status-badge maintenance">In Maintenance</span>
                </div>
                <div className="aircraft-info">
                  <div className="info-row">
                    <span>Registration:</span>
                    <span>VP-BYY</span>
                  </div>
                  <div className="info-row">
                    <span>Check Type:</span>
                    <span>C-Check</span>
                  </div>
                  <div className="info-row">
                    <span>Progress:</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="maintenance-info">
                  <h4>Current Tasks</h4>
                  <div className="maintenance-list">
                    <span>Engine overhaul in progress</span>
                    <span>Landing gear inspection pending</span>
                  </div>
                </div>
                <div className="aircraft-actions">
                  <button className="action-btn">Update Status</button>
                  <button className="action-btn">View Tasks</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Issues */}
        <div className="dashboard-section">
          <h2>Technical Issues</h2>
          <div className="technical-issues">
            <div className="issues-header">
              <div className="issues-filters">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search issues..."
                />
                <select className="filter-select">
                  <option value="all">All Priorities</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <button className="action-btn">Create Issue</button>
            </div>
            <div className="issues-grid">
              <div className="issue-card">
                <div className="issue-header">
                  <h4>Engine Vibration</h4>
                  <span className="priority-badge high">High Priority</span>
                </div>
                <div className="issue-info">
                  <div className="info-row">
                    <span>Aircraft:</span>
                    <span>B737-800 (VP-BXX)</span>
                  </div>
                  <div className="info-row">
                    <span>Reported:</span>
                    <span>2024-03-15</span>
                  </div>
                  <div className="info-row">
                    <span>Status:</span>
                    <span className="status-badge in-progress">In Progress</span>
                  </div>
                </div>
                <div className="issue-actions">
                  <button className="action-btn">Update</button>
                  <button className="action-btn">Assign</button>
                </div>
              </div>
              <div className="issue-card">
                <div className="issue-header">
                  <h4>APU Maintenance</h4>
                  <span className="priority-badge medium">Medium Priority</span>
                </div>
                <div className="issue-info">
                  <div className="info-row">
                    <span>Aircraft:</span>
                    <span>A320 (VP-BYY)</span>
                  </div>
                  <div className="info-row">
                    <span>Reported:</span>
                    <span>2024-03-14</span>
                  </div>
                  <div className="info-row">
                    <span>Status:</span>
                    <span className="status-badge scheduled">Scheduled</span>
                  </div>
                </div>
                <div className="issue-actions">
                  <button className="action-btn">Schedule</button>
                  <button className="action-btn">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Management */}
        <div className="dashboard-section">
          <h2>Team Management</h2>
          <div className="team-management">
            <div className="team-header">
              <div className="team-filters">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search team members..."
                />
                <select className="filter-select">
                  <option value="all">All Roles</option>
                  <option value="engineer">Engineer</option>
                  <option value="technician">Technician</option>
                  <option value="inspector">Inspector</option>
                </select>
              </div>
              <button className="action-btn">Manage Schedule</button>
            </div>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-info">
                  <h4>Alex Johnson</h4>
                  <span className="role-badge">Lead Engineer</span>
                </div>
                <div className="team-stats">
                  <div className="stat-row">
                    <span>Current Task:</span>
                    <span>Engine Overhaul</span>
                  </div>
                  <div className="stat-row">
                    <span>Hours This Week:</span>
                    <span>32/40</span>
                  </div>
                  <div className="stat-row">
                    <span>Certifications:</span>
                    <span>B737, A320</span>
                  </div>
                </div>
                <div className="team-actions">
                  <button className="action-btn">View Schedule</button>
                  <button className="action-btn">Edit Details</button>
                </div>
              </div>
              <div className="team-card">
                <div className="team-info">
                  <h4>Maria Garcia</h4>
                  <span className="role-badge">Senior Technician</span>
                </div>
                <div className="team-stats">
                  <div className="stat-row">
                    <span>Current Task:</span>
                    <span>Landing Gear Inspection</span>
                  </div>
                  <div className="stat-row">
                    <span>Hours This Week:</span>
                    <span>28/40</span>
                  </div>
                  <div className="stat-row">
                    <span>Certifications:</span>
                    <span>B737, A320, B777</span>
                  </div>
                </div>
                <div className="team-actions">
                  <button className="action-btn">View Schedule</button>
                  <button className="action-btn">Edit Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Analytics */}
        <div className="dashboard-section">
          <h2>Performance Analytics</h2>
          <div className="performance-analytics">
            <div className="analytics-grid">
              <div className="analytics-card">
                <h3>Maintenance Efficiency</h3>
                <div className="chart-container">
                  <div className="chart-placeholder">
                    Maintenance Efficiency Chart
                  </div>
                </div>
                <div className="analytics-stats">
                  <div className="stat-item">
                    <span className="stat-label">Average Check Duration</span>
                    <span className="stat-value">4.2 days</span>
                    <span className="trend-indicator up">-0.3 days vs last month</span>
                  </div>
                </div>
              </div>
              <div className="analytics-card">
                <h3>Team Performance</h3>
                <div className="performance-metrics">
                  <div className="metric-item">
                    <span className="metric-label">Task Completion Rate</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '92%' }}></div>
                    </div>
                    <span className="metric-value">92%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Documentation Accuracy</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '95%' }}></div>
                    </div>
                    <span className="metric-value">95%</span>
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