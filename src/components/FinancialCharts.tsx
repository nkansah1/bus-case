import React from 'react';
import { BarChart3, PieChart, TrendingUp } from 'lucide-react';

interface BusinessMetrics {
  dailyCapacity: number;
  sellingPrice: number;
  staffCount: number;
  initialCapital: number;
  dailyRevenue: number;
  monthlyRevenue: number;
  yearlyRevenue: number;
  profitMargin: number;
  breakEvenPoint: number;
  currencyDepreciationFactor: number;
}

interface Props {
  metrics: BusinessMetrics;
}

const FinancialCharts: React.FC<Props> = ({ metrics }) => {
  // Generate quarterly data
  const quarterlyData = [1, 2, 3, 4].map(quarter => {
    const baseRevenue = metrics.monthlyRevenue * 3;
    const growthFactor = 1 + (quarter - 1) * 0.15;
    const adjustedRevenue = baseRevenue * growthFactor * metrics.currencyDepreciationFactor;
    return {
      quarter: `Q${quarter}`,
      revenue: adjustedRevenue / 1000000,
      profit: (adjustedRevenue * (metrics.profitMargin / 100)) / 1000000,
    };
  });

  const costBreakdown = [
    { category: 'Equipment', amount: 15, color: 'bg-blue-500' },
    { category: 'Facility Setup', amount: 8, color: 'bg-emerald-500' },
    { category: 'Working Capital', amount: 5, color: 'bg-orange-500' },
  ];

  const totalCost = costBreakdown.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="space-y-6">
      {/* Quarterly Revenue Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <BarChart3 className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-semibold text-gray-900">Quarterly Financial Projection</h3>
        </div>
        
        <div className="space-y-4">
          {quarterlyData.map((data, index) => {
            const maxValue = Math.max(...quarterlyData.map(d => d.revenue));
            const revenueWidth = (data.revenue / maxValue) * 100;
            const profitWidth = (data.profit / maxValue) * 100;
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{data.quarter} 2025</span>
                  <span className="text-sm text-gray-600">₦{data.revenue.toFixed(2)}M</span>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-6 rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${revenueWidth}%` }}
                    >
                      <span className="text-white text-xs font-medium">Revenue</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 mt-1">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${profitWidth}%` }}
                    >
                      <span className="text-white text-xs">₦{data.profit.toFixed(1)}M</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Capital Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <PieChart className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl font-semibold text-gray-900">Initial Capital Breakdown</h3>
        </div>
        
        <div className="space-y-4">
          {costBreakdown.map((item, index) => {
            const percentage = (item.amount / totalCost) * 100;
            
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 ${item.color} rounded`}></div>
                  <span className="font-medium text-gray-700">{item.category}</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-gray-900">₦{item.amount}M</span>
                  <span className="text-sm text-gray-500 ml-2">({percentage.toFixed(1)}%)</span>
                </div>
              </div>
            );
          })}
          
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex items-center justify-between font-bold text-lg">
              <span className="text-gray-900">Total Investment</span>
              <span className="text-blue-600">₦{totalCost}M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Currency Impact Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="w-6 h-6 text-red-600" />
          <h3 className="text-xl font-semibold text-gray-900">Currency Depreciation Impact</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-gray-600">Adjusted Annual Revenue</p>
            <p className="text-2xl font-bold text-red-600">
              ₦{((metrics.yearlyRevenue * metrics.currencyDepreciationFactor) / 1000000).toFixed(1)}M
            </p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Impact Factor</p>
            <p className="text-2xl font-bold text-blue-600">
              {metrics.currencyDepreciationFactor}x
            </p>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Recommendation:</strong> Factor values &gt;1.2 indicate significant depreciation risk. 
            Consider hedging strategies or pricing adjustments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialCharts;