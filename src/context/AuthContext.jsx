/* -----------------  AuthContext.jsx  ----------------- */
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  /*  initial state – localStorage OR sessionStorage  */
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("user") || sessionStorage.getItem("user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  /*  ----  DUMMY HELPERS  ----  */

  const register = async (payload) => {
    console.log("📦 Dummy register", payload);
    await new Promise((r) => setTimeout(r, 1200));
    return { success: true };
  };

  const verifyEmail = async (email, otp) => {
    console.log("✅ Dummy verify", email, otp);
    await new Promise((r) => setTimeout(r, 1000));
    if (otp !== "123456") throw new Error("Invalid OTP – use 123456");
  };

  const login = async ({ email, password, remember = true }) => {
    await new Promise((r) => setTimeout(r, 1000));
    let u = null;
    if (email === "admin@gmail.com" && password === "admin123") {
      u = { email, role: "admin", name: "Super Admin" };
    } else if (email === "user@gmail.com" && password === "user123") {
      u = { email, role: "user", name: "Demo User" };
    } else {
      throw new Error("Invalid credentials");
    }
    setUser(u);
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem("user", JSON.stringify(u));
    return u;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
  };

  /*  update profile (dummy)  */
  const updateProfile = async (updates) => {
    await new Promise((r) => setTimeout(r, 800));
    setUser((prev) => ({ ...prev, ...updates }));
    // persist
    const raw = localStorage.getItem("user") || sessionStorage.getItem("user");
    if (raw) {
      const storage = localStorage.getItem("user") ? localStorage : sessionStorage;
      storage.setItem("user", JSON.stringify({ ...JSON.parse(raw), ...updates }));
    }
    return { success: true };
  };

  /*  auto-logout on token expiry (optional)  */
  useEffect(() => {
    if (!user) return;
    // dummy expiry 2 hours
    const t = setTimeout(() => {
      logout();
      window.location.href = "/login";
    }, 2 * 60 * 60 * 1000);
    return () => clearTimeout(t);
  }, [user]);

  const value = {
    user,
    login,
    logout,
    register,
    verifyEmail,
    updateProfile,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};








// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const saved = localStorage.getItem("user");
//     return saved ? JSON.parse(saved) : null;
//   });

//   /* ----------  DUMMY REGISTER  ---------- */
//   const register = async (payload) => {
//     // payload = { name, email, password, phoneNumber }
//     console.log("📦 Dummy register", payload);
//     await new Promise((r) => setTimeout(r, 1200));
//     return { success: true };
//   };

//   /* ----------  DUMMY EMAIL VERIFY  ---------- */
//   const verifyEmail = async (email, otp) => {
//     console.log("✅ Dummy verify", email, otp);
//     await new Promise((r) => setTimeout(r, 1000));
//     if (otp !== "123456") throw new Error("Invalid OTP – use 123456");
//   };

//   /* ----------  DUMMY LOGIN  ---------- */
//   const login = async ({ email, password }) => {
//     await new Promise((r) => setTimeout(r, 1000));
//     let u = null;
//     if (email === "admin@gmail.com" && password === "admin123") {
//       u = { email, role: "admin" };
//     } else if (email === "user@gmail.com" && password === "user123") {
//       u = { email, role: "user" };
//     } else {
//       throw new Error("Invalid credentials");
//     }
//     setUser(u);
//     localStorage.setItem("user", JSON.stringify(u));
//     return u;
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, login, logout, register, verifyEmail }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };