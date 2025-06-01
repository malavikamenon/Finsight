
import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Percent } from 'lucide-react';

const PortfolioOverview = () => {
  const stats = [
    {
      title: 'Total Portfolio Value',
      value: '$124,532.18',
      change: '+$2,431.50',
      percentage: '+2.0%',
      isPositive: true,
      icon: DollarSign,
    },
    {
      title: 'Today\'s Change',
      value: '+$1,243.76',
      change: 'vs yesterday',
      percentage: '+1.2%',
      isPositive: true,
      icon: TrendingUp,
    },
    {
      title: 'Total Return',
      value: '+$18,432.18',
      change: 'since inception',
      percentage: '+17.4%',
      isPositive: true,
      icon: Percent,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="h-5 w-5 text-blue-600" />
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                stat.isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {stat.percentage}
              </span>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Holdings</h3>
        <div className="space-y-3">
          {[
            { symbol: 'AAPL', name: 'Apple Inc.', value: '$23,450', percentage: '18.8%', change: '+2.3%', isPositive: true },
            { symbol: 'MSFT', name: 'Microsoft Corp.', value: '$19,230', percentage: '15.4%', change: '+1.8%', isPositive: true },
            { symbol: 'GOOGL', name: 'Alphabet Inc.', value: '$16,780', percentage: '13.5%', change: '-0.5%', isPositive: false },
            { symbol: 'TSLA', name: 'Tesla Inc.', value: '$12,340', percentage: '9.9%', change: '+4.2%', isPositive: true },
          ].map((holding, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{holding.symbol.slice(0, 2)}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{holding.symbol}</p>
                  <p className="text-sm text-gray-500">{holding.name}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{holding.value}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{holding.percentage}</span>
                  <span className={`text-sm font-medium ${
                    holding.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {holding.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;
