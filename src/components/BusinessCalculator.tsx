import React from 'react';
import { Calculator, TrendingDown } from 'lucide-react';

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
  setMetrics: React.Dispatch<React.SetStateAction<BusinessMetrics>>;
}

const BusinessCalculator: React.FC<Props> = ({ metrics, setMetrics }) => {
  const handleInputChange = (field: keyof BusinessMetrics, value: number) => {
    setMetrics(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Business Parameters</h3>
      </div>

      <div className="space-y-6">
        {/* Production Capacity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Daily Raw Plantain Capacity (kg)
          </label>
          <input
            type="number"
            value={metrics.dailyCapacity}
            onChange={(e) => handleInputChange('dailyCapacity', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="100"
            step="100"
          />
          <p className="text-xs text-gray-500 mt-1">
            Flour output: {(metrics.dailyCapacity * 0.25).toFixed(0)}kg/day
          </p>
        </div>

        {/* Selling Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Selling Price per kg (₦)
          </label>
          <input
            type="number"
            value={metrics.sellingPrice}
            onChange={(e) => handleInputChange('sellingPrice', Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="1000"
            step="100"
          />
        </div>

        {/* Currency Depreciation Factor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Currency Depreciation Factor
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={metrics.currencyDepreciationFactor}
              onChange={(e) => handleInputChange('currencyDepreciationFactor', Number(e.target.value))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0.5"
              max="3.0"
              step="0.1"
            />
            <TrendingDown className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            1.0 = stable, &gt;1.0 = depreciation, &lt;1.0 = appreciation
          </p>
        </div>

        {/* Key Calculations */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <h4 className="font-semibold text-gray-900">Key Calculations</h4>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Production Cost/kg:</span>
            <span className="font-medium">₦800</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Gross Profit/kg:</span>
            <span className="font-medium text-green-600">₦{(metrics.sellingPrice - 800).toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Monthly Operating Cost:</span>
            <span className="font-medium">₦3.5M</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">ROI (Annual):</span>
            <span className="font-medium text-blue-600">
              {((metrics.yearlyRevenue - (42000000)) / metrics.initialCapital * 100).toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Bank Funding Recommendation */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Bank Funding Analysis</h4>
          <p className="text-sm text-blue-800">
            <strong>Recommended Loan Amount:</strong> ₦{(metrics.initialCapital * 0.7 / 1000000).toFixed(1)}M (70% of capital)
          </p>
          <p className="text-sm text-blue-800">
            <strong>Break-even:</strong> {Math.ceil(metrics.breakEvenPoint / (metrics.dailyCapacity * 0.25))} days of production
          </p>
          <p className="text-sm text-blue-800">
            <strong>Payback Period:</strong> {(metrics.initialCapital / (metrics.monthlyRevenue - 3500000) * 12).toFixed(1)} months
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCalculator;