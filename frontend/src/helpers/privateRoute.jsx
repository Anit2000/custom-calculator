import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "./authContext";
import { Navigate } from "react-router-dom"; // Import Navigate

const PrivateRoute = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
