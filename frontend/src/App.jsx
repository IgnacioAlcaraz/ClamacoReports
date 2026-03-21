import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import ReportPage from './pages/ReportPage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reporte" element={<PrivateRoute><ReportPage /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/reporte" replace />} />
    </Routes>
  );
}
