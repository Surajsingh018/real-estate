// src/App.jsx
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext"; //  ✅ correct path

// common UI
import Header from "./components/Header";
import Footer from "./components/Footer";

// public pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions";

// protected dashboards
import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./pages/account/Dashboard";

/* ---------- Public layout (Header + Footer) ---------- */
function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

/* ---------- Protected route wrapper ---------- */
function ProtectedRoute({ role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/login" replace />;
  return <Outlet />;
}

/* ---------- All routes ---------- */
function AppRoutes() {
  return (
    <Routes>
      {/* public routes with Header & Footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/termsandcondition" element={<TermsAndConditions />} />
      </Route>

      {/* protected routes (no Header/Footer) */}
      <Route element={<ProtectedRoute role="user" />}>
        <Route path="/dashboard/user" element={<Dashboard />} />
      </Route>

      <Route element={<ProtectedRoute role="admin" />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      {/* catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

/* ---------- Root ---------- */
export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}