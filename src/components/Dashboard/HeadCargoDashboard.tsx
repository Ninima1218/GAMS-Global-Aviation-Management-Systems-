import React from 'react';
import { BaseDashboard } from './BaseDashboard';
import { Permission } from '../../types/permissions';
import { PermissionGate } from '../PermissionGate';

export const HeadCargoDashboard: React.FC = () => {
  const cargoMetrics = [
    {
      label: 'Active Shipments',
      value: 156,
      change: 12
    },
    {
      label: 'Warehouse Capacity',
      value: 85,
      change: -5
    },
    {
      label: 'On-Time Delivery',
      value: 96,
      change: 2
    },
    {
      label: 'Revenue Today',
      value: 45000,
      change: 8
    }
  ];

  return (
    <PermissionGate permission={Permission.VIEW_DEPARTMENT_DATA}>
      <BaseDashboard metrics={cargoMetrics}>
        {/* Cargo Operations Overview */}
        <div className="dashboard-section">
          <h2>Cargo Operations Overview</h2>
          <div className="cargo-ops-overview">
            <div className="overview-filters">
              <select className="filter-select">
                <option value="all">All Shipments</option>
                <option value="incoming">Incoming</option>
                <option value="outgoing">Outgoing</option>
                <option value="transit">Transit</option>
              </select>
              <select className="filter-select">
                <option value="all">All Types</option>
                <option value="general">General Cargo</option>
                <option value="perishable">Perishable</option>
                <option value="dangerous">Dangerous Goods</option>
              </select>
              <button className="action-btn primary">New Shipment</button>
            </div>
            <div className="shipment-grid">
              <div className="shipment-card">
                <div className="shipment-header">
                  <h3>Shipment #CGO-1234</h3>
                  <span className="status-badge in-progress">Processing</span>
                </div>
                <div className="shipment-info">
                  <div className="info-row">
                    <span>Type:</span>
                    <span>General Cargo</span>
                  </div>
                  <div className="info-row">
                    <span>Weight:</span>
                    <span>2,500 kg</span>
                  </div>
                  <div className="info-row">
                    <span>ETA:</span>
                    <span>14:30</span>
                  </div>
                </div>
                <div className="shipment-details">
                  <h4>Route</h4>
                  <div className="route-info">
                    <span>From: LHR</span>
                    <span>To: JFK</span>
                    <span>Via: AMS</span>
                  </div>
                </div>
                <div className="shipment-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Update Status</button>
                </div>
              </div>
              <div className="shipment-card">
                <div className="shipment-header">
                  <h3>Shipment #CGO-1235</h3>
                  <span className="status-badge urgent">Urgent</span>
                </div>
                <div className="shipment-info">
                  <div className="info-row">
                    <span>Type:</span>
                    <span>Perishable</span>
                  </div>
                  <div className="info-row">
                    <span>Weight:</span>
                    <span>1,200 kg</span>
                  </div>
                  <div className="info-row">
                    <span>ETD:</span>
                    <span>16:00</span>
                  </div>
                </div>
                <div className="shipment-details">
                  <h4>Route</h4>
                  <div className="route-info">
                    <span>From: CDG</span>
                    <span>To: DXB</span>
                    <span>Direct</span>
                  </div>
                </div>
                <div className="shipment-actions">
                  <button className="action-btn">View Details</button>
                  <button className="action-btn">Assign Handler</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warehouse Management */}
        <div className="dashboard-section">
          <h2>Warehouse Management</h2>
          <div className="warehouse-management">
            <div className="warehouse-header">
              <div className="warehouse-filters">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Search storage locations..."
                />
                <select className="filter-select">
                  <option value="all">All Zones</option>
                  <option value="general">General Storage</option>
                  <option value="cold">Cold Storage</option>
                  <option value="dangerous">Dangerous Goods</option>
                </select>
              </div>
              <button className="action-btn">Update Inventory</button>
            </div>
            <div className="warehouse-grid">
              <div className="warehouse-card">
                <div className="warehouse-header">
                  <h4>Zone A - General Storage</h4>
                  <span className="status-badge active">Active</span>
                </div>
                <div className="warehouse-info">
                  <div className="info-row">
                    <span>Capacity:</span>
                    <span>85%</span>
                  </div>
                  <div className="info-row">
                    <span>Temperature:</span>
                    <span>20°C</span>
                  </div>
                  <div className="info-row">
                    <span>Items:</span>
                    <span>245</span>
                  </div>
                </div>
                <div className="warehouse-actions">
                  <button className="action-btn">View Inventory</button>
                  <button className="action-btn">Generate Report</button>
                </div>
              </div>
              <div className="warehouse-card">
                <div className="warehouse-header">
                  <h4>Zone B - Cold Storage</h4>
                  <span className="status-badge warning">Temperature Alert</span>
                </div>
                <div className="warehouse-info">
                  <div className="info-row">
                    <span>Capacity:</span>
                    <span>92%</span>
                  </div>
                  <div className="info-row">
                    <span>Temperature:</span>
                    <span>4.2°C</span>
                  </div>
                  <div className="info-row">
                    <span>Items:</span>
                    <span>78</span>
                  </div>
                </div>
                <div className="warehouse-actions">
                  <button className="action-btn">View Inventory</button>
                  <button className="action-btn">Check Temperature</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cargo Analytics */}
        <div className="dashboard-section">
          <h2>Cargo Analytics</h2>
          <div className="cargo-analytics">
            <div className="analytics-grid">
              <div className="analytics-card">
                <h3>Volume Trends</h3>
                <div className="chart-container">
                  <div className="chart-placeholder">
                    Volume Trends Chart
                  </div>
                </div>
                <div className="analytics-stats">
                  <div className="stat-item">
                    <span className="stat-label">Daily Volume</span>
                    <span className="stat-value">2,450 kg</span>
                    <span className="trend-indicator up">+12% vs yesterday</span>
                  </div>
                </div>
              </div>
              <div className="analytics-card">
                <h3>Revenue Analysis</h3>
                <div className="performance-metrics">
                  <div className="metric-item">
                    <span className="metric-label">General Cargo</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '65%' }}></div>
                    </div>
                    <span className="metric-value">65%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Perishable</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '25%' }}></div>
                    </div>
                    <span className="metric-value">25%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Dangerous Goods</span>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: '10%' }}></div>
                    </div>
                    <span className="metric-value">10%</span>
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