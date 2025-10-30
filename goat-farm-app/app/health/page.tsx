'use client';

import { mockHealthRecords, mockGoats } from '@/lib/mockData';
import { formatDate, formatCurrency } from '@/lib/utils';
import { Activity, Plus, Syringe, Pill } from 'lucide-react';

export default function HealthPage() {
  const getGoatName = (id: string) => {
    const goat = mockGoats.find(g => g.id === id);
    return goat ? `${goat.name} (${goat.tagNumber})` : 'Unknown';
  };

  const vaccinationRecords = mockHealthRecords.filter(r => r.recordType === 'Vaccination');
  const dewormingRecords = mockHealthRecords.filter(r => r.recordType === 'Deworming');
  const treatmentRecords = mockHealthRecords.filter(r => r.recordType === 'Treatment');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Health Management</h1>
            <p className="text-gray-600 mt-2">Track vaccinations, treatments, and health records</p>
          </div>
          <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            <Plus size={20} />
            <span>New Health Record</span>
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Records</p>
                <p className="text-2xl font-bold mt-1">{mockHealthRecords.length}</p>
              </div>
              <Activity className="text-blue-500" size={32} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Vaccinations</p>
                <p className="text-2xl font-bold mt-1 text-green-600">{vaccinationRecords.length}</p>
              </div>
              <Syringe className="text-green-500" size={32} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Deworming</p>
                <p className="text-2xl font-bold mt-1 text-purple-600">{dewormingRecords.length}</p>
              </div>
              <Pill className="text-purple-500" size={32} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Cost</p>
                <p className="text-2xl font-bold mt-1 text-red-600">
                  {formatCurrency(mockHealthRecords.reduce((sum, r) => sum + r.cost, 0))}
                </p>
              </div>
              <div className="text-red-500 text-3xl">₹</div>
            </div>
          </div>
        </div>

        {/* Health Records Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Health Records</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reference No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Goat
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medicine
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cost
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Due
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockHealthRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {record.referenceNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getGoatName(record.goatId)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        record.recordType === 'Vaccination' ? 'bg-green-100 text-green-800' :
                        record.recordType === 'Deworming' ? 'bg-purple-100 text-purple-800' :
                        record.recordType === 'Treatment' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {record.recordType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(record.date)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {record.description}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {record.medicineUsed || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatCurrency(record.cost)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.nextDueDate ? formatDate(record.nextDueDate) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Vaccinations */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Upcoming Due Dates</h3>
          <div className="space-y-2">
            {mockHealthRecords.filter(r => r.nextDueDate).map((record) => (
              <div key={record.id} className="flex items-center justify-between bg-white p-3 rounded">
                <div className="flex items-center space-x-3">
                  <Syringe className="text-yellow-600" size={20} />
                  <div>
                    <p className="font-medium">{getGoatName(record.goatId)}</p>
                    <p className="text-sm text-gray-600">{record.description}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-yellow-700">
                  Due: {record.nextDueDate ? formatDate(record.nextDueDate) : '-'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
