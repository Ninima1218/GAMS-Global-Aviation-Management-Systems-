import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserRole } from '../types/user';
import '../styles/EmployeesList.css';

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  department: string;
  position: string;
  status: 'active' | 'inactive';
}

export const EmployeesList: React.FC = () => {
  const { user } = useAuth();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockEmployees: Employee[] = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        role: UserRole.PILOT,
        department: 'Flight Operations',
        position: 'Senior Pilot',
        status: 'active'
      },
      {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        role: UserRole.ENGINEER,
        department: 'Maintenance',
        position: 'Lead Engineer',
        status: 'active'
      },
      // Add more mock employees as needed
    ];

    setEmployees(mockEmployees);
    setLoading(false);
  }, []);

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = 
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = 
      !filterDepartment || employee.department === filterDepartment;

    return matchesSearch && matchesDepartment;
  });

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="employees-list">
      <div className="list-header">
        <h1>Employees</h1>
        <div className="filters">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
            className="department-filter"
          >
            <option value="">All Departments</option>
            <option value="Flight Operations">Flight Operations</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Ground Handling">Ground Handling</option>
            <option value="Cargo">Cargo</option>
          </select>
        </div>
      </div>

      <div className="employees-grid">
        {filteredEmployees.map(employee => (
          <Link 
            key={employee.id} 
            to={`/employee/${employee.id}`}
            className="employee-card"
          >
            <div className="employee-avatar">
              {employee.firstName[0]}{employee.lastName[0]}
            </div>
            <div className="employee-info">
              <h3>{employee.firstName} {employee.lastName}</h3>
              <p className="position">{employee.position}</p>
              <p className="department">{employee.department}</p>
              <span className={`status ${employee.status}`}>
                {employee.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}; 