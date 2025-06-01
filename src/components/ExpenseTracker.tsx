
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const ExpenseTracker = () => {
  const expenseData = [
    { name: 'Housing', value: 2800, color: '#2563eb' },
    { name: 'Food', value: 800, color: '#059669' },
    { name: 'Transportation', value: 600, color: '#dc2626' },
    { name: 'Entertainment', value: 400, color: '#7c3aed' },
    { name: 'Utilities', value: 300, color: '#ea580c' },
    { name: 'Other', value: 500, color: '#6b7280' },
  ];

  const totalExpenses = expenseData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Monthly Expenses</h2>
      
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <div className="w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">${totalExpenses.toLocaleString()}</p>
              <p className="text-sm text-gray-500">Total</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {expenseData.map((expense, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: expense.color }}
              ></div>
              <span className="text-gray-700">{expense.name}</span>
            </div>
            <div className="text-right">
              <span className="font-semibold text-gray-900">${expense.value}</span>
              <span className="text-sm text-gray-500 ml-2">
                {((expense.value / totalExpenses) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseTracker;
