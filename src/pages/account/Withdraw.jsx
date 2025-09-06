// src/pages/account/Withdraw.jsx
import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';   // ← fixed path
import { 
  BanknotesIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

const Withdraw = () => {
  const [withdrawalMethod, setWithdrawalMethod] = useState('bank');
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock data
  const availableBalance = 45750;
  const minimumWithdrawal = 100;
  const maximumWithdrawal = 50000;

  const withdrawalMethods = [
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: BuildingLibraryIcon,
      processingTime: '1-3 business days',
      fee: 0,
      description: 'Direct transfer to your bank account'
    },
    {
      id: 'card',
      name: 'Debit Card',
      icon: CreditCardIcon,
      processingTime: 'Instant',
      fee: 2.5,
      description: 'Instant withdrawal to your debit card'
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      icon: BanknotesIcon,
      processingTime: '10-30 minutes',
      fee: 1.0,
      description: 'Withdraw to your crypto wallet'
    }
  ];

  const recentWithdrawals = [
    {
      id: 1,
      amount: 15000,
      method: 'Bank Transfer',
      status: 'completed',
      date: '2024-01-10',
      reference: 'WTH-2024-001'
    },
    {
      id: 2,
      amount: 5000,
      method: 'Debit Card',
      status: 'pending',
      date: '2024-01-08',
      reference: 'WTH-2024-002'
    },
    {
      id: 3,
      amount: 8500,
      method: 'Bank Transfer',
      status: 'completed',
      date: '2024-01-05',
      reference: 'WTH-2024-003'
    }
  ];

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.abs(amount));

  const calculateFee = () => {
    const selected = withdrawalMethods.find(m => m.id === withdrawalMethod);
    const withdrawAmount = parseFloat(amount) || 0;
    return (withdrawAmount * selected.fee) / 100;
  };

  const getNetAmount = () => {
    const withdrawAmount = parseFloat(amount) || 0;
    return withdrawAmount - calculateFee();
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      alert('Withdrawal request submitted successfully!');
      setAmount('');
    }, 2000);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <ClockIcon className="w-5 h-5 text-yellow-500" />;
      case 'failed':
        return <ExclamationTriangleIcon className="w-5 h-5 text-red-500" />;
      default:
        return <ClockIcon className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':   return 'badge badge-success';
      case 'pending':     return 'badge badge-warning';
      case 'failed':      return 'badge bg-red-100 text-red-800';
      default:            return 'badge bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Withdraw Funds</h1>
            <p className="text-gray-600">Withdraw your earnings to your preferred payment method</p>
          </div>
        </div>

        {/* Page Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow p-8">
                {/* Balance */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Available Balance</h3>
                      <p className="text-3xl font-bold text-purple-600">{formatCurrency(availableBalance)}</p>
                    </div>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <BanknotesIcon className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                </div>

                {/* Withdrawal methods */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Withdrawal Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {withdrawalMethods.map((m) => {
                      const Icon = m.icon;
                      return (
                        <label key={m.id} className="cursor-pointer">
                          <input
                            type="radio"
                            name="withdrawalMethod"
                            value={m.id}
                            checked={withdrawalMethod === m.id}
                            onChange={(e) => setWithdrawalMethod(e.target.value)}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-lg transition-all ${
                            withdrawalMethod === m.id
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <Icon className={`w-8 h-8 mb-2 mx-auto ${
                              withdrawalMethod === m.id ? 'text-purple-600' : 'text-gray-400'
                            }`} />
                            <h4 className="font-semibold text-center">{m.name}</h4>
                            <p className="text-sm text-gray-600 text-center">{m.processingTime}</p>
                            <p className="text-xs text-gray-500 text-center">Fee: {m.fee === 0 ? 'Free' : `${m.fee}%`}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleWithdraw}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min={minimumWithdrawal}
                        max={Math.min(maximumWithdrawal, availableBalance)}
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter amount"
                        required
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>Min: {formatCurrency(minimumWithdrawal)}</span>
                      <span>Max: {formatCurrency(Math.min(maximumWithdrawal, availableBalance))}</span>
                    </div>
                  </div>

                  {amount && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold mb-2">Summary</h4>
                      <div className="flex justify-between"><span>Amount:</span><span>{formatCurrency(parseFloat(amount))}</span></div>
                      <div className="flex justify-between"><span>Fee:</span><span>{formatCurrency(calculateFee())}</span></div>
                      <div className="flex justify-between font-bold"><span>Net:</span><span className="text-green-600">{formatCurrency(getNetAmount())}</span></div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!amount || isProcessing || parseFloat(amount) < minimumWithdrawal}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Processing...' : 'Withdraw Funds'}
                  </button>
                </form>
              </div>
            </div>

            {/* Right column: info & recent withdrawals */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center mb-4">
                  <InformationCircleIcon className="w-6 h-6 text-purple-600 mr-2" />
                  <h3 className="text-lg font-semibold">Important Info</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 9 AM – 5 PM EST processing</li>
                  <li>• 1–3 business days (bank)</li>
                  <li>• Min: {formatCurrency(minimumWithdrawal)}</li>
                  <li>• Max: {formatCurrency(maximumWithdrawal)}</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Withdrawals</h3>
                <div className="space-y-4">
                  {recentWithdrawals.map((w) => (
                    <div key={w.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{formatCurrency(w.amount)}</p>
                        <p className="text-sm text-gray-500">{w.method}</p>
                      </div>
                      <div className="text-right">
                        <span className={getStatusBadge(w.status)}>{w.status}</span>
                        <p className="text-xs text-gray-500">{new Date(w.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Withdraw;