import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email, password) => {
    // DEMO CREDENTIALS
    if (email === "admin@gmail.com" && password === "admin123") {
      const u = { email, role: "admin" };
      setUser(u);
      localStorage.setItem("user", JSON.stringify(u));
      return u;
    }
    if (email === "user@gmail.com" && password === "user123") {
      const u = { email, role: "user" };
      setUser(u);
      localStorage.setItem("user", JSON.stringify(u));
      return u;
    }
    throw new Error("Invalid credentials");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};