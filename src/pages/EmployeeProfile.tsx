import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types/user';
import '../styles/EmployeeProfile.css';

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  department: string;
  position: string;
  hireDate: string;
  status: 'active' | 'inactive';
  training: {
    completed: number;
    total: number;
  };
  performance: {
    rating: number;
    lastReview: string;
  };
}

export const EmployeeProfile: React.FC = () => {
  const { employeeId } = useParams<{ employeeId: string }>();
  const { user } = useAuth();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockEmployee: Employee = {
      id: employeeId || '',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      role: UserRole.PILOT,
      department: 'Flight Operations',
      position: 'Senior Pilot',
      hireDate: '2020-01-15',
      status: 'active',
      training: {
        completed: 8,
        total: 10
      },
      performance: {
        rating: 4.5,
        lastReview: '2023-06-15'
      }
    };

    setEmployee(mockEmployee);
    setLoading(false);
  }, [employeeId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!employee) {
    return <div className="error">Employee not found</div>;
  }

  return (
    <div className="employee-profile">
      <div className="profile-header">
        <div className="profile-avatar">
          {employee.firstName[0]}{employee.lastName[0]}
        </div>
        <div className="profile-info">
          <h1>{employee.firstName} {employee.lastName}</h1>
          <p className="role">{employee.role}</p>
          <p className="department">{employee.department}</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Email</label>
              <p>{employee.email}</p>
            </div>
            <div className="info-item">
              <label>Position</label>
              <p>{employee.position}</p>
            </div>
            <div className="info-item">
              <label>Hire Date</label>
              <p>{new Date(employee.hireDate).toLocaleDateString()}</p>
            </div>
            <div className="info-item">
              <label>Status</label>
              <p className={`status ${employee.status}`}>{employee.status}</p>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Training Progress</h2>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(employee.training.completed / employee.training.total) * 100}%` }}
            />
          </div>
          <p className="progress-text">
            {employee.training.completed} of {employee.training.total} courses completed
          </p>
        </div>

        <div className="profile-section">
          <h2>Performance</h2>
          <div className="performance-rating">
            <div className="rating-stars">
              {'★'.repeat(Math.floor(employee.performance.rating))}
              {'☆'.repeat(5 - Math.floor(employee.performance.rating))}
            </div>
            <p>Last review: {new Date(employee.performance.lastReview).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
