import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.userState);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user && !user.isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
