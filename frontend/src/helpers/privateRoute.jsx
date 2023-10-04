import React, { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "./authContext";
import { Navigate } from "react-router-dom"; // Import Navigate

const PrivateRoute = () => {
  const { user,login } = useAuth();
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        if(data.ok){
          login(data);
        }
      })
      .catch((err) => {
        console.log(err);
        return <Navigate to="/" replace={true} />;
      });
  }, []);
  return <Outlet />
};

export default PrivateRoute;
