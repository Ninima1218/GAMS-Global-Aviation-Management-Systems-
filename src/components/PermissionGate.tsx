import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Permission, checkPermission } from '../types/permissions';

interface PermissionGateProps {
  permission: Permission;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const PermissionGate: React.FC<PermissionGateProps> = ({
  permission,
  children,
  fallback = null
}) => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const hasPermission = checkPermission(user.role, permission);

  if (!hasPermission) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}; 