import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function ProtectedRoute({ children }) {
  const { user, setShowLogin } = useContext(AppContext);

  if (!user) {
    setShowLogin(true);
    return <Navigate to="/" replace />;
  }

  return children;
}
