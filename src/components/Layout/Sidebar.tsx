import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types/user';
import { ReportModal } from '../Reports/ReportModal';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const getMenuItems = (role: UserRole | undefined) => {
    const baseMenu = [
      { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    ];

    const roleBasedMenu = {
      [UserRole.GENERAL_DIRECTOR]: [
        { path: '/executive', label: 'Executive View', icon: '👨‍💼' },
        { path: '/kpi', label: 'KPI Dashboard', icon: '📈' },
        { path: '/reports', label: 'Reports', icon: '📑' },
      ],
      [UserRole.SAFETY_MANAGER]: [
        { path: '/safety', label: 'Safety Dashboard', icon: '🛡️' },
        { path: '/incidents', label: 'Incidents', icon: '⚠️' },
        { path: '/risk-assessment', label: 'Risk Assessment', icon: '🔍' },
      ],
      [UserRole.QUALITY_MANAGER]: [
        { path: '/quality', label: 'Quality Dashboard', icon: '✅' },
        { path: '/audits', label: 'Audits', icon: '📋' },
        { path: '/standards', label: 'Standards', icon: '📚' },
      ],
      [UserRole.SECURITY_MANAGER]: [
        { path: '/security', label: 'Security Dashboard', icon: '🔒' },
        { path: '/threats', label: 'Threats', icon: '🚨' },
        { path: '/compliance', label: 'Compliance', icon: '⚖️' },
      ],
      [UserRole.CAMO_MANAGER]: [
        { path: '/maintenance', label: 'Maintenance Dashboard', icon: '🔧' },
        { path: '/aircraft', label: 'Aircraft Status', icon: '✈️' },
        { path: '/schedules', label: 'Maintenance Schedules', icon: '📅' },
      ],
      [UserRole.HR_MANAGER]: [
        { path: '/hr', label: 'HR Dashboard', icon: '👥' },
        { path: '/employees', label: 'Employees', icon: '👤' },
        { path: '/training', label: 'Training', icon: '🎓' },
      ],
      [UserRole.TRAINING_MANAGER]: [
        { path: '/training-dashboard', label: 'Training Dashboard', icon: '📚' },
        { path: '/courses', label: 'Courses', icon: '📖' },
        { path: '/certifications', label: 'Certifications', icon: '📜' },
      ],
      [UserRole.HEAD_FLIGHT_OPS]: [
        { path: '/flight-ops', label: 'Flight Operations', icon: '✈️' },
        { path: '/schedules', label: 'Flight Schedules', icon: '📅' },
        { path: '/crew', label: 'Crew Management', icon: '👨‍✈️' },
      ],
      [UserRole.HEAD_MAINTENANCE]: [
        { path: '/maintenance-dashboard', label: 'Maintenance Dashboard', icon: '🔧' },
        { path: '/work-orders', label: 'Work Orders', icon: '📝' },
        { path: '/inventory', label: 'Inventory', icon: '📦' },
      ],
      [UserRole.HEAD_GROUND_HANDLING]: [
        { path: '/ground-handling', label: 'Ground Handling', icon: '🛠️' },
        { path: '/services', label: 'Services', icon: '🛎️' },
        { path: '/equipment', label: 'Equipment', icon: '🚛' },
      ],
      [UserRole.HEAD_CARGO]: [
        { path: '/cargo', label: 'Cargo Dashboard', icon: '📦' },
        { path: '/shipments', label: 'Shipments', icon: '🚚' },
        { path: '/warehouse', label: 'Warehouse', icon: '🏭' },
      ],
      [UserRole.HEAD_ENGINEERING]: [
        { path: '/engineering', label: 'Engineering Dashboard', icon: '⚙️' },
        { path: '/projects', label: 'Projects', icon: '📊' },
        { path: '/technical', label: 'Technical Docs', icon: '📄' },
      ],
    };

    return [...baseMenu, ...(roleBasedMenu[role || UserRole.GENERAL_DIRECTOR] || [])];
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>GAMS</h1>
        <button 
          className="report-button"
          onClick={() => setIsReportModalOpen(true)}
        >
          Create Report
        </button>
      </div>
      <nav className="sidebar-nav">
        {getMenuItems(user?.role).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <ReportModal 
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </aside>
  );
}; 