import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Calendar, AlertTriangle, Target, Factory } from 'lucide-react';
import BusinessCalculator from './BusinessCalculator';
import FinancialCharts from './FinancialCharts';

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

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<BusinessMetrics>({
    dailyCapacity: 1000,
    sellingPrice: 2000,
    staffCount: 0,
    initialCapital: 0,
    dailyRevenue: 0,
    monthlyRevenue: 0,
    yearlyRevenue: 0,
    profitMargin: 0,
    breakEvenPoint: 0,
    currencyDepreciationFactor: 1.0,
  });

  const calculateMetrics = () => {
    const dailyFlourOutput = metrics.dailyCapacity * 0.25; // 25% flour yield from raw plantain
    const dailyRevenue = dailyFlourOutput * metrics.sellingPrice;
    const monthlyRevenue = dailyRevenue * 30;
    const yearlyRevenue = dailyRevenue * 365;

    // Staff calculation based on production capacity
    const baseStaff = 8; // Minimum staff for 1000kg capacity
    const additionalStaff = Math.floor(metrics.dailyCapacity / 500) * 2;
    const totalStaff = baseStaff + additionalStaff;

    // Initial capital calculation
    const equipmentCost = 15000000; // ₦15M for basic equipment
    const facilityCost = 8000000; // ₦8M for facility setup
    const workingCapital = 5000000; // ₦5M working capital
    const initialCapital = equipmentCost + facilityCost + workingCapital;

    // Operating costs
    const monthlyOperatingCost = 3500000; // ₦3.5M monthly operating cost
    const profitMargin = ((monthlyRevenue - monthlyOperatingCost) / monthlyRevenue) * 100;

    // Break-even analysis
    const fixedCosts = monthlyOperatingCost;
    const variableCostPerKg = 800; // ₦800 per kg production cost
    const contributionMargin = metrics.sellingPrice - variableCostPerKg;
    const breakEvenPoint = fixedCosts / contributionMargin;

    setMetrics(prev => ({
      ...prev,
      staffCount: totalStaff,
      initialCapital,
      dailyRevenue,
      monthlyRevenue,
      yearlyRevenue,
      profitMargin: Math.max(0, profitMargin),
      breakEvenPoint,
    }));
  };

  useEffect(() => {
    calculateMetrics();
  }, [metrics.dailyCapacity, metrics.sellingPrice, metrics.currencyDepreciationFactor]);

  const metricCards = [
    {
      title: 'Daily Production Capacity',
      value: `${metrics.dailyCapacity}kg`,
      subValue: `${metrics.dailyCapacity * 0.25}kg flour output`,
      icon: Factory,
      color: 'bg-blue-500',
    },
    {
      title: 'Required Staff',
      value: `${metrics.staffCount} employees`,
      subValue: 'Including supervisors & workers',
      icon: Users,
      color: 'bg-emerald-500',
    },
    {
      title: 'Initial Capital Required',
      value: `₦${(metrics.initialCapital / 1000000).toFixed(1)}M`,
      subValue: 'Equipment, facility & working capital',
      icon: DollarSign,
      color: 'bg-orange-500',
    },
    {
      title: 'Monthly Revenue',
      value: `₦${(metrics.monthlyRevenue / 1000000).toFixed(2)}M`,
      subValue: `${metrics.profitMargin.toFixed(1)}% profit margin`,
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
    {
      title: 'Break-Even Point',
      value: `${Math.ceil(metrics.breakEvenPoint)}kg/month`,
      subValue: 'Production needed to break even',
      icon: Target,
      color: 'bg-red-500',
    },
    {
      title: 'Currency Impact Factor',
      value: `${metrics.currencyDepreciationFactor.toFixed(2)}x`,
      subValue: 'Depreciation adjustment multiplier',
      icon: AlertTriangle,
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metricCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{card.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{card.subValue}</p>
                </div>
                <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Calculator and Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <BusinessCalculator metrics={metrics} setMetrics={setMetrics} />
        <FinancialCharts metrics={metrics} />
      </div>

      {/* Quarterly Progression Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Quarterly Business Progression</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Quarter</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Production (kg)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Revenue (₦M)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Profit (₦M)</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Growth %</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((quarter) => {
                const quarterlyProduction = (metrics.dailyCapacity * 0.25 * 90) * (1 + (quarter - 1) * 0.15);
                const quarterlyRevenue = quarterlyProduction * metrics.sellingPrice;
                const quarterlyProfit = quarterlyRevenue * (metrics.profitMargin / 100);
                const growthRate = quarter === 1 ? 0 : 15 * (quarter - 1);
                
                return (
                  <tr key={quarter} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">Q{quarter} 2025</td>
                    <td className="py-3 px-4">{quarterlyProduction.toLocaleString()}</td>
                    <td className="py-3 px-4">₦{(quarterlyRevenue / 1000000).toFixed(2)}M</td>
                    <td className="py-3 px-4">₦{(quarterlyProfit / 1000000).toFixed(2)}M</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        growthRate > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {growthRate > 0 ? '+' : ''}{growthRate.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;