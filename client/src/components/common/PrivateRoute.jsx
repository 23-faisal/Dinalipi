import useAuthStore from "@/store/authStore";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { user } = useAuthStore();
  return user ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
