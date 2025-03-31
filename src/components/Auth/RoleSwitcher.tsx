import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types/user';
import './RoleSwitcher.css';

export const RoleSwitcher: React.FC = () => {
  const { user, switchRole } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = e.target.value as UserRole;
    switchRole(newRole);
    
    // Redirect to the appropriate dashboard based on the new role
    const getDashboardPath = (role: UserRole) => {
      switch (role) {
        case UserRole.GENERAL_DIRECTOR:
          return '/dashboard/general-director';
        case UserRole.SAFETY_MANAGER:
          return '/dashboard/safety-manager';
        case UserRole.QUALITY_MANAGER:
          return '/dashboard/quality-manager';
        case UserRole.SECURITY_MANAGER:
          return '/dashboard/security-manager';
        case UserRole.CAMO_MANAGER:
          return '/dashboard/camo-manager';
        case UserRole.HR_MANAGER:
          return '/dashboard/hr-manager';
        case UserRole.TRAINING_MANAGER:
          return '/dashboard/training-manager';
        case UserRole.HEAD_FLIGHT_OPS:
          return '/dashboard/head-flight-ops';
        case UserRole.HEAD_MAINTENANCE:
          return '/dashboard/head-maintenance';
        case UserRole.HEAD_GROUND_HANDLING:
          return '/dashboard/head-ground-handling';
        case UserRole.HEAD_CARGO:
          return '/dashboard/head-cargo';
        case UserRole.HEAD_ENGINEERING:
          return '/dashboard/head-engineering';
        default:
          return '/dashboard/general-director';
      }
    };

    navigate(getDashboardPath(newRole));
  };

  return (
    <div className="role-switcher">
      <select 
        value={user.role} 
        onChange={handleRoleChange}
        className="role-select"
      >
        <option value={UserRole.GENERAL_DIRECTOR}>General Director</option>
        <option value={UserRole.SAFETY_MANAGER}>Safety Manager</option>
        <option value={UserRole.QUALITY_MANAGER}>Quality Manager</option>
        <option value={UserRole.SECURITY_MANAGER}>Security Manager</option>
        <option value={UserRole.CAMO_MANAGER}>CAMO Manager</option>
        <option value={UserRole.HR_MANAGER}>HR Manager</option>
        <option value={UserRole.TRAINING_MANAGER}>Training Manager</option>
        <option value={UserRole.HEAD_FLIGHT_OPS}>Head Flight Ops</option>
        <option value={UserRole.HEAD_MAINTENANCE}>Head Maintenance</option>
        <option value={UserRole.HEAD_GROUND_HANDLING}>Head Ground Handling</option>
        <option value={UserRole.HEAD_CARGO}>Head Cargo</option>
        <option value={UserRole.HEAD_ENGINEERING}>Head Engineering</option>
      </select>
    </div>
  );
}; 