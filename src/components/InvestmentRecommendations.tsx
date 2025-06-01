
import React from 'react';
import { TrendingUp, Star, AlertCircle } from 'lucide-react';

const InvestmentRecommendations = () => {
  const recommendations = [
    {
      type: 'Buy',
      symbol: 'VTI',
      name: 'Vanguard Total Stock Market ETF',
      reason: 'Diversified exposure to US market',
      confidence: 'High',
      icon: TrendingUp,
      color: 'green',
    },
    {
      type: 'Hold',
      symbol: 'AAPL',
      name: 'Apple Inc.',
      reason: 'Strong fundamentals, fair valuation',
      confidence: 'Medium',
      icon: Star,
      color: 'blue',
    },
    {
      type: 'Watch',
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      reason: 'High volatility, wait for pullback',
      confidence: 'Medium',
      icon: AlertCircle,
      color: 'yellow',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">AI Investment Recommendations</h2>
      
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  rec.color === 'green' ? 'bg-green-100' :
                  rec.color === 'blue' ? 'bg-blue-100' : 'bg-yellow-100'
                }`}>
                  <rec.icon className={`h-4 w-4 ${
                    rec.color === 'green' ? 'text-green-600' :
                    rec.color === 'blue' ? 'text-blue-600' : 'text-yellow-600'
                  }`} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-900">{rec.symbol}</span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      rec.type === 'Buy' ? 'bg-green-100 text-green-800' :
                      rec.type === 'Hold' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {rec.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{rec.name}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                rec.confidence === 'High' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {rec.confidence}
              </span>
            </div>
            <p className="text-sm text-gray-700">{rec.reason}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-2">Portfolio Health Score</h4>
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 h-2 rounded-full" style={{ width: '78%' }}></div>
          </div>
          <span className="font-semibold text-gray-900">78/100</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">Good diversification, consider adding international exposure</p>
      </div>
    </div>
  );
};

export default InvestmentRecommendations;
