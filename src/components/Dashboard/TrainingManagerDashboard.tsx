import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const TrainingManagerDashboard: React.FC = () => {
  const trainingMetrics = [
    {
      label: 'Active Courses',
      value: 12,
      change: 2
    },
    {
      label: 'Students',
      value: 245,
      change: 15
    },
    {
      label: 'Completion Rate',
      value: '88%',
      change: 3.5
    },
    {
      label: 'Upcoming Sessions',
      value: 8,
      change: -2
    }
  ];

  return (
    <PermissionGate permission={Permission.MANAGE_TRAINING}>
      <BaseDashboard metrics={trainingMetrics}>
        {/* Training Programs Overview */}
        <div className="dashboard-section">
          <h2>Training Programs</h2>
          <div className="training-programs">
            <div className="program-filters">
              <select className="filter-select">
                <option value="all">All Programs</option>
                <option value="initial">Initial Training</option>
                <option value="recurrent">Recurrent Training</option>
                <option value="special">Special Qualifications</option>
              </select>
              <select className="filter-select">
                <option value="all">All Departments</option>
                <option value="flight-ops">Flight Operations</option>
                <option value="maintenance">Maintenance</option>
                <option value="ground-ops">Ground Operations</option>
              </select>
              <button className="action-btn primary">Create Program</button>
            </div>
            <div className="programs-grid">
              <div className="program-card">
                <div className="program-header">
                  <h3>Initial Type Rating B737</h3>
                  <span className="status-badge active">Active</span>
                </div>
                <div className="program-stats">
                  <div className="stat-row">
                    <span>Current Students:</span>
                    <span>24</span>
                  </div>
                  <div className="stat-row">
                    <span>Progress:</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="program-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Edit Program</button>
                </div>
              </div>
              <div className="program-card">
                <div className="program-header">
                  <h3>SMS Recurrent Training</h3>
                  <span className="status-badge scheduled">Scheduled</span>
                </div>
                <div className="program-stats">
                  <div className="stat-row">
                    <span>Enrolled:</span>
                    <span>156</span>
                  </div>
                  <div className="stat-row">
                    <span>Progress:</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="program-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Edit Program</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Schedule Section */}
        <div className="dashboard-section">
          <h2>Course Schedule</h2>
          <div className="course-schedule">
            <div className="schedule-calendar">
              <div className="calendar-header">
                <h3>Upcoming Sessions</h3>
                <button className="action-btn">Schedule New Session</button>
              </div>
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Instructor</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Capacity</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CRM Workshop</td>
                    <td>John Smith</td>
                    <td>2024-03-18</td>
                    <td>Training Center 1</td>
                    <td>15/20</td>
                    <td><span className="status-badge scheduled">Scheduled</span></td>
                    <td>
                      <button className="action-btn">Manage</button>
                      <button className="action-btn">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Emergency Procedures</td>
                    <td>Sarah Johnson</td>
                    <td>2024-03-20</td>
                    <td>Simulator Bay 2</td>
                    <td>12/12</td>
                    <td><span className="status-badge completed">Full</span></td>
                    <td>
                      <button className="action-btn">Manage</button>
                      <button className="action-btn">Wait List</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Instructor Management Section */}
        <div className="dashboard-section">
          <h2>Instructor Management</h2>
          <div className="instructor-management">
            <div className="instructor-header">
              <div className="instructor-filters">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search instructors..."
                />
                <select className="filter-select">
                  <option value="all">All Qualifications</option>
                  <option value="type-rating">Type Rating</option>
                  <option value="ground">Ground School</option>
                  <option value="sim">Simulator</option>
                </select>
              </div>
              <button className="action-btn primary">Add Instructor</button>
            </div>
            <div className="instructor-grid">
              <div className="instructor-card">
                <div className="instructor-info">
                  <h4>John Smith</h4>
                  <span className="qualification-badge">Type Rating TRI/TRE</span>
                </div>
                <div className="instructor-stats">
                  <div className="stat-row">
                    <span>Hours This Month:</span>
                    <span>45/80</span>
                  </div>
                  <div className="stat-row">
                    <span>Student Rating:</span>
                    <span>4.8/5.0</span>
                  </div>
                </div>
                <div className="instructor-schedule">
                  <h5>Next Sessions:</h5>
                  <ul>
                    <li>CRM Workshop - Mar 18</li>
                    <li>Type Rating Course - Mar 22</li>
                  </ul>
                </div>
                <div className="instructor-actions">
                  <button className="action-btn">View Schedule</button>
                  <button className="action-btn">Edit Profile</button>
                </div>
              </div>
              <div className="instructor-card">
                <div className="instructor-info">
                  <h4>Sarah Johnson</h4>
                  <span className="qualification-badge">Ground Instructor</span>
                </div>
                <div className="instructor-stats">
                  <div className="stat-row">
                    <span>Hours This Month:</span>
                    <span>38/80</span>
                  </div>
                  <div className="stat-row">
                    <span>Student Rating:</span>
                    <span>4.9/5.0</span>
                  </div>
                </div>
                <div className="instructor-schedule">
                  <h5>Next Sessions:</h5>
                  <ul>
                    <li>Emergency Procedures - Mar 20</li>
                    <li>Safety Training - Mar 25</li>
                  </ul>
                </div>
                <div className="instructor-actions">
                  <button className="action-btn">View Schedule</button>
                  <button className="action-btn">Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Analytics Section */}
        <div className="dashboard-section">
          <h2>Training Analytics</h2>
          <div className="training-analytics">
            <div className="analytics-grid">
              <div className="analytics-card">
                <h3>Course Completion Rates</h3>
                <div className="chart-container">
                  <div className="chart-placeholder">
                    Completion Rate Chart
                  </div>
                </div>
                <div className="analytics-stats">
                  <div className="stat-item">
                    <span className="stat-label">Average Completion</span>
                    <span className="stat-value">88%</span>
                    <span className="trend-indicator up">+3.5% vs last month</span>
                  </div>
                </div>
              </div>
              <div className="analytics-card">
                <h3>Student Performance</h3>
                <div className="performance-metrics">
                  <div className="metric-item">
                    <span className="metric-label">Pass Rate</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '92%' }}></div>
                    </div>
                    <span className="metric-value">92%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Average Score</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '85%' }}></div>
                    </div>
                    <span className="metric-value">85%</span>
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