import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const cookies = useCookies(["user"])[0];
  if (!cookies.user) return <Navigate to="/login"/>;

  return <Outlet />
};

export default ProtectRoute;
