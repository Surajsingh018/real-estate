import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  /* ----------  DUMMY REGISTER  ---------- */
  const register = async (payload) => {
    // payload = { name, email, password, phoneNumber }
    console.log("📦 Dummy register", payload);
    await new Promise((r) => setTimeout(r, 1200));
    return { success: true };
  };

  /* ----------  DUMMY EMAIL VERIFY  ---------- */
  const verifyEmail = async (email, otp) => {
    console.log("✅ Dummy verify", email, otp);
    await new Promise((r) => setTimeout(r, 1000));
    if (otp !== "123456") throw new Error("Invalid OTP – use 123456");
  };

  /* ----------  DUMMY LOGIN  ---------- */
  const login = async ({ email, password }) => {
    await new Promise((r) => setTimeout(r, 1000));
    let u = null;
    if (email === "admin@gmail.com" && password === "admin123") {
      u = { email, role: "admin" };
    } else if (email === "user@gmail.com" && password === "user123") {
      u = { email, role: "user" };
    } else {
      throw new Error("Invalid credentials");
    }
    setUser(u);
    localStorage.setItem("user", JSON.stringify(u));
    return u;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, verifyEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};