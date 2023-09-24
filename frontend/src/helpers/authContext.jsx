import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        data.ok ? setUser(data) : setUser(null);
        console.log(user, data);
      })
      .catch((err) => console.log(err, "error catch"));
  }, []);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
