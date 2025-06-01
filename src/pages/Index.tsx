
import React from 'react';
import Header from '../components/Header';
import PortfolioOverview from '../components/PortfolioOverview';
import PerformanceChart from '../components/PerformanceChart';
import ExpenseTracker from '../components/ExpenseTracker';
import InvestmentRecommendations from '../components/InvestmentRecommendations';
import MarketData from '../components/MarketData';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, Alex</h1>
          <p className="text-lg text-gray-600">Here's your financial overview for today</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <PortfolioOverview />
          </div>
          <div>
            <MarketData />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-2">
            <PerformanceChart />
          </div>
          <div>
            <InvestmentRecommendations />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ExpenseTracker />
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
            <div className="space-y-3">
              {[
                { name: 'AAPL', type: 'Buy', amount: '+5 shares', value: '$875.50', time: '2 hours ago' },
                { name: 'Tesla Inc.', type: 'Sell', amount: '-2 shares', value: '$584.20', time: '1 day ago' },
                { name: 'Amazon', type: 'Buy', amount: '+1 share', value: '$145.30', time: '3 days ago' },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-500">{transaction.amount} • {transaction.time}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${transaction.type === 'Buy' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'Buy' ? '-' : '+'}{transaction.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
