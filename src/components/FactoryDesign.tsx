import React from 'react';
import { Factory, Layout, Cog, MapPin } from 'lucide-react';

const FactoryDesign: React.FC = () => {
  const designSoftware = [
    {
      name: 'AutoCAD Plant 3D',
      purpose: 'Factory layout and piping design',
      cost: 'Subscription-based',
      features: ['3D plant modeling', 'Piping and instrumentation', 'Equipment placement'],
      recommendation: 'Primary choice for detailed factory design',
    },
    {
      name: 'SketchUp Pro',
      purpose: '3D modeling and visualization',
      cost: '$299/year',
      features: ['Easy 3D modeling', 'Rendering capabilities', 'Extension library'],
      recommendation: 'Good for conceptual design and presentations',
    },
    {
      name: 'SolidWorks',
      purpose: 'Equipment design and simulation',
      cost: 'Educational license available',
      features: ['Parametric design', 'Simulation tools', 'Assembly modeling'],
      recommendation: 'Excellent for equipment design and testing',
    },
    {
      name: 'MATLAB Simulink',
      purpose: 'Process control and optimization',
      cost: 'Educational license available',
      features: ['Process simulation', 'Control system design', 'Optimization algorithms'],
      recommendation: 'Essential for process optimization studies',
    },
  ];

  const layoutRequirements = [
    {
      area: 'Raw Material Storage',
      size: '200 m²',
      requirements: 'Ventilated, dry storage with 5-day capacity',
      equipment: 'Storage bins, ventilation systems',
    },
    {
      area: 'Processing Area',
      size: '300 m²',
      requirements: 'Food-grade flooring, proper drainage',
      equipment: 'Washing, peeling, slicing, drying, milling equipment',
    },
    {
      area: 'Quality Control Lab',
      size: '50 m²',
      requirements: 'Clean room standards, testing equipment',
      equipment: 'Moisture analyzer, particle size analyzer',
    },
    {
      area: 'Packaging Area',
      size: '150 m²',
      requirements: 'Dust-free environment, packaging machinery',
      equipment: 'Packaging machines, sealing equipment',
    },
    {
      area: 'Finished Goods Storage',
      size: '250 m²',
      requirements: 'Climate-controlled, organized storage',
      equipment: 'Racking systems, inventory management',
    },
    {
      area: 'Administrative Office',
      size: '100 m²',
      requirements: 'Modern office space for management',
      equipment: 'Computers, communication systems',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Factory className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-900">Factory Design & Layout Planning</h2>
        </div>
        <p className="text-gray-700">
          Comprehensive factory design requirements and software recommendations for optimal 
          plantain flour production facility layout.
        </p>
      </div>

      {/* Software Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Cog className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl font-semibold text-gray-900">Recommended Design Software</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {designSoftware.map((software, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-gray-900">{software.name}</h4>
                <span className="text-sm text-blue-600 font-medium">{software.cost}</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{software.purpose}</p>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-700">Key Features:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {software.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-800">
                <strong>Recommendation:</strong> {software.recommendation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layout Requirements */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Layout className="w-6 h-6 text-emerald-600" />
          <h3 className="text-xl font-semibold text-gray-900">Factory Layout Requirements</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Area</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Size</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Requirements</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Key Equipment</th>
              </tr>
            </thead>
            <tbody>
              {layoutRequirements.map((area, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{area.area}</td>
                  <td className="py-3 px-4 text-gray-700">{area.size}</td>
                  <td className="py-3 px-4 text-gray-600">{area.requirements}</td>
                  <td className="py-3 px-4 text-gray-600">{area.equipment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Total Facility Size:</strong> Approximately 1,050 m² (including circulation and utility areas)
          </p>
          <p className="text-sm text-blue-800">
            <strong>Estimated Land Requirement:</strong> 2,000 m² minimum for future expansion and compliance
          </p>
        </div>
      </div>

      {/* Process Flow */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <MapPin className="w-6 h-6 text-red-600" />
          <h3 className="text-xl font-semibold text-gray-900">Production Process Flow</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { step: '1', process: 'Reception & Sorting', time: '2 hours', staff: '2 workers' },
            { step: '2', process: 'Washing & Peeling', time: '3 hours', staff: '3 workers' },
            { step: '3', process: 'Slicing & Drying', time: '8 hours', staff: '2 workers' },
            { step: '4', process: 'Milling & Packaging', time: '3 hours', staff: '2 workers' },
          ].map((stage, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                {stage.step}
              </div>
              <h4 className="font-medium text-gray-900 mb-2">{stage.process}</h4>
              <p className="text-xs text-gray-600">{stage.time}</p>
              <p className="text-xs text-blue-600 font-medium">{stage.staff}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactoryDesign;