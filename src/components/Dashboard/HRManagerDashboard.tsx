import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const HRManagerDashboard: React.FC = () => {
  const hrMetrics = [
    {
      label: 'Total Staff',
      value: 450,
      change: 5
    },
    {
      label: 'Training Due',
      value: 28,
      change: -3
    },
    {
      label: 'Certifications',
      value: '92%',
      change: 2.5
    },
    {
      label: 'Open Positions',
      value: 12,
      change: 3
    }
  ];

  return (
    <PermissionGate permission={Permission.MANAGE_TOP_LEVEL_USERS}>
      <BaseDashboard metrics={hrMetrics}>
        {/* Personnel Overview Section */}
        <div className="dashboard-section">
          <h2>Personnel Overview</h2>
          <div className="personnel-overview">
            <div className="department-stats">
              <h3>Staff Distribution</h3>
              <div className="stats-grid">
                <div className="stat-card">
                  <h4>Flight Operations</h4>
                  <div className="stat-details">
                    <span className="stat-value">180</span>
                    <div className="stat-breakdown">
                      <div>Pilots: 120</div>
                      <div>Cabin Crew: 60</div>
                    </div>
                  </div>
                </div>
                <div className="stat-card">
                  <h4>Technical</h4>
                  <div className="stat-details">
                    <span className="stat-value">150</span>
                    <div className="stat-breakdown">
                      <div>Engineers: 80</div>
                      <div>Technicians: 70</div>
                    </div>
                  </div>
                </div>
                <div className="stat-card">
                  <h4>Ground Operations</h4>
                  <div className="stat-details">
                    <span className="stat-value">120</span>
                    <div className="stat-breakdown">
                      <div>Handlers: 90</div>
                      <div>Support: 30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Management Section */}
        <div className="dashboard-section">
          <h2>Training Management</h2>
          <div className="training-management">
            <div className="training-filters">
              <select className="filter-select">
                <option value="all">All Departments</option>
                <option value="flight-ops">Flight Operations</option>
                <option value="technical">Technical</option>
                <option value="ground-ops">Ground Operations</option>
              </select>
              <select className="filter-select">
                <option value="all">All Training Types</option>
                <option value="initial">Initial</option>
                <option value="recurrent">Recurrent</option>
                <option value="special">Special Qualification</option>
              </select>
            </div>
            <div className="training-calendar">
              <h3>Upcoming Training Sessions</h3>
              <table className="training-table">
                <thead>
                  <tr>
                    <th>Training</th>
                    <th>Department</th>
                    <th>Date</th>
                    <th>Participants</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SMS Recurrent</td>
                    <td>All Departments</td>
                    <td>2024-03-20</td>
                    <td>45/50</td>
                    <td><span className="status-badge scheduled">Scheduled</span></td>
                    <td>
                      <button className="action-btn">Details</button>
                      <button className="action-btn">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Type Rating B737</td>
                    <td>Flight Ops</td>
                    <td>2024-03-25</td>
                    <td>12/12</td>
                    <td><span className="status-badge in-progress">In Progress</span></td>
                    <td>
                      <button className="action-btn">Track</button>
                      <button className="action-btn">Update</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Competency Tracking Section */}
        <div className="dashboard-section">
          <h2>Competency Management</h2>
          <div className="competency-tracking">
            <div className="competency-overview">
              <div className="chart-container">
                <h3>Competency Levels by Department</h3>
                <div className="chart-placeholder">
                  Competency Distribution Chart
                </div>
              </div>
              <div className="certification-status">
                <h3>Certification Status</h3>
                <div className="cert-stats">
                  <div className="cert-item">
                    <span className="cert-label">Valid Certificates</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '92%' }}></div>
                    </div>
                    <span className="cert-value">92%</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-label">Expiring in 30 Days</span>
                    <div className="progress-bar">
                      <div className="progress warning" style={{ width: '15%' }}></div>
                    </div>
                    <span className="cert-value">15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recruitment Section */}
        <div className="dashboard-section">
          <h2>Recruitment</h2>
          <div className="recruitment-tracking">
            <div className="recruitment-actions">
              <button className="action-btn primary">Post New Position</button>
              <button className="action-btn">View Applications</button>
            </div>
            <div className="positions-list">
              <h3>Open Positions</h3>
              <table className="positions-table">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Department</th>
                    <th>Applications</th>
                    <th>Status</th>
                    <th>Posted Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>B737 Captain</td>
                    <td>Flight Ops</td>
                    <td>15</td>
                    <td><span className="status-badge active">Active</span></td>
                    <td>2024-02-15</td>
                    <td>
                      <button className="action-btn">Review</button>
                      <button className="action-btn">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Line Maintenance Engineer</td>
                    <td>Technical</td>
                    <td>8</td>
                    <td><span className="status-badge active">Active</span></td>
                    <td>2024-02-20</td>
                    <td>
                      <button className="action-btn">Review</button>
                      <button className="action-btn">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </BaseDashboard>
    </PermissionGate>
  );
}; 