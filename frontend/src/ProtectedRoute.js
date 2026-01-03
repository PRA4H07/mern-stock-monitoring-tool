import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // If user is NOT logged in → go to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → allow page
  return children;
}

export default ProtectedRoute;
