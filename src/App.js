// src/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Public layout & pages
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions";

// User dashboard pages
import Dashboard from "./pages/account/Dashboard";
import Investment from "./pages/account/Investment";
import Transaction from "./pages/account/Transaction";
import Withdraw from "./pages/account/Withdraw";
import AccountSettings from "./pages/account/AccountSettings";

// Admin pages
import Layout from "./layouts/AdminLayout";
// import AdminDashboard from "./pages/admin/Dashboard";
import AdminPropertyList from "./pages/admin/PropertyList";
import AdminCreateProperty from "./pages/admin/CreateProperty";
import AdminEditProperty from "./pages/admin/EditProperty";
import AdminDashboard from './pages/admin/AdminDashboard';

// Route guards
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. Public routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:slug" element={<PropertyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/termsandcondition" element={<TermsAndConditions />} />
      </Route>

      {/* 2. User dashboard (protected) */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/investment" element={<Investment />} />
        <Route path="/dashboard/transaction" element={<Transaction />} />
        <Route path="/dashboard/withdraw" element={<Withdraw />} />
        <Route path="/dashboard/account" element={<AccountSettings />} />
      </Route>

      {/* 3. Admin panel (protected + layout) */}
      <Route element={<AdminRoute />}>
        <Route element={<Layout />}>
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/admin/properties" element={<AdminPropertyList />} />
          <Route path="/admin/properties/create" element={<AdminCreateProperty />} />
          <Route path="/admin/properties/edit/:id" element={<AdminEditProperty />} />
        </Route>
      </Route>

      {/* 4. 404 fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}