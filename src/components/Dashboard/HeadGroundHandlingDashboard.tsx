import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const HeadGroundHandlingDashboard: React.FC = () => {
  const groundHandlingMetrics = [
    {
      label: 'Active Flights',
      value: 24,
      change: 2
    },
    {
      label: 'Equipment Available',
      value: '98%',
      change: 1
    },
    {
      label: 'On-Time Performance',
      value: '92%',
      change: 0.5
    },
    {
      label: 'Staff Available',
      value: '95%',
      change: -1
    }
  ];

  return (
    <PermissionGate permission={Permission.VIEW_DEPARTMENT_DATA}>
      <BaseDashboard metrics={groundHandlingMetrics}>
        {/* Flight Operations Overview */}
        <div className="dashboard-section">
          <h2>Flight Operations Overview</h2>
          <div className="flight-ops-overview">
            <div className="overview-filters">
              <select className="filter-select">
                <option value="all">All Flights</option>
                <option value="arrival">Arrivals</option>
                <option value="departure">Departures</option>
                <option value="transit">Transit</option>
              </select>
              <select className="filter-select">
                <option value="all">All Terminals</option>
                <option value="t1">Terminal 1</option>
                <option value="t2">Terminal 2</option>
                <option value="t3">Terminal 3</option>
              </select>
              <button className="action-btn primary">Schedule Operation</button>
            </div>
            <div className="flight-grid">
              <div className="flight-card">
                <div className="flight-header">
                  <h3>Flight 1234</h3>
                  <span className="status-badge in-progress">In Progress</span>
                </div>
                <div className="flight-info">
                  <div className="info-row">
                    <span>Type:</span>
                    <span>Arrival</span>
                  </div>
                  <div className="info-row">
                    <span>Terminal:</span>
                    <span>T1 - Gate A12</span>
                  </div>
                  <div className="info-row">
                    <span>ETA:</span>
                    <span>10:30</span>
                  </div>
                </div>
                <div className="ground-ops-info">
                  <h4>Ground Operations</h4>
                  <div className="ops-list">
                    <span>Baggage handling in progress</span>
                    <span>Catering delivery scheduled</span>
                    <span>Cleaning team assigned</span>
                  </div>
                </div>
                <div className="flight-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Update Status</button>
                </div>
              </div>
              <div className="flight-card">
                <div className="flight-header">
                  <h3>Flight 1235</h3>
                  <span className="status-badge scheduled">Scheduled</span>
                </div>
                <div className="flight-info">
                  <div className="info-row">
                    <span>Type:</span>
                    <span>Departure</span>
                  </div>
                  <div className="info-row">
                    <span>Terminal:</span>
                    <span>T2 - Gate B15</span>
                  </div>
                  <div className="info-row">
                    <span>ETD:</span>
                    <span>13:00</span>
                  </div>
                </div>
                <div className="ground-ops-info">
                  <h4>Ground Operations</h4>
                  <div className="ops-list">
                    <span>Check-in open</span>
                    <span>Baggage drop-off active</span>
                    <span>Gate preparation pending</span>
                  </div>
                </div>
                <div className="flight-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Assign Team</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Management */}
        <div className="dashboard-section">
          <h2>Equipment Management</h2>
          <div className="equipment-management">
            <div className="equipment-header">
              <div className="equipment-filters">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search equipment..."
                />
                <select className="filter-select">
                  <option value="all">All Types</option>
                  <option value="baggage">Baggage Handling</option>
                  <option value="catering">Catering</option>
                  <option value="cleaning">Cleaning</option>
                </select>
              </div>
              <button className="action-btn">Schedule Maintenance</button>
            </div>
            <div className="equipment-grid">
              <div className="equipment-card">
                <div className="equipment-header">
                  <h4>Baggage Belt 3</h4>
                  <span className="status-badge active">Active</span>
                </div>
                <div className="equipment-info">
                  <div className="info-row">
                    <span>Location:</span>
                    <span>T1 - Level 2</span>
                  </div>
                  <div className="info-row">
                    <span>Last Service:</span>
                    <span>2024-03-14</span>
                  </div>
                  <div className="info-row">
                    <span>Next Service:</span>
                    <span>2024-04-14</span>
                  </div>
                </div>
                <div className="equipment-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Report Issue</button>
                </div>
              </div>
              <div className="equipment-card">
                <div className="equipment-header">
                  <h4>Catering Truck 2</h4>
                  <span className="status-badge maintenance">In Maintenance</span>
                </div>
                <div className="equipment-info">
                  <div className="info-row">
                    <span>Location:</span>
                    <span>Service Area</span>
                  </div>
                  <div className="info-row">
                    <span>Issue:</span>
                    <span>Hydraulic System</span>
                  </div>
                  <div className="info-row">
                    <span>ETA:</span>
                    <span>2 hours</span>
                  </div>
                </div>
                <div className="equipment-actions">
                  <button className="action-btn">Update Status</button>
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
                  <option value="baggage">Baggage Handler</option>
                  <option value="catering">Catering Staff</option>
                  <option value="cleaning">Cleaning Staff</option>
                </select>
              </div>
              <button className="action-btn">Manage Schedule</button>
            </div>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-info">
                  <h4>John Smith</h4>
                  <span className="role-badge">Baggage Handler</span>
                </div>
                <div className="team-stats">
                  <div className="stat-row">
                    <span>Current Task:</span>
                    <span>Flight 1234 Baggage</span>
                  </div>
                  <div className="stat-row">
                    <span>Hours Today:</span>
                    <span>4/8</span>
                  </div>
                  <div className="stat-row">
                    <span>Location:</span>
                    <span>T1 - Level 2</span>
                  </div>
                </div>
                <div className="team-actions">
                  <button className="action-btn">View Schedule</button>
                  <button className="action-btn">Edit Details</button>
                </div>
              </div>
              <div className="team-card">
                <div className="team-info">
                  <h4>Sarah Johnson</h4>
                  <span className="role-badge">Catering Staff</span>
                </div>
                <div className="team-stats">
                  <div className="stat-row">
                    <span>Current Task:</span>
                    <span>Flight 1235 Catering</span>
                  </div>
                  <div className="stat-row">
                    <span>Hours Today:</span>
                    <span>3/8</span>
                  </div>
                  <div className="stat-row">
                    <span>Location:</span>
                    <span>T2 - Gate B15</span>
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
                <h3>Ground Operations Efficiency</h3>
                <div className="chart-container">
                  <div className="chart-placeholder">
                    Ground Operations Chart
                  </div>
                </div>
                <div className="analytics-stats">
                  <div className="stat-item">
                    <span className="stat-label">Average Turnaround Time</span>
                    <span className="stat-value">45 min</span>
                    <span className="trend-indicator up">-2 min vs last week</span>
                  </div>
                </div>
              </div>
              <div className="analytics-card">
                <h3>Service Quality</h3>
                <div className="performance-metrics">
                  <div className="metric-item">
                    <span className="metric-label">Baggage Handling</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '98%' }}></div>
                    </div>
                    <span className="metric-value">98%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Catering Service</span>
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