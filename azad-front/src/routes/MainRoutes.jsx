import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "../pages/auth";
import LoginPage from "../pages/auth/Login";
import DashboardPage from "../pages/dashboard";
import SignupPage from "../pages/auth/Signup";

const RouteProtector = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

const MainRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="auth" element={<AuthPage />}>
        <Route path="login" element={<LoginPage />} />

        <Route path="signup" element={<SignupPage />} />
      </Route>

      {/* Protected Route */}
      <Route
        path="/"
        element={
          <RouteProtector>
            <DashboardPage />
          </RouteProtector>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
