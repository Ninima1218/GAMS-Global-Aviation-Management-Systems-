import React from 'react';
import '../styles/Dashboard.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      <div className="dashboard-grid">
        <div className="widget">
          <h3>Active Reports</h3>
          <div className="widget-content">
            <span className="number">12</span>
            <span className="trend positive">↑ 2 new</span>
          </div>
        </div>

        <div className="widget">
          <h3>Risk Level</h3>
          <div className="widget-content">
            <span className="number">Medium</span>
            <span className="trend negative">↓ High</span>
          </div>
        </div>

        <div className="widget">
          <h3>Training Status</h3>
          <div className="widget-content">
            <span className="number">85%</span>
            <span className="trend positive">↑ 5%</span>
          </div>
        </div>

        <div className="widget">
          <h3>Compliance Rate</h3>
          <div className="widget-content">
            <span className="number">92%</span>
            <span className="trend positive">↑ 3%</span>
          </div>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-container">
          <h3>Safety Reports Trend</h3>
          <div className="chart-placeholder">
            Chart will be implemented here
          </div>
        </div>

        <div className="chart-container">
          <h3>Risk Distribution</h3>
          <div className="chart-placeholder">
            Chart will be implemented here
          </div>
        </div>
      </div>
    </div>
  );
}; 