import Dashboard from '../screens/Dashboard';
import Login from '../screens/auth/Login';
import { Navigate } from 'react-router-dom';
import { Gauge } from 'lucide-react';

export const authRoutes = [
  {
    path: '/auth',
    element: <Navigate to={'login'} />,
  },
  {
    path: 'login',
    element: <Login />,
  },
];

export const mainRoutes = [
  {
    path: '/main',
    element: <Navigate to={'/main/dashboard'} />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    showOnDashboard: true,
    icon: <Gauge />,
    title: 'Dashboard',
  },
];
