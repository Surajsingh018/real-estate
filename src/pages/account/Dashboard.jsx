// src/pages/account/Dashboard.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import {
  HomeIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  EyeIcon,
  HeartIcon,
  CalendarDaysIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline';
import { userApi } from '../../api/user';

const fmtMoney = (n) =>
  typeof n === 'number'
    ? n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
    : '—';

const formatShortDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [me, setMe] = useState(null);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const [meRes, statRes] = await Promise.all([userApi.getMe(), userApi.getMyStats()]);
        setMe(meRes.data);
        setStats(statRes.data);
      } catch (e) {
        setError(e?.message || 'Could not load dashboard');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const statCards = useMemo(() => {
    const s = stats || {};
    return [
      {
        name: 'Total Properties',
        value: String(s.totalProperties ?? 0),
        change: '+2',
        changeType: 'increase',
        Icon: HomeIcon,
        color: 'bg-blue-500',
      },
      {
        name: 'Portfolio Value',
        value: fmtMoney(s.portfolioValue ?? 0),
        change: '+12.5%',
        changeType: 'increase',
        Icon: CurrencyDollarIcon,
        color: 'bg-green-500',
      },
      {
        name: 'Monthly Income',
        value: fmtMoney(s.monthlyIncome ?? 0),
        change: '+8.2%',
        changeType: 'increase',
        Icon: ArrowTrendingUpIcon,
        color: 'bg-purple-500',
      },
      {
        name: 'ROI',
        value: typeof s.roi === 'number' ? `${s.roi.toFixed(2)}%` : '0%',
        change: '-2.1%',
        changeType: 'decrease',
        Icon: ChartBarIcon,
        color: 'bg-orange-500',
      },
    ];
  }, [stats]);

  const recentProperties = [
    {
      id: 1,
      title: 'Modern Villa in Beverly Hills',
      location: 'Beverly Hills, CA',
      price: '$2,850,000',
      image:
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Active',
      views: 245,
      likes: 18,
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      location: 'Manhattan, NY',
      price: '$3,200,000',
      image:
        'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Sold',
      views: 189,
      likes: 24,
    },
    {
      id: 3,
      title: 'Waterfront Condo',
      location: 'Miami Beach, FL',
      price: '$1,850,000',
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'Pending',
      views: 156,
      likes: 12,
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'Purchase',
      property: 'Ocean View Apartment',
      amount: '$850,000',
      date: '2025-08-30',
      status: 'Completed',
    },
    {
      id: 2,
      type: 'Sale',
      property: 'Downtown Office Space',
      amount: '$1,200,000',
      date: '2025-08-28',
      status: 'Completed',
    },
    {
      id: 3,
      type: 'Rental Income',
      property: 'Luxury Villa',
      amount: '$4,500',
      date: '2025-08-25',
      status: 'Received',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {loading ? 'Loading…' : `Welcome back, ${me?.name?.split(' ')[0] || 'Investor'}!`}
              </h1>
              <p className="text-blue-100 text-lg">
                Here's what's happening with your properties today.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <CalendarDaysIcon className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-rose-700">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(loading ? Array.from({ length: 4 }) : statCards).map((stat, idx) => {
            if (loading) {
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 animate-pulse"
                >
                  <div className="h-4 w-24 bg-gray-200 rounded" />
                  <div className="h-8 w-32 bg-gray-200 rounded mt-3" />
                  <div className="h-4 w-28 bg-gray-100 rounded mt-4" />
                </div>
              );
            }
            const Icon = stat.Icon;
            return (
              <div
                key={stat.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    {stat.change && (
                      <div className="flex items-center mt-2">
                        {stat.changeType === 'increase' ? (
                          <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
                        ) : (
                          <ArrowDownIcon className="w-4 h-4 text-red-500 mr-1" />
                        )}
                        <span
                          className={`text-sm font-medium ${
                            stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {stat.change}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">vs last month</span>
                      </div>
                    )}
                  </div>
                  <div
                    className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Properties */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-blue-900">Recent Properties</h2>
            </div>
            <div className="p-6 space-y-4">
              {recentProperties.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.location}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-lg font-bold text-blue-600">{p.price}</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          p.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : p.status === 'Sold'
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <EyeIcon className="w-4 h-4" />
                      <span>{p.views}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                      <HeartIcon className="w-4 h-4" />
                      <span>{p.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-blue-900">Recent Transactions</h2>
            </div>
            <div className="p-6 space-y-4">
              {recentTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'Purchase'
                          ? 'bg-blue-100'
                          : tx.type === 'Sale'
                          ? 'bg-green-100'
                          : 'bg-purple-100'
                      }`}
                    >
                      <CurrencyDollarIcon
                        className={`w-5 h-5 ${
                          tx.type === 'Purchase'
                            ? 'text-blue-600'
                            : tx.type === 'Sale'
                            ? 'text-green-600'
                            : 'text-purple-600'
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{tx.type}</h3>
                      <p className="text-sm text-gray-600">{tx.property}</p>
                      <p className="text-xs text-gray-500">{formatShortDate(tx.date)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{tx.amount}</p>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => navigate('/properties/add')}
              className="flex items-center justify-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <HomeIcon className="w-6 h-6 text-gray-400" />
              <span className="font-medium text-gray-700">Add New Property</span>
            </button>
            <button
              onClick={() => navigate('/analytics')}
              className="flex items-center justify-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              <ChartBarIcon className="w-6 h-6 text-gray-400" />
              <span className="font-medium text-gray-700">View Analytics</span>
            </button>
            <button
              onClick={() => navigate('/invest')}
              className="flex items-center justify-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
            >
              <CurrencyDollarIcon className="w-6 h-6 text-gray-400" />
              <span className="font-medium text-gray-700">Make Investment</span>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}