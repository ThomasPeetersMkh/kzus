import { useContext } from "react";
import TeacherContext from "../Context/UserContext";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  return true;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
