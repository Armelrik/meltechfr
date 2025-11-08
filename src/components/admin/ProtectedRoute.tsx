import { Navigate } from "react-router-dom";

/**
 * ⚠️ SECURITY WARNING ⚠️
 * This uses localStorage which can be easily manipulated.
 * This provides NO real security. Use proper server-side auth instead.
 */

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = localStorage.getItem("admin_auth") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
