
import React from 'react';
import { TrendingUp, DollarSign, BarChart3, Settings, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              FinSight
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-2 text-blue-600 font-medium">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <DollarSign className="h-4 w-4" />
              <span>Portfolio</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Expenses</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Analytics</a>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
