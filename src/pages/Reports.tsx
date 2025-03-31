import React from 'react';
import '../styles/Reports.css';

export const Reports = () => {
  const reports = [
    {
      id: 1,
      title: 'Safety Concern - Runway Lighting',
      category: 'Ground Operations',
      status: 'Open',
      priority: 'High',
      date: '2024-03-15',
      assignedTo: 'John Smith'
    },
    {
      id: 2,
      title: 'Maintenance Procedure Update',
      category: 'Maintenance',
      status: 'In Progress',
      priority: 'Medium',
      date: '2024-03-14',
      assignedTo: 'Sarah Johnson'
    },
    {
      id: 3,
      title: 'Training Documentation Review',
      category: 'Training',
      status: 'Closed',
      priority: 'Low',
      date: '2024-03-13',
      assignedTo: 'Mike Wilson'
    }
  ];

  return (
    <div className="reports">
      <div className="reports-header">
        <h1>Safety Reports</h1>
        <button className="new-report-btn">New Report</button>
      </div>

      <div className="reports-filters">
        <select className="filter-select">
          <option value="">All Categories</option>
          <option value="ground">Ground Operations</option>
          <option value="maintenance">Maintenance</option>
          <option value="training">Training</option>
        </select>

        <select className="filter-select">
          <option value="">All Status</option>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>

        <select className="filter-select">
          <option value="">All Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="reports-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(report => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.title}</td>
                <td>{report.category}</td>
                <td>
                  <span className={`status-badge ${report.status.toLowerCase()}`}>
                    {report.status}
                  </span>
                </td>
                <td>
                  <span className={`priority-badge ${report.priority.toLowerCase()}`}>
                    {report.priority}
                  </span>
                </td>
                <td>{report.date}</td>
                <td>{report.assignedTo}</td>
                <td>
                  <button className="action-btn">View</button>
                  <button className="action-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}; 