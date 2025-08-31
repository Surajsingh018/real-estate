// src/pages/AdminDashboard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  DollarSign,
  TrendingUp,
  Users,
  Plus,
  ArrowRight,
  Menu,
  X,
  Home,
  Settings,
  LogOut,
} from "lucide-react";

// ----------  DEMO DATA  ----------
const demoStats = {
  totalProperties: 12,
  totalInvested: 2650000,
  averageReturnRate: 8.3,
  activeInvestors: 47,
};

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);

// ----------  MAIN COMPONENT  ----------
export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* ----------  Sidebar  ---------- */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Admin</h1>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6 space-y-2 px-4">
          <Link
            to="/admin"
            className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-700"
          >
            <Home className="h-5 w-5" /> Dashboard
          </Link>
          <Link
            to="/admin/properties/create"
            className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-700"
          >
            <Plus className="h-5 w-5" /> Add Property
          </Link>
          <Link
            to="/admin/properties"
            className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-700"
          >
            <Building2 className="h-5 w-5" /> All Properties
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-700"
          >
            <Settings className="h-5 w-5" /> Settings
          </Link>
          <button
            className="flex items-center gap-3 px-2 py-2 rounded hover:bg-gray-700 w-full text-left"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/";
            }}
          >
            <LogOut className="h-5 w-5" /> Logout
          </button>
        </nav>
      </aside>

      {/* ----------  Mobile Sidebar Overlay  ---------- */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ----------  Main Content  ---------- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            Admin Dashboard
          </h2>
          <span className="text-sm text-gray-500">Welcome, Admin</span>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Building2 className="h-6 w-6 text-blue-600" />,
                label: "Total Properties",
                value: demoStats.totalProperties,
                bg: "bg-blue-100",
              },
              {
                icon: <DollarSign className="h-6 w-6 text-green-600" />,
                label: "Total Invested",
                value: formatCurrency(demoStats.totalInvested),
                bg: "bg-green-100",
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
                label: "Avg. Return Rate",
                value: `${demoStats.averageReturnRate}%`,
                bg: "bg-blue-100",
              },
              {
                icon: <Users className="h-6 w-6 text-yellow-600" />,
                label: "Active Investors",
                value: demoStats.activeInvestors,
                bg: "bg-yellow-100",
              },
            ].map(({ icon, label, value, bg }) => (
              <div
                key={label}
                className={`rounded-xl shadow border p-6 flex items-center gap-4 ${bg}`}
              >
                <div className="p-3 bg-white rounded-lg">{icon}</div>
                <div>
                  <p className="text-sm text-gray-600">{label}</p>
                  <p className="text-2xl font-bold">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/admin/properties/create"
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <Plus className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-medium">Add New Property</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-500" />
              </Link>
              <Link
                to="/admin/properties"
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="font-medium">View All Properties</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-500" />
              </Link>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-100">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="font-medium text-gray-500">Analytics</span>
                </div>
                <span className="text-xs text-gray-500">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="text-center py-8">
              <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">
                No recent activity to display. Create your first property to get
                started.
              </p>
              <Link
                to="/admin/properties/create"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center mx-auto"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Property
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t px-6 py-3 text-center text-sm text-gray-500">
          © 2025 Admin Panel – All rights reserved.
        </footer>
      </div>
    </div>
  );
}