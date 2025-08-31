// src/layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import { PropertyProvider } from "../context/PropertyContext";

export default function AdminLayout() {
  return (
    <PropertyProvider>
      <Outlet /> {/* only the page content */}
    </PropertyProvider>
  );
}