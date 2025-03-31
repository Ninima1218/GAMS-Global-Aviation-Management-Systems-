import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const HeadEngineeringDashboard: React.FC = () => {
  const engineeringMetrics = [
    {
      label: 'Aircraft in Service',
      value: 12,
      change: 0
    },
    {
      label: 'Maintenance Due',
      value: 3,
      change: -1
    },
    {
      label: 'Technical Issues',
      value: 5,
      change: 2
    },
    {
      label: 'Engine Health',
      value: 98,
      change: 1
    }
  ];

  return (
    <PermissionGate permission={Permission.VIEW_DEPARTMENT_DATA}>
      <BaseDashboard metrics={engineeringMetrics}>
        {/* Aircraft Engineering Status */}
        <div className="dashboard-section">
          <h2>Aircraft Engineering Status</h2>
          <div className="engineering-status">
            <div className="status-filters">
              <select className="filter-select">
                <option value="all">All Aircraft</option>
                <option value="b737">B737</option>
                <option value="a320">A320</option>
                <option value="a330">A330</option>
              </select>
              <select className="filter-select">
                <option value="all">All Systems</option>
                <option value="engine">Engine</option>
                <option value="avionics">Avionics</option>
                <option value="airframe">Airframe</option>
              </select>
              <button className="action-btn primary">New Issue</button>
            </div>
            <div className="aircraft-grid">
              <div className="aircraft-card">
                <div className="aircraft-header">
                  <h3>B737-800</h3>
                  <span className="status-badge active">In Service</span>
                </div>
                <div className="aircraft-info">
                  <div className="info-row">
                    <span>Registration:</span>
                    <span>B-1234</span>
                  </div>
                  <div className="info-row">
                    <span>Next Check:</span>
                    <span>A Check - 15 days</span>
                  </div>
                  <div className="info-row">
                    <span>Flight Hours:</span>
                    <span>2,450</span>
                  </div>
                </div>
                <div className="system-status">
                  <h4>System Status</h4>
                  <div className="status-list">
                    <div className="status-item">
                      <span>Engine 1</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div className="status-item">
                      <span>Engine 2</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div className="status-item">
                      <span>APU</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '88%' }}></div>
                      </div>
                    </div>
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
                    <span>B-5678</span>
                  </div>
                  <div className="info-row">
                    <span>Current Check:</span>
                    <span>C Check</span>
                  </div>
                  <div className="info-row">
                    <span>Flight Hours:</span>
                    <span>4,850</span>
                  </div>
                </div>
                <div className="system-status">
                  <h4>System Status</h4>
                  <div className="status-list">
                    <div className="status-item">
                      <span>Engine 1</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="status-item">
                      <span>Engine 2</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div className="status-item">
                      <span>APU</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: '82%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="aircraft-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Update Progress</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Documentation */}
        <div className="dashboard-section">
          <h2>Technical Documentation</h2>
          <div className="technical-docs">
            <div className="docs-header">
              <div className="docs-filters">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search documents..."
                />
                <select className="filter-select">
                  <option value="all">All Types</option>
                  <option value="manual">Manuals</option>
                  <option value="ad">Airworthiness Directives</option>
                  <option value="sb">Service Bulletins</option>
                </select>
              </div>
              <button className="action-btn">New Document</button>
            </div>
            <div className="docs-grid">
              <div className="doc-card">
                <div className="doc-header">
                  <h4>Aircraft Maintenance Manual</h4>
                  <span className="status-badge active">Current</span>
                </div>
                <div className="doc-info">
                  <div className="info-row">
                    <span>Version:</span>
                    <span>Rev. 15</span>
                  </div>
                  <div className="info-row">
                    <span>Last Updated:</span>
                    <span>2024-03-01</span>
                  </div>
                  <div className="info-row">
                    <span>Applicable to:</span>
                    <span>B737-800</span>
                  </div>
                </div>
                <div className="doc-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Update Version</button>
                </div>
              </div>
              <div className="doc-card">
                <div className="doc-header">
                  <h4>AD 2024-01-15</h4>
                  <span className="status-badge urgent">Urgent</span>
                </div>
                <div className="doc-info">
                  <div className="info-row">
                    <span>Type:</span>
                    <span>Airworthiness Directive</span>
                  </div>
                  <div className="info-row">
                    <span>Due Date:</span>
                    <span>2024-04-15</span>
                  </div>
                  <div className="info-row">
                    <span>Status:</span>
                    <span>Pending Implementation</span>
                  </div>
                </div>
                <div className="doc-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Plan Implementation</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Analytics */}
        <div className="dashboard-section">
          <h2>Engineering Analytics</h2>
          <div className="engineering-analytics">
            <div className="analytics-grid">
              <div className="analytics-card">
                <h3>Maintenance Trends</h3>
                <div className="chart-container">
                  <div className="chart-placeholder">
                    Maintenance Trends Chart
                  </div>
                </div>
                <div className="analytics-stats">
                  <div className="stat-item">
                    <span className="stat-label">Average Check Duration</span>
                    <span className="stat-value">4.2 days</span>
                    <span className="trend-indicator down">-0.3 days vs last month</span>
                  </div>
                </div>
              </div>
              <div className="analytics-card">
                <h3>System Reliability</h3>
                <div className="performance-metrics">
                  <div className="metric-item">
                    <span className="metric-label">Engine Systems</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '98%' }}></div>
                    </div>
                    <span className="metric-value">98%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Avionics</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '95%' }}></div>
                    </div>
                    <span className="metric-value">95%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Airframe</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '97%' }}></div>
                    </div>
                    <span className="metric-value">97%</span>
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