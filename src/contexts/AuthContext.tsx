import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState, UserRole } from '../types/user';
import { Permission } from '../types/permissions';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  switchRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TEST_USER: User = {
  id: '1',
  email: 'test@example.com',
  firstName: 'Test',
  lastName: 'User',
  role: UserRole.GENERAL_DIRECTOR,
  permissions: [
    Permission.VIEW_ALL_MODULES,
    Permission.VIEW_EXECUTIVE_DASHBOARD,
    Permission.VIEW_KPI_DASHBOARD,
    Permission.VIEW_MONTHLY_REPORTS,
    Permission.APPROVE_OBJECTIVES,
    Permission.MANAGE_TOP_LEVEL_USERS,
    Permission.VIEW_DOCUMENTS
  ]
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>(() => {
    const storedUser = localStorage.getItem('user');
    return {
      user: storedUser ? JSON.parse(storedUser) : null,
      isAuthenticated: !!storedUser,
      isLoading: false,
      error: null
    };
  });

  const login = async (email: string, password: string) => {
    try {
      if (email === 'test@example.com' && password === 'test123') {
        localStorage.setItem('user', JSON.stringify(TEST_USER));
        setState({
          user: TEST_USER,
          isAuthenticated: true,
          isLoading: false,
          error: null
        });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      setState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: 'Invalid email or password'
      });
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null
    });
  };

  const switchRole = (role: UserRole) => {
    if (state.user) {
      const updatedUser: User = {
        ...state.user,
        role,
        permissions: getPermissionsForRole(role)
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setState(prev => ({
        ...prev,
        user: updatedUser
      }));
    }
  };

  const getPermissionsForRole = (role: UserRole): Permission[] => {
    const basePermissions = [
      Permission.VIEW_ALL_MODULES,
      Permission.VIEW_DOCUMENTS
    ];

    switch (role) {
      case UserRole.GENERAL_DIRECTOR:
        return [
          ...basePermissions,
          Permission.VIEW_EXECUTIVE_DASHBOARD,
          Permission.VIEW_KPI_DASHBOARD,
          Permission.VIEW_MONTHLY_REPORTS,
          Permission.APPROVE_OBJECTIVES,
          Permission.MANAGE_TOP_LEVEL_USERS
        ];
      case UserRole.SAFETY_MANAGER:
        return [
          ...basePermissions,
          Permission.VIEW_SAFETY_DASHBOARD,
          Permission.MANAGE_SAFETY_REPORTS,
          Permission.VIEW_SAFETY_METRICS
        ];
      case UserRole.QUALITY_MANAGER:
        return [
          ...basePermissions,
          Permission.VIEW_QUALITY_DASHBOARD,
          Permission.MANAGE_QUALITY_REPORTS,
          Permission.VIEW_QUALITY_METRICS
        ];
      case UserRole.SECURITY_MANAGER:
        return [
          ...basePermissions,
          Permission.VIEW_SECURITY_DASHBOARD,
          Permission.MANAGE_SECURITY_REPORTS,
          Permission.VIEW_SECURITY_METRICS
        ];
      case UserRole.CAMO_MANAGER:
        return [
          ...basePermissions,
          Permission.VIEW_MAINTENANCE_DASHBOARD,
          Permission.MANAGE_MAINTENANCE_REPORTS,
          Permission.VIEW_MAINTENANCE_METRICS
        ];
      case UserRole.HR_MANAGER:
        return [
          ...basePermissions,
          Permission.VIEW_HR_DASHBOARD,
          Permission.MANAGE_HR_REPORTS,
          Permission.VIEW_HR_METRICS
        ];
      case UserRole.TRAINING_MANAGER:
        return [
          ...basePermissions,
          Permission.VIEW_TRAINING_DASHBOARD,
          Permission.MANAGE_TRAINING_REPORTS,
          Permission.VIEW_TRAINING_METRICS
        ];
      case UserRole.HEAD_FLIGHT_OPS:
        return [
          ...basePermissions,
          Permission.VIEW_FLIGHT_OPS_DASHBOARD,
          Permission.MANAGE_FLIGHT_OPS_REPORTS,
          Permission.VIEW_FLIGHT_OPS_METRICS
        ];
      case UserRole.HEAD_MAINTENANCE:
        return [
          ...basePermissions,
          Permission.VIEW_MAINTENANCE_DASHBOARD,
          Permission.MANAGE_MAINTENANCE_REPORTS,
          Permission.VIEW_MAINTENANCE_METRICS
        ];
      case UserRole.HEAD_GROUND_HANDLING:
        return [
          ...basePermissions,
          Permission.VIEW_GROUND_HANDLING_DASHBOARD,
          Permission.MANAGE_GROUND_HANDLING_REPORTS,
          Permission.VIEW_GROUND_HANDLING_METRICS
        ];
      case UserRole.HEAD_CARGO:
        return [
          ...basePermissions,
          Permission.VIEW_CARGO_DASHBOARD,
          Permission.MANAGE_CARGO_REPORTS,
          Permission.VIEW_CARGO_METRICS
        ];
      case UserRole.HEAD_ENGINEERING:
        return [
          ...basePermissions,
          Permission.VIEW_ENGINEERING_DASHBOARD,
          Permission.MANAGE_ENGINEERING_REPORTS,
          Permission.VIEW_ENGINEERING_METRICS
        ];
      default:
        return basePermissions;
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 