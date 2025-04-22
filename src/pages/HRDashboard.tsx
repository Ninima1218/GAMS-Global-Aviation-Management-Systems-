import React, { useState } from 'react';
import { useHR } from '../contexts/HRContext';
import { Employee, Department, Position } from '../types/hr';
import './HRDashboard.css';

const HRDashboard: React.FC = () => {
  const { 
    employees, 
    departments, 
    positions, 
    isLoading, 
    error 
  } = useHR();

  const [activeTab, setActiveTab] = useState<'overview' | 'employees' | 'departments' | 'positions'>('overview');

  if (isLoading) {
    return <div className="loading">Loading HR data...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const renderOverview = () => (
    <div className="overview-section">
      <div className="metric-card">
        <h3>Total Employees</h3>
        <p className="metric">{employees.length}</p>
      </div>
      <div className="metric-card">
        <h3>Departments</h3>
        <p className="metric">{departments.length}</p>
      </div>
      <div className="metric-card">
        <h3>Positions</h3>
        <p className="metric">{positions.length}</p>
      </div>
      <div className="metric-card">
        <h3>Active Employees</h3>
        <p className="metric">
          {employees.filter(emp => emp.status === 'ACTIVE').length}
        </p>
      </div>
    </div>
  );

  const renderEmployees = () => (
    <div className="employees-section">
      <div className="section-header">
        <h2>Employees</h2>
        <button className="add-button">Add Employee</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Position</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id}>
                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                <td>{departments.find(d => d.id === employee.departmentId)?.name}</td>
                <td>{positions.find(p => p.id === employee.positionId)?.title}</td>
                <td>{employee.status}</td>
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
  );

  const renderDepartments = () => (
    <div className="departments-section">
      <div className="section-header">
        <h2>Departments</h2>
        <button className="add-button">Add Department</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Manager</th>
              <th>Employee Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map(department => (
              <tr key={department.id}>
                <td>{department.name}</td>
                <td>
                  {employees.find(emp => emp.id === department.managerId)?.firstName} 
                  {employees.find(emp => emp.id === department.managerId)?.lastName}
                </td>
                <td>
                  {employees.filter(emp => emp.departmentId === department.id).length}
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
  );

  const renderPositions = () => (
    <div className="positions-section">
      <div className="section-header">
        <h2>Positions</h2>
        <button className="add-button">Add Position</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Department</th>
              <th>Employee Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {positions.map(position => (
              <tr key={position.id}>
                <td>{position.title}</td>
                <td>
                  {departments.find(d => d.id === position.departmentId)?.name}
                </td>
                <td>
                  {employees.filter(emp => emp.positionId === position.id).length}
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
  );

  return (
    <div className="hr-dashboard">
      <div className="dashboard-header">
        <h1>HR Dashboard</h1>
        <div className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-button ${activeTab === 'employees' ? 'active' : ''}`}
            onClick={() => setActiveTab('employees')}
          >
            Employees
          </button>
          <button 
            className={`tab-button ${activeTab === 'departments' ? 'active' : ''}`}
            onClick={() => setActiveTab('departments')}
          >
            Departments
          </button>
          <button 
            className={`tab-button ${activeTab === 'positions' ? 'active' : ''}`}
            onClick={() => setActiveTab('positions')}
          >
            Positions
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'employees' && renderEmployees()}
        {activeTab === 'departments' && renderDepartments()}
        {activeTab === 'positions' && renderPositions()}
      </div>
    </div>
  );
};

export default HRDashboard; 