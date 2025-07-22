import { useUser } from "@/shared/store/AppStore";
import { Navigate, useLocation } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactElement;
  isPublic?: boolean;
};

export const ProtectedRoute = ({ children, isPublic }: ProtectedRouteProps) => {
  const user = useUser();
  const location = useLocation();

  if (!user && !isPublic) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (isPublic && user) {
    const from = location.state?.from || { pathname: "./profile" };
    return <Navigate to={from} />;
  }

  return children;
};
