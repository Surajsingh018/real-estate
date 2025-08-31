// src/layouts/DashboardLayout.jsx
import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Optional: global header / sidebar */}
      <header className="bg-white shadow px-6 py-4">
        <h1 className="text-xl font-bold text-indigo-700">Propy Cons</h1>
      </header>

      <main className="p-4 md:p-6 lg:p-8">{children}</main>

      <footer className="bg-white border-t px-6 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Propy Cons, All rights reserved.
      </footer>
    </div>
  );
}