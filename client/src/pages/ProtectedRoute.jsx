import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.userState);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};
export default ProtectedRoute;
