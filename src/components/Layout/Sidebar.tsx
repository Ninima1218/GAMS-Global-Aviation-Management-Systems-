import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useHR } from '../../contexts/HRContext';
import { UserRole } from '../../types/user';
import BuildingIcon from '../icons/BuildingIcon';
import KeyIcon from '../icons/KeyIcon';
import FileIcon from '../icons/FileIcon';
import CalendarIcon from '../icons/CalendarIcon';
import './Sidebar.css';
import logo from '../../assets/gams-logo.png';

export const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const { departments } = useHR();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const departmentsRef = useRef<HTMLDivElement>(null);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (departmentsRef.current && !departmentsRef.current.contains(event.target as Node)) {
        setDepartmentsOpen(false);
      }
    }
    if (departmentsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [departmentsOpen]);

  // Default HR menu structure with SVG icons
  const hrMenu = [
    {
      key: 'departments',
      label: 'Departments',
      icon: <BuildingIcon />,
      children: departments.map((dept) => ({
        key: dept.id,
        label: dept.name,
        path: `/departments/${dept.id}`
      }))
    },
    {
      key: 'access',
      label: 'Grant/Restrict System Access',
      icon: <KeyIcon />,
      path: '/access-control'
    },
    {
      key: 'documentation',
      label: 'Documentation',
      icon: <FileIcon />,
      path: '/documentation'
    },
    {
      key: 'schedule',
      label: 'Schedule & Activity Tracking',
      icon: <CalendarIcon />,
      path: '/schedule-activity'
    }
  ];

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

    return roleBasedMenu[role || UserRole.GENERAL_DIRECTOR] || hrMenu;
  };

  if (!user) return null;

  const menuItems = getMenuItems(user.role);

  return (
    <aside className={`sidebar${isCollapsed ? ' collapsed' : ''}`}>
      <div className="sidebar-header">
        <img src={logo} alt="GAMS Logo" className="sidebar-logo" />
        <button 
          className="collapse-btn"
          onClick={() => setIsCollapsed((prev) => !prev)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <span style={{ color: '#111', fontWeight: 700 }}>{isCollapsed ? '→' : '←'}</span>
        </button>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) =>
          item.key === 'departments' ? (
            <div key={item.key} className={`nav-item${departmentsOpen ? ' open' : ''}`} ref={departmentsRef}> 
              <div
                className="nav-link"
                onClick={() => setDepartmentsOpen((open) => !open)}
                style={{ cursor: 'pointer' }}
              >
                <span className="nav-icon">{item.icon}</span>
                {!isCollapsed && <span className="nav-label">{item.label}</span>}
                <span className="dropdown-arrow">{departmentsOpen ? '▲' : '▼'}</span>
              </div>
              {departmentsOpen && !isCollapsed && (
                <div className="submenu">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.key}
                      to={child.path}
                      className={({ isActive }) => `nav-item submenu-item${isActive ? ' active' : ''}`}
                    >
                      <span className="nav-label">{child.label}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink
              key={item.key}
              to={item.path}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {!isCollapsed && <span className="nav-label">{item.label}</span>}
            </NavLink>
          )
        )}
      </nav>
      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </aside>
  );
}; 