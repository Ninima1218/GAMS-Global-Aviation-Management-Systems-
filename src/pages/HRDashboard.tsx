import React, { useState } from 'react';
import { useHR } from '../contexts/HRContext';
import { Employee, Department, Position, DocumentStatus, EmployeeStatus } from '../types/hr';
import './HRDashboard.css';

const HRDashboard: React.FC = () => {
  const { 
    employees, 
    departments, 
    positions,
    isLoading, 
    error 
  } = useHR();

  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  if (isLoading) {
    return <div className="loading">Loading HR data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const activeEmployees = employees.filter(emp => emp.status === EmployeeStatus.ACTIVE);
  const onLeaveEmployees = employees.filter(emp => emp.status === EmployeeStatus.ON_LEAVE);

  const expiringDocuments = employees.flatMap(emp => 
    emp.documents.filter(doc => {
      if (!doc.expiryDate) return false;
      const daysUntilExpiry = Math.floor((new Date(doc.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
      return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
    })
  );

  const pendingTrainings = employees.flatMap(emp =>
    emp.trainings.filter(training => training.status === 'PLANNED')
  );

  return (
    <div className="hr-dashboard">
      <div className="dashboard-header">
        <h1>Aviation HR Dashboard</h1>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Staff</h3>
          <p className="metric-value">{employees.length}</p>
          <p className="metric-label">Across all departments</p>
        </div>
        <div className="metric-card">
          <h3>Active Staff</h3>
          <p className="metric-value">{activeEmployees.length}</p>
          <p className="metric-label">Currently on duty</p>
        </div>
        <div className="metric-card">
          <h3>On Leave</h3>
          <p className="metric-value">{onLeaveEmployees.length}</p>
          <p className="metric-label">Temporary absence</p>
        </div>
        <div className="metric-card">
          <h3>Departments</h3>
          <p className="metric-value">{departments.length}</p>
          <p className="metric-label">Active departments</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-section">
          <h2>Document Alerts</h2>
          <div className="alerts-list">
            {expiringDocuments.map(doc => (
              <div key={doc.id} className="alert-item">
                <span className="alert-icon">⚠️</span>
                <div className="alert-content">
                  <p className="alert-title">{doc.title} Expiring Soon</p>
                  <p className="alert-desc">Expires on {new Date(doc.expiryDate!).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Training Overview</h2>
          <div className="training-list">
            {pendingTrainings.map(training => (
              <div key={training.id} className="training-item">
                <span className="training-icon">📚</span>
                <div className="training-content">
                  <p className="training-title">{training.title}</p>
                  <p className="training-date">Scheduled: {new Date(training.startDate).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Department Overview</h2>
          <select 
            value={selectedDepartment} 
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="department-select"
          >
            <option value="all">All Departments</option>
            {departments.map(dept => (
              <option key={dept.id} value={dept.id}>{dept.name}</option>
            ))}
          </select>

          <div className="department-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees
                  .filter(emp => selectedDepartment === 'all' || emp.departmentId === selectedDepartment)
                  .map(employee => (
                    <tr key={employee.id}>
                      <td>{employee.employeeId}</td>
                      <td>{`${employee.firstName} ${employee.lastName}`}</td>
                      <td>{positions.find(p => p.id === employee.positionId)?.title}</td>
                      <td>
                        <span className={`status-badge ${employee.status.toLowerCase()}`}>
                          {employee.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-button">View</button>
                        <button className="action-button">Edit</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;