import { Navigate } from "react-router-dom";

const RouteProtector = ({ children }) => {
  const token = localStorage.getItem("token"); // or from cookies or context

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default RouteProtector;
