import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { Login } from './components/Auth/Login';
import { GeneralDirectorDashboard } from './components/Dashboard/GeneralDirectorDashboard';
import { SafetyManagerDashboard } from './components/Dashboard/SafetyManagerDashboard';
import { QualityManagerDashboard } from './components/Dashboard/QualityManagerDashboard';
import { SecurityManagerDashboard } from './components/Dashboard/SecurityManagerDashboard';
import { CAMOManagerDashboard } from './components/Dashboard/CAMOManagerDashboard';
import { HRManagerDashboard } from './components/Dashboard/HRManagerDashboard';
import { TrainingManagerDashboard } from './components/Dashboard/TrainingManagerDashboard';
import { HeadFlightOpsDashboard } from './components/Dashboard/HeadFlightOpsDashboard';
import { HeadMaintenanceDashboard } from './components/Dashboard/HeadMaintenanceDashboard';
import { HeadGroundHandlingDashboard } from './components/Dashboard/HeadGroundHandlingDashboard';
import { HeadCargoDashboard } from './components/Dashboard/HeadCargoDashboard';
import { HeadEngineeringDashboard } from './components/Dashboard/HeadEngineeringDashboard';
import { UserRole } from './types/user';
import './App.css';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  const { user } = useAuth();

  const getDashboardRoute = () => {
    switch (user?.role) {
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

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard/general-director"
            element={
              <PrivateRoute>
                <GeneralDirectorDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/safety-manager"
            element={
              <PrivateRoute>
                <SafetyManagerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/quality-manager"
            element={
              <PrivateRoute>
                <QualityManagerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/security-manager"
            element={
              <PrivateRoute>
                <SecurityManagerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/camo-manager"
            element={
              <PrivateRoute>
                <CAMOManagerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/hr-manager"
            element={
              <PrivateRoute>
                <HRManagerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/training-manager"
            element={
              <PrivateRoute>
                <TrainingManagerDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/head-flight-ops"
            element={
              <PrivateRoute>
                <HeadFlightOpsDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/head-maintenance"
            element={
              <PrivateRoute>
                <HeadMaintenanceDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/head-ground-handling"
            element={
              <PrivateRoute>
                <HeadGroundHandlingDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/head-cargo"
            element={
              <PrivateRoute>
                <HeadCargoDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/head-engineering"
            element={
              <PrivateRoute>
                <HeadEngineeringDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={<Navigate to={getDashboardRoute()} replace />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 