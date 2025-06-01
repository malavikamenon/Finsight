
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MarketData = () => {
  const marketData = [
    { symbol: 'S&P 500', value: '4,235.12', change: '+23.45', percentage: '+0.56%', isPositive: true },
    { symbol: 'NASDAQ', value: '13,456.78', change: '+45.23', percentage: '+0.34%', isPositive: true },
    { symbol: 'DOW', value: '34,123.45', change: '-12.34', percentage: '-0.04%', isPositive: false },
    { symbol: 'VIX', value: '18.23', change: '-1.23', percentage: '-6.32%', isPositive: true },
  ];

  const currencies = [
    { pair: 'EUR/USD', rate: '1.0845', change: '+0.0012', isPositive: true },
    { pair: 'GBP/USD', rate: '1.2678', change: '-0.0034', isPositive: false },
    { pair: 'USD/JPY', rate: '149.23', change: '+0.45', isPositive: true },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Indices</h3>
        <div className="space-y-3">
          {marketData.map((market, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{market.symbol}</p>
                <p className="text-lg font-bold text-gray-900">{market.value}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  {market.isPositive ? (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  )}
                  <span className={`font-medium ${
                    market.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {market.change}
                  </span>
                </div>
                <p className={`text-sm ${
                  market.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {market.percentage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Currency Rates</h3>
        <div className="space-y-3">
          {currencies.map((currency, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{currency.pair}</p>
                <p className="text-lg font-bold text-gray-900">{currency.rate}</p>
              </div>
              <div className="text-right">
                <span className={`font-medium ${
                  currency.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {currency.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketData;
