import AuthLayout from '../layout/AuthLayout';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/auth/Login';
import { authRoutes, mainRoutes } from '../utils/setting';

const { createBrowserRouter, Navigate } = require('react-router-dom');
const { default: UiLayout } = require('../layout/UiLayout');

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/auth/'} />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    path: '/main',
    element: <UiLayout />,
    children: mainRoutes,
  },
]);
