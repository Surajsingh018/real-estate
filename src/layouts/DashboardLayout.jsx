// src/layouts/DashboardLayout.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  CurrencyDollarIcon,   // use for Investment & Transaction
  ChartBarIcon,
  CogIcon,
  BellIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

const navLinks = [
  { name: 'Dashboard',   href: '/account/dashboard',   icon: HomeIcon },
  { name: 'Investment',  href: '/account/investment',  icon: CurrencyDollarIcon },
  { name: 'Transaction', href: '/account/transaction', icon: ChartBarIcon },
  { name: 'Withdraw',    href: '/account/withdraw',    icon: CogIcon },
  { name: 'Account',     href: '/account/account',     icon: CogIcon },
];

export default function DashboardLayout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white flex flex-col top-0 z-50">
        <div className="p-4 text-xl font-bold border-b border-indigo-600">
          Propy Cons
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === item.href
                    ? 'bg-indigo-800'
                    : 'hover:bg-indigo-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="relative p-1 rounded-full text-gray-400 hover:text-gray-600">
              <BellIcon className="w-6 h-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
            </button>
            <UserCircleIcon className="w-8 h-8 text-gray-500" />
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">{children}</main>

        <footer className="bg-white border-t px-6 py-3 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Propy Cons, All rights reserved.
        </footer>
      </div>
    </div>
  );
}