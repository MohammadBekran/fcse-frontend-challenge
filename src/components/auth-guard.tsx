import { Navigate } from "react-router";

import { ERoutes } from "@/core/enums";
import { getItem } from "@/core/services/common/storage.services";

interface IAuthGuardProps {
  requireAuth?: boolean;
  children: React.ReactNode;
}

const AuthGuard: React.FC<IAuthGuardProps> = ({
  requireAuth = true,
  children,
}) => {
  const token = getItem("token");
  const isAuthenticated = !!token;

  if (requireAuth && !isAuthenticated) {
    return <Navigate to={ERoutes.Login} />;
  }

  if (!requireAuth && isAuthenticated) {
    return <Navigate to={ERoutes.Dashboard} />;
  }

  return children;
};

export default AuthGuard;
