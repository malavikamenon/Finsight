
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PerformanceChart = () => {
  const data = [
    { date: 'Jan', portfolio: 105000, sp500: 104000 },
    { date: 'Feb', portfolio: 108000, sp500: 106000 },
    { date: 'Mar', portfolio: 112000, sp500: 108000 },
    { date: 'Apr', portfolio: 115000, sp500: 110000 },
    { date: 'May', portfolio: 118000, sp500: 112000 },
    { date: 'Jun', portfolio: 120000, sp500: 115000 },
    { date: 'Jul', portfolio: 124500, sp500: 118000 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Performance Comparison</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Your Portfolio</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
            <span className="text-sm text-gray-600">S&P 500</span>
          </div>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              stroke="#6b7280"
              fontSize={12}
            />
            <YAxis 
              stroke="#6b7280"
              fontSize={12}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip 
              formatter={(value) => [`$${value.toLocaleString()}`, '']}
              labelStyle={{ color: '#374151' }}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="portfolio" 
              stroke="#2563eb" 
              strokeWidth={3}
              dot={{ fill: '#2563eb', r: 4 }}
              activeDot={{ r: 6, fill: '#2563eb' }}
            />
            <Line 
              type="monotone" 
              dataKey="sp500" 
              stroke="#059669" 
              strokeWidth={3}
              dot={{ fill: '#059669', r: 4 }}
              activeDot={{ r: 6, fill: '#059669' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
