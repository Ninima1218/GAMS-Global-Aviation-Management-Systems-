import { FC } from 'react';
import { UserRole } from '../types/user';
import { GeneralDirectorDashboard } from '../components/Dashboard/GeneralDirectorDashboard';
import { SafetyManagerDashboard } from '../components/Dashboard/SafetyManagerDashboard';
import { QualityManagerDashboard } from '../components/Dashboard/QualityManagerDashboard';
import { SecurityManagerDashboard } from '../components/Dashboard/SecurityManagerDashboard';
import { HRManagerDashboard } from '../components/Dashboard/HRManagerDashboard';
import { TrainingManagerDashboard } from '../components/Dashboard/TrainingManagerDashboard';

export interface DashboardRoute {
  path: string;
  component: FC;
  role: UserRole;
}

export const dashboardRoutes: DashboardRoute[] = [
  {
    path: '/general-director',
    component: GeneralDirectorDashboard,
    role: UserRole.GENERAL_DIRECTOR,
  },
  {
    path: '/safety-manager',
    component: SafetyManagerDashboard,
    role: UserRole.SAFETY_MANAGER,
  },
  {
    path: '/quality-manager',
    component: QualityManagerDashboard,
    role: UserRole.QUALITY_MANAGER,
  },
  {
    path: '/security-manager',
    component: SecurityManagerDashboard,
    role: UserRole.SECURITY_MANAGER,
  },
  {
    path: '/hr-manager',
    component: HRManagerDashboard,
    role: UserRole.HR_MANAGER,
  },
  {
    path: '/training-manager',
    component: TrainingManagerDashboard,
    role: UserRole.TRAINING_MANAGER,
  },
];

export const getDashboardRoute = (role: UserRole): string => {
  const route = dashboardRoutes.find(r => r.role === role);
  return route ? route.path : '/general-director';
}; 