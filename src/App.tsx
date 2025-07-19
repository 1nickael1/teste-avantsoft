import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthInitializer } from './components/auth/AuthInitializer';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { ThemeProvider } from './components/theme-provider';
import { Layout } from './components/ui/Layout';
import { ClientesPage } from './pages/ClientesPage';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AuthInitializer>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Layout>
                    <DashboardPage />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route
              path="/clientes"
              element={
                <PrivateRoute>
                  <Layout>
                    <ClientesPage />
                  </Layout>
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Router>
      </AuthInitializer>
    </ThemeProvider>
  );
}

export default App;
