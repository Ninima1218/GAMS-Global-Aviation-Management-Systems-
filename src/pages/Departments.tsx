import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Departments.css';

interface Department {
  id: string;
  name: string;
  manager: string;
  employeeCount: number;
  budget: number;
  status: 'active' | 'inactive';
}

export const Departments: React.FC = () => {
  const { user } = useAuth();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockDepartments: Department[] = [
      {
        id: '1',
        name: 'Flight Operations',
        manager: 'John Smith',
        employeeCount: 45,
        budget: 5000000,
        status: 'active'
      },
      {
        id: '2',
        name: 'Maintenance',
        manager: 'Jane Doe',
        employeeCount: 30,
        budget: 3000000,
        status: 'active'
      },
      {
        id: '3',
        name: 'Ground Handling',
        manager: 'Mike Johnson',
        employeeCount: 25,
        budget: 2000000,
        status: 'active'
      },
      {
        id: '4',
        name: 'Cargo',
        manager: 'Sarah Williams',
        employeeCount: 20,
        budget: 1500000,
        status: 'active'
      }
    ];

    setDepartments(mockDepartments);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="departments">
      <div className="departments-header">
        <h1>Departments</h1>
      </div>

      <div className="departments-grid">
        {departments.map(department => (
          <div key={department.id} className="department-card">
            <div className="department-header">
              <h2>{department.name}</h2>
              <span className={`status ${department.status}`}>
                {department.status}
              </span>
            </div>
            <div className="department-info">
              <p><strong>Manager:</strong> {department.manager}</p>
              <p><strong>Employees:</strong> {department.employeeCount}</p>
              <p><strong>Budget:</strong> ${department.budget.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 