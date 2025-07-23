import React from "react";
import { Navigate } from "react-router-dom";

export default function RouteGuard({ children }) {
  const token = localStorage.getItem("m_g_a");
  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
