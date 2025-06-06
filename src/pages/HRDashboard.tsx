import React, { useState } from 'react';
import { useHR } from '../contexts/HRContext';
import { Employee, Department, Position, DocumentStatus, EmployeeStatus, EmployeeDocument, EmployeeTraining } from '../types/hr';
import '../styles/HRDashboard.css';
import '../styles/index.css';

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

  if (!employees || !departments || !positions) {
    return <div className="error">No data available</div>;
  }

  const activeEmployees: Employee[] = employees.filter((emp: Employee) => emp.status === EmployeeStatus.ACTIVE);
  const onLeaveEmployees: Employee[] = employees.filter((emp: Employee) => emp.status === EmployeeStatus.ON_LEAVE);

  const expiringDocuments: EmployeeDocument[] = employees.flatMap((emp: Employee) => 
    (emp.documents || []).filter((doc: EmployeeDocument) => {
      if (!doc?.expiryDate) return false;
      const daysUntilExpiry = Math.floor((new Date(doc.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
      return daysUntilExpiry <= 30 && daysUntilExpiry > 0;
    })
  );

  const pendingTrainings: EmployeeTraining[] = employees.flatMap((emp: Employee) =>
    (emp.trainings || []).filter((training: EmployeeTraining) => training.status === 'PLANNED')
  );

  const getEmployeePosition = (positionId: string): string => {
    const position = positions.find((p: Position) => p.id === positionId);
    return position?.title || 'Unknown Position';
  };

  return (
    <div className="hr-dashboard main-dashboard-area">
      <div className="dashboard-header flex justify-between items-center">
        <h1>Aviation HR Dashboard</h1>
        <button className="btn btn-primary new-report-btn">+ New Report</button>
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
            {expiringDocuments.length > 0 ? (
              expiringDocuments.map((doc: EmployeeDocument) => (
                <div key={doc.id} className="alert-item">
                  <span className="alert-icon">⚠️</span>
                  <div className="alert-content">
                    <p className="alert-title">{doc.title} Expiring Soon</p>
                    <p className="alert-desc">Expires on {new Date(doc.expiryDate!).toLocaleDateString()}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data">No documents expiring soon</p>
            )}
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Training Overview</h2>
          <div className="training-list">
            {pendingTrainings.length > 0 ? (
              pendingTrainings.map((training: EmployeeTraining) => (
                <div key={training.id} className="training-item">
                  <span className="training-icon">📚</span>
                  <div className="training-content">
                    <p className="training-title">{training.title}</p>
                    <p className="training-date">Scheduled: {new Date(training.startDate).toLocaleDateString()}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data">No pending trainings</p>
            )}
          </div>
        </div>

        <div className="dashboard-section">
          <h2>Department Overview</h2>
          <select 
            value={selectedDepartment} 
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedDepartment(e.target.value)}
            className="department-select"
          >
            <option value="all">All Departments</option>
            {departments.map((dept: Department) => (
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
                  .filter((emp: Employee) => selectedDepartment === 'all' || emp.departmentId === selectedDepartment)
                  .map((employee: Employee) => (
                    <tr key={employee.id}>
                      <td>{employee.employeeId}</td>
                      <td>{`${employee.firstName} ${employee.lastName}`}</td>
                      <td>{getEmployeePosition(employee.positionId)}</td>
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

      {selectedDepartment !== 'all' && (
        <div className="card department-placeholder">
          <h2>Department Overview</h2>
          <p>Department ID: {selectedDepartment}</p>
          {/* Add more department info here as needed */}
        </div>
      )}
    </div>
  );
};

export default HRDashboard;