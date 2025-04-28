
import React from 'react';
import { useParams } from 'react-router-dom';
import { useHR } from '../contexts/HRContext';
import './EmployeeProfile.css';

const EmployeeProfile: React.FC = () => {
  const { employeeId } = useParams();
  const { employees, isLoading } = useHR();
  
  if (isLoading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  const employee = employees?.find(emp => emp.id === employeeId);

  if (!employee) {
    return <div className="error-message">Employee not found</div>;
  }

  return (
    <div className="employee-profile">
      <div className="profile-header">
        <div className="profile-image">
          {employee.photoUrl ? (
            <img src={employee.photoUrl} alt={employee.fullName} />
          ) : (
            <div className="placeholder-image">{employee.fullName[0]}</div>
          )}
        </div>
        <div className="profile-info">
          <h1>{employee.fullName}</h1>
          <p className="employee-position">{employee.positionId}</p>
          <p className="employee-department">{employee.departmentId}</p>
        </div>
      </div>
      <div className="profile-content">
        <section className="profile-section">
          <h2>Contact Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Email</label>
              <p>{employee.email}</p>
            </div>
            <div className="info-item">
              <label>Phone</label>
              <p>{employee.phone}</p>
            </div>
          </div>
        </section>
        <section className="profile-section">
          <h2>Employment Details</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Status</label>
              <p className={`status ${employee.status.toLowerCase()}`}>
                {employee.status}
              </p>
            </div>
            <div className="info-item">
              <label>Employment Date</label>
              <p>{new Date(employee.employmentDate).toLocaleDateString()}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployeeProfile;
