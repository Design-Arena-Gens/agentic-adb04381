'use client';

import StatCard from '@/components/StatCard';
import { mockDashboardStats, mockGoats, mockBreedingRecords } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';
import {
  Users,
  Activity,
  Heart,
  Baby,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Package,
  AlertCircle
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard() {
  const stats = mockDashboardStats;

  const genderData = [
    { name: 'Does', value: stats.totalDoes },
    { name: 'Bucks', value: stats.totalBucks },
  ];

  const financialData = [
    { name: 'Sales', value: stats.totalSalesThisMonth },
    { name: 'Expenses', value: stats.totalExpensesThisMonth },
    { name: 'Profit', value: stats.profitThisMonth },
  ];

  const COLORS = ['#10b981', '#3b82f6', '#ef4444'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to Commercial Goat Farm Management System</p>
        <p className="text-sm text-gray-500">Dharmendra Kumar | Sitamarhi, Bihar, India</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Goats"
          value={stats.totalGoats}
          icon={Users}
          color="bg-blue-500"
          subtitle={`${stats.activeGoats} active`}
        />
        <StatCard
          title="Does"
          value={stats.totalDoes}
          icon={Heart}
          color="bg-pink-500"
          subtitle={`${stats.pregnantDoes} pregnant`}
        />
        <StatCard
          title="Bucks"
          value={stats.totalBucks}
          icon={Activity}
          color="bg-green-500"
        />
        <StatCard
          title="Expected Kiddings"
          value={stats.expectedKiddings}
          icon={Baby}
          color="bg-purple-500"
        />
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Sales This Month"
          value={formatCurrency(stats.totalSalesThisMonth)}
          icon={TrendingUp}
          color="bg-green-600"
        />
        <StatCard
          title="Expenses This Month"
          value={formatCurrency(stats.totalExpensesThisMonth)}
          icon={TrendingDown}
          color="bg-red-500"
        />
        <StatCard
          title="Profit This Month"
          value={formatCurrency(stats.profitThisMonth)}
          icon={DollarSign}
          color="bg-emerald-600"
        />
      </div>

      {/* Inventory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatCard
          title="Feed Stock"
          value={`${stats.feedStock} kg`}
          icon={Package}
          color="bg-amber-500"
        />
        <StatCard
          title="Low Stock Items"
          value={stats.lowStockItems}
          icon={AlertCircle}
          color="bg-orange-500"
          subtitle="Need reorder"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Financial Overview */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Financial Overview (This Month)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Legend />
              <Bar dataKey="value" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gender Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Herd Gender Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#ec4899' : '#10b981'} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Baby className="text-green-600" />
              <div>
                <p className="font-medium">New Birth</p>
                <p className="text-sm text-gray-600">2 kids born to Ganga (BAR-DOE-001)</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">2 months ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Heart className="text-blue-600" />
              <div>
                <p className="font-medium">Breeding Record</p>
                <p className="text-sm text-gray-600">Jamuna bred with Sultan</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">2 months ago</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Activity className="text-purple-600" />
              <div>
                <p className="font-medium">Health Checkup</p>
                <p className="text-sm text-gray-600">Quarterly deworming completed</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">5 months ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
