import React, { useState } from 'react';
import { Calculator, FileText, Factory, TrendingUp, Users, DollarSign, BarChart3, BookOpen } from 'lucide-react';
import Dashboard from './components/Dashboard';
import ResearchProposal from './components/ResearchProposal';
import References from './components/References';
import FactoryDesign from './components/FactoryDesign';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Business Analysis', icon: Calculator },
    { id: 'research', label: 'Research Proposal', icon: FileText },
    { id: 'factory', label: 'Factory Design', icon: Factory },
    { id: 'references', label: 'References', icon: BookOpen },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'research':
        return <ResearchProposal />;
      case 'factory':
        return <FactoryDesign />;
      case 'references':
        return <References />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PlantainPro Analytics</h1>
                <p className="text-sm text-gray-600">Business Case Development for Plantain Flour Production</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Federal University of Technology, Akure</p>
              <p className="text-xs text-gray-600">Industrial Engineering Department</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2025 Federal University of Technology, Akure - Industrial Engineering Department
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Plantain Flour Production Factory Business Case Analysis
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;