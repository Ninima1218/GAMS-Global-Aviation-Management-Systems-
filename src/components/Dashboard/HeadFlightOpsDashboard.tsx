import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const HeadFlightOpsDashboard: React.FC = () => {
  const flightOpsMetrics = [
    {
      label: 'Active Flights',
      value: 24,
      change: 2
    },
    {
      label: 'Crew Available',
      value: '92%',
      change: 1.5
    },
    {
      label: 'On-Time Performance',
      value: '88%',
      change: -1
    },
    {
      label: 'Open Reports',
      value: 7,
      change: -2
    }
  ];

  return (
    <PermissionGate permission={Permission.VIEW_DEPARTMENT_DATA}>
      <BaseDashboard metrics={flightOpsMetrics}>
        {/* Flight Operations Overview */}
        <div className="dashboard-section">
          <h2>Flight Operations Overview</h2>
          <div className="flight-ops-overview">
            <div className="overview-filters">
              <select className="filter-select">
                <option value="all">All Flights</option>
                <option value="scheduled">Scheduled</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <select className="filter-select">
                <option value="all">All Aircraft Types</option>
                <option value="b737">B737</option>
                <option value="a320">A320</option>
                <option value="b777">B777</option>
              </select>
              <button className="action-btn primary">Schedule Flight</button>
            </div>
            <div className="flight-grid">
              <div className="flight-card">
                <div className="flight-header">
                  <h3>Flight 1234</h3>
                  <span className="status-badge in-progress">In Progress</span>
                </div>
                <div className="flight-info">
                  <div className="info-row">
                    <span>Route:</span>
                    <span>MOW - LED</span>
                  </div>
                  <div className="info-row">
                    <span>Aircraft:</span>
                    <span>B737-800 (VP-BXX)</span>
                  </div>
                  <div className="info-row">
                    <span>ETD/ETA:</span>
                    <span>10:30 / 12:00</span>
                  </div>
                </div>
                <div className="crew-info">
                  <h4>Crew</h4>
                  <div className="crew-list">
                    <span>CPT: John Smith</span>
                    <span>FO: Sarah Johnson</span>
                    <span>CC: 4 members</span>
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
                    <span>Route:</span>
                    <span>LED - MOW</span>
                  </div>
                  <div className="info-row">
                    <span>Aircraft:</span>
                    <span>A320 (VP-BYY)</span>
                  </div>
                  <div className="info-row">
                    <span>ETD/ETA:</span>
                    <span>13:00 / 14:30</span>
                  </div>
                </div>
                <div className="crew-info">
                  <h4>Crew</h4>
                  <div className="crew-list">
                    <span>CPT: Mike Brown</span>
                    <span>FO: Emma Wilson</span>
                    <span>CC: 4 members</span>
                  </div>
                </div>
                <div className="flight-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Assign Crew</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crew Management */}
        <div className="dashboard-section">
          <h2>Crew Management</h2>
          <div className="crew-management">
            <div className="crew-header">
              <div className="crew-filters">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search crew members..."
                />
                <select className="filter-select">
                  <option value="all">All Positions</option>
                  <option value="captain">Captain</option>
                  <option value="fo">First Officer</option>
                  <option value="cc">Cabin Crew</option>
                </select>
              </div>
              <button className="action-btn">Manage Rosters</button>
            </div>
            <div className="crew-grid">
              <div className="crew-card">
                <div className="crew-info">
                  <h4>John Smith</h4>
                  <span className="position-badge">Captain</span>
                </div>
                <div className="crew-stats">
                  <div className="stat-row">
                    <span>Flight Hours:</span>
                    <span>8500</span>
                  </div>
                  <div className="stat-row">
                    <span>Next Flight:</span>
                    <span>MOW - LED (10:30)</span>
                  </div>
                  <div className="stat-row">
                    <span>Status:</span>
                    <span className="status-badge active">Active</span>
                  </div>
                </div>
                <div className="crew-actions">
                  <button className="action-btn">View Schedule</button>
                  <button className="action-btn">Edit Details</button>
                </div>
              </div>
              <div className="crew-card">
                <div className="crew-info">
                  <h4>Sarah Johnson</h4>
                  <span className="position-badge">First Officer</span>
                </div>
                <div className="crew-stats">
                  <div className="stat-row">
                    <span>Flight Hours:</span>
                    <span>3200</span>
                  </div>
                  <div className="stat-row">
                    <span>Next Flight:</span>
                    <span>MOW - LED (10:30)</span>
                  </div>
                  <div className="stat-row">
                    <span>Status:</span>
                    <span className="status-badge active">Active</span>
                  </div>
                </div>
                <div className="crew-actions">
                  <button className="action-btn">View Schedule</button>
                  <button className="action-btn">Edit Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Monitoring */}
        <div className="dashboard-section">
          <h2>Performance Monitoring</h2>
          <div className="performance-monitoring">
            <div className="performance-grid">
              <div className="performance-card">
                <h3>Flight Performance</h3>
                <div className="chart-container">
                  <div className="chart-placeholder">
                    Flight Performance Chart
                  </div>
                </div>
                <div className="performance-stats">
                  <div className="stat-item">
                    <span className="stat-label">On-Time Departure</span>
                    <span className="stat-value">88%</span>
                    <span className="trend-indicator down">-1% vs last week</span>
                  </div>
                </div>
              </div>
              <div className="performance-card">
                <h3>Crew Performance</h3>
                <div className="performance-metrics">
                  <div className="metric-item">
                    <span className="metric-label">Training Compliance</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '95%' }}></div>
                    </div>
                    <span className="metric-value">95%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Documentation</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '92%' }}></div>
                    </div>
                    <span className="metric-value">92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Reports */}
        <div className="dashboard-section">
          <h2>Safety Reports</h2>
          <div className="safety-reports">
            <div className="reports-header">
              <div className="reports-filters">
                <select className="filter-select">
                  <option value="all">All Reports</option>
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="closed">Closed</option>
                </select>
                <button className="action-btn primary">Create Report</button>
              </div>
            </div>
            <div className="reports-list">
              <div className="report-item">
                <div className="report-icon">⚠️</div>
                <div className="report-info">
                  <h4>Weather Deviation Report</h4>
                  <p>Flight 1234 - MOW - LED</p>
                  <span className="report-status pending">Pending Review</span>
                </div>
                <div className="report-actions">
                  <button className="action-btn">Review</button>
                  <button className="action-btn">Assign</button>
                </div>
              </div>
              <div className="report-item">
                <div className="report-icon">📝</div>
                <div className="report-info">
                  <h4>Technical Issue Report</h4>
                  <p>Flight 1235 - LED - MOW</p>
                  <span className="report-status in-progress">In Progress</span>
                </div>
                <div className="report-actions">
                  <button className="action-btn">Update</button>
                  <button className="action-btn">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseDashboard>
    </PermissionGate>
  );
}; 