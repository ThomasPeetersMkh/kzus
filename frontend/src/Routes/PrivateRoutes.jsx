import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const user = useSelector((state) => state.userState);
  return user.isLoggedIn;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
