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
    const roleBasedMenu = {
      [UserRole.GENERAL_DIRECTOR]: [
        { path: '/general-director', label: 'Executive Dashboard', icon: '👨‍💼' },
        { path: '/kpi', label: 'KPI Dashboard', icon: '📈' },
        { path: '/reports', label: 'Reports', icon: '📑' },
      ],
      [UserRole.SAFETY_MANAGER]: [
        { path: '/safety-manager', label: 'Safety Dashboard', icon: '🛡️' },
        { path: '/incidents', label: 'Incidents', icon: '⚠️' },
        { path: '/risk-assessment', label: 'Risk Assessment', icon: '🔍' },
      ],
      [UserRole.QUALITY_MANAGER]: [
        { path: '/quality-manager', label: 'Quality Dashboard', icon: '✅' },
        { path: '/audits', label: 'Audits', icon: '📋' },
        { path: '/standards', label: 'Standards', icon: '📚' },
      ],
      [UserRole.SECURITY_MANAGER]: [
        { path: '/security-manager', label: 'Security Dashboard', icon: '🔒' },
        { path: '/threats', label: 'Threats', icon: '🚨' },
        { path: '/compliance', label: 'Compliance', icon: '⚖️' },
      ],
      [UserRole.CAMO_MANAGER]: [
        { path: '/camo-manager', label: 'Maintenance Dashboard', icon: '🔧' },
        { path: '/aircraft', label: 'Aircraft Status', icon: '✈️' },
        { path: '/schedules', label: 'Maintenance Schedules', icon: '📅' },
      ],
      [UserRole.HR_MANAGER]: [
        { path: '/hr-manager', label: 'HR Dashboard', icon: '👥' },
        { path: '/employees', label: 'Employees', icon: '👤' },
        { path: '/training', label: 'Training', icon: '🎓' },
        { path: '/departments', label: 'Departments', icon: '🏢' },
        { path: '/positions', label: 'Positions', icon: '💼' },
      ],
      [UserRole.TRAINING_MANAGER]: [
        { path: '/training-manager', label: 'Training Dashboard', icon: '📚' },
        { path: '/courses', label: 'Courses', icon: '📖' },
        { path: '/certifications', label: 'Certifications', icon: '📜' },
      ],
      [UserRole.HEAD_FLIGHT_OPS]: [
        { path: '/head-flight-ops', label: 'Flight Operations', icon: '✈️' },
        { path: '/schedules', label: 'Flight Schedules', icon: '📅' },
        { path: '/crew', label: 'Crew Management', icon: '👨‍✈️' },
      ],
      [UserRole.HEAD_MAINTENANCE]: [
        { path: '/head-maintenance', label: 'Maintenance Dashboard', icon: '🔧' },
        { path: '/work-orders', label: 'Work Orders', icon: '📝' },
        { path: '/inventory', label: 'Inventory', icon: '📦' },
      ],
      [UserRole.HEAD_GROUND_HANDLING]: [
        { path: '/head-ground-handling', label: 'Ground Handling', icon: '🛠️' },
        { path: '/services', label: 'Services', icon: '🛎️' },
        { path: '/equipment', label: 'Equipment', icon: '🚛' },
      ],
      [UserRole.HEAD_CARGO]: [
        { path: '/head-cargo', label: 'Cargo Dashboard', icon: '📦' },
        { path: '/shipments', label: 'Shipments', icon: '🚚' },
        { path: '/warehouse', label: 'Warehouse', icon: '🏭' },
      ],
      [UserRole.HEAD_ENGINEERING]: [
        { path: '/head-engineering', label: 'Engineering Dashboard', icon: '⚙️' },
        { path: '/projects', label: 'Projects', icon: '📊' },
        { path: '/technical', label: 'Technical Docs', icon: '📄' },
      ],
    };

    return roleBasedMenu[role || UserRole.GENERAL_DIRECTOR] || [];
  };

  if (!user) return null;

  const menuItems = getMenuItems(user.role);

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
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
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