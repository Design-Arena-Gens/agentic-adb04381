'use client';

import { mockGoats, mockBreedingRecords, mockHealthRecords, mockSalesRecords, mockExpenseRecords, mockFeedRecords } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';
import { FileText, Download } from 'lucide-react';

export default function ReportsPage() {
  const reportCategories = [
    {
      title: 'Herd & Animal Reports',
      reports: [
        'Goat Master List',
        'Breed-wise Goat Population',
        'Gender Distribution Report',
        'Age Group Distribution',
        'Mortality Report',
        'Birth & Death Register',
        'Herd Growth Trend',
        'Weight Gain Report',
        'Body Condition Score Summary',
        'Tag-wise Animal History'
      ]
    },
    {
      title: 'Breeding & Reproduction Reports',
      reports: [
        'Breeding Performance Report',
        'Kidding Outcome Report',
        'Fertility Index Report',
        'Service Record Report',
        'Pregnancy Diagnosis Report',
        'Parturition Calendar',
        'Reproductive Efficiency Graph',
        'Buck Performance Report',
        'Reproductive Loss Report',
        'Generation Lineage Report'
      ]
    },
    {
      title: 'Feed & Nutrition Reports',
      reports: [
        'Feed Consumption Summary',
        'Feed Cost Analysis',
        'Feed Conversion Ratio (FCR)',
        'Nutrient Intake Report',
        'Feed Inventory Report',
        'Seasonal Feed Requirement Forecast',
        'Feed Purchase Ledger',
        'Feed Schedule Adherence Report',
        'Own-Fodder Utilization Report',
        'Feed Efficiency Chart'
      ]
    },
    {
      title: 'Health & Veterinary Reports',
      reports: [
        'Vaccination Register',
        'Deworming Record',
        'Disease Incidence Report',
        'Treatment Register',
        'Health Status Summary',
        'Preventive Care Compliance',
        'Veterinary Cost Analysis',
        'Medical Inventory Report',
        'Quarantine Register',
        'Health Alert Dashboard'
      ]
    },
    {
      title: 'Finance & Sales Reports',
      reports: [
        'Sales Register',
        'Expense Register',
        'Profit & Loss Statement',
        'Cash Flow Report',
        'Revenue Source Breakdown',
        'Cost per Goat Report',
        'Feed Cost vs. Weight Gain Report',
        'ROI Analysis',
        'Income by Customer Report',
        'Monthly Financial Summary'
      ]
    },
    {
      title: 'Stock & Inventory Reports',
      reports: [
        'Inventory Ledger',
        'Item-wise Stock Valuation Report',
        'Supplier Performance Report',
        'Procurement History',
        'Waste / Spoilage Report',
        'Low Stock Alert Report'
      ]
    },
    {
      title: 'Production & Performance Reports',
      reports: [
        'Meat Production Report',
        'Rearing Duration Report',
        'Productivity Index',
        'Batch Comparison Report',
        'Farm Efficiency Dashboard',
        'Monthly Performance Report',
        'Yearly Review Report'
      ]
    }
  ];

  const quickStats = {
    totalGoats: mockGoats.length,
    totalBreedings: mockBreedingRecords.length,
    totalHealthRecords: mockHealthRecords.length,
    totalSales: mockSalesRecords.length,
    totalRevenue: mockSalesRecords.reduce((sum, r) => sum + r.salePrice, 0),
    totalExpenses: mockExpenseRecords.reduce((sum, r) => sum + r.amount, 0),
    totalFeedCost: mockFeedRecords.reduce((sum, r) => sum + r.totalCost, 0),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
        <p className="text-gray-600 mt-2">Comprehensive farm reports and data analysis</p>
      </div>

      {/* Quick Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white">
          <p className="text-blue-100 text-sm">Total Goats</p>
          <p className="text-3xl font-bold mt-1">{quickStats.totalGoats}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md p-6 text-white">
          <p className="text-green-100 text-sm">Total Revenue</p>
          <p className="text-3xl font-bold mt-1">{formatCurrency(quickStats.totalRevenue)}</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-md p-6 text-white">
          <p className="text-red-100 text-sm">Total Expenses</p>
          <p className="text-3xl font-bold mt-1">{formatCurrency(quickStats.totalExpenses)}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
          <p className="text-purple-100 text-sm">Net Profit</p>
          <p className="text-3xl font-bold mt-1">{formatCurrency(quickStats.totalRevenue - quickStats.totalExpenses)}</p>
        </div>
      </div>

      {/* Report Categories */}
      <div className="space-y-6">
        {reportCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <h2 className="text-lg font-semibold flex items-center space-x-2">
                <FileText className="text-green-600" size={20} />
                <span>{category.title}</span>
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.reports.map((report, idx) => (
                  <button
                    key={idx}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-green-500 transition-all text-left"
                  >
                    <span className="text-sm text-gray-700">{report}</span>
                    <Download className="text-gray-400 hover:text-green-600" size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Export Options */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-3">Export Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors">
            <FileText size={20} />
            <span>Export as PDF</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors">
            <FileText size={20} />
            <span>Export as Excel</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            <FileText size={20} />
            <span>Export as CSV</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            <FileText size={20} />
            <span>Print Report</span>
          </button>
        </div>
      </div>

      {/* Custom Report Builder */}
      <div className="mt-6 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Custom Report Builder</h3>
        <p className="text-gray-600 mb-4">
          Create custom reports by selecting specific date ranges, filters, and data fields.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Build Custom Report
        </button>
      </div>
    </div>
  );
}
