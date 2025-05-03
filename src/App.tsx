import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { useAuth } from './contexts/AuthContext';
import { appRoutes, getDashboardRoute } from './routes/dashboardRoutes';
import Login from './components/Auth/Login';
import './App.css';

const LoadingSpinner = () => (
  <div className="loading-spinner-container">
    <div className="loading-spinner"></div>
  </div>
);

const AppRoutes: React.FC = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace state={{ from: location }} />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        {appRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="/" element={<Navigate to={getDashboardRoute(user.role)} replace />} />
        <Route path="*" element={<Navigate to={getDashboardRoute(user.role)} replace />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
};

export default App;
