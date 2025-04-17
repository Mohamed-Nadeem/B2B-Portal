import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import OrderSummary from './components/OrderSummary';
import OrderSuccess from './components/OrderSuccess';
import ViewOrders from './components/ViewOrders';

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<><Header /><Dashboard /></>} />
          <Route path="/order-summary" element={<><Header /><OrderSummary /></>} />
          <Route path="/order-success" element={<><Header /><OrderSuccess /></>} />
          <Route path="/orders" element={<><Header /><ViewOrders /></>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;