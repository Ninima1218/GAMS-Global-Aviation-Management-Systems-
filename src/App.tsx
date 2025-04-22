import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { HRProvider } from './contexts/HRContext';
import { Login } from './components/Auth/Login';
import { Layout } from './components/Layout/Layout';
import { ReportsPage } from './pages/ReportsPage';
import { dashboardRoutes, getDashboardRoute } from './routes/dashboardRoutes';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <HRProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <PrivateRoute>
                  <Layout>
                    <Routes>
                      {dashboardRoutes.map(route => (
                        <Route
                          key={route.path}
                          path={route.path}
                          element={<route.component />}
                        />
                      ))}
                      <Route path="/reports" element={<ReportsPage />} />
                      <Route
                        path="/"
                        element={
                          <Navigate
                            to={user ? getDashboardRoute(user.role) : '/login'}
                          />
                        }
                      />
                    </Routes>
                  </Layout>
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </HRProvider>
    </AuthProvider>
  );
};

export default App;