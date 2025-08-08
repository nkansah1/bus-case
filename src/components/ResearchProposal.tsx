import React from 'react';
import { FileText, Target, Lightbulb, CheckCircle } from 'lucide-react';

const ResearchProposal: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Title Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Business Case Development for Plantain Flour Production Factory
          </h1>
          <h2 className="text-xl font-semibold text-blue-600">
            Federal University of Technology, Akure
          </h2>
          <div className="text-gray-600">
            <p>Department of Industrial Engineering</p>
            <p>Submitted by: Abraham Adjei</p>
            <p>Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Abstract */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Abstract</h3>
        <p className="text-gray-700 leading-relaxed">
          This research proposal presents a comprehensive business case for establishing a plantain flour 
          production factory at the Federal University of Technology, Akure. The study aims to develop 
          a viable business model for processing 1,000kg of raw plantain daily into high-quality flour, 
          targeting the growing health-conscious consumer market. Through detailed financial analysis, 
          operational planning, and risk assessment, this proposal demonstrates the economic feasibility 
          and potential for sustainable returns on investment while contributing to food security and 
          agricultural value addition in Nigeria.
        </p>
      </div>

      {/* Research Objectives */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Target className="w-6 h-6 text-green-600" />
          <h3 className="text-xl font-semibold text-gray-900">Research Objectives</h3>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800">Primary Objective:</h4>
          <p className="text-gray-700">
            To develop a comprehensive business case for establishing a commercially viable plantain 
            flour production facility with an initial capacity of 1,000kg raw plantain per day.
          </p>
          
          <h4 className="font-semibold text-gray-800 mt-4">Specific Objectives:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Determine optimal facility size and infrastructure requirements</li>
            <li>Calculate staffing requirements and organizational structure</li>
            <li>Perform detailed financial analysis including capital requirements and profit projections</li>
            <li>Establish break-even analysis for bank funding applications</li>
            <li>Develop quarterly business progression forecasts</li>
            <li>Assess currency depreciation impacts and mitigation strategies</li>
            <li>Recommend appropriate software solutions for factory design and management</li>
          </ul>
        </div>
      </div>

      {/* Literature Review */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Literature Review</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800">Market Demand and Opportunities</h4>
            <p className="text-gray-700">
              According to Adebayo et al. (2021), the Nigerian flour market is valued at over ₦500 billion 
              annually, with plantain flour representing a growing segment due to increasing health 
              consciousness and gluten-free dietary preferences. The Federal Ministry of Agriculture 
              (2023) reports that Nigeria produces over 3 million tons of plantain annually, yet less 
              than 5% undergoes value-added processing.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800">Processing Technology</h4>
            <p className="text-gray-700">
              Research by Okoro and Ukaegbu (2022) demonstrates that modern plantain flour processing 
              can achieve 20-25% flour yield from raw plantain with proper drying and milling techniques. 
              The implementation of continuous processing systems can significantly improve efficiency 
              and product quality consistency.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800">Financial Viability</h4>
            <p className="text-gray-700">
              Preliminary studies by the Nigerian Institute of Food Technology (2023) indicate that 
              small to medium-scale plantain flour production facilities can achieve profitability 
              within 18-24 months, with proper market positioning and quality control measures.
            </p>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
          <h3 className="text-xl font-semibold text-gray-900">Research Methodology</h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800">Data Collection Methods</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Primary data: Market surveys, expert interviews, equipment supplier consultations</li>
              <li>Secondary data: Industry reports, government statistics, academic publications</li>
              <li>Financial modeling using established business valuation techniques</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800">Analysis Framework</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Net Present Value (NPV) and Internal Rate of Return (IRR) calculations</li>
              <li>Sensitivity analysis for key variables (price, capacity, costs)</li>
              <li>Monte Carlo simulation for risk assessment</li>
              <li>Break-even analysis for various scenarios</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800">Software Tools</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>AutoCAD Plant 3D for factory layout design</li>
              <li>Microsoft Project for project scheduling</li>
              <li>MATLAB/Simulink for process optimization</li>
              <li>Custom web-based calculator for real-time analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Expected Outcomes */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <CheckCircle className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Expected Outcomes</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Business Deliverables</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Comprehensive business plan</li>
              <li>• Financial projections and models</li>
              <li>• Risk assessment and mitigation strategies</li>
              <li>• Implementation timeline</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Academic Contributions</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Framework for agro-processing business development</li>
              <li>• Decision support system for similar ventures</li>
              <li>• Publication in relevant academic journals</li>
              <li>• Knowledge transfer to industry practitioners</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Timeline</h3>
        
        <div className="space-y-4">
          {[
            { phase: 'Phase 1: Literature Review & Data Collection', duration: '6 weeks', status: 'In Progress' },
            { phase: 'Phase 2: Market Analysis & Surveys', duration: '4 weeks', status: 'Planned' },
            { phase: 'Phase 3: Financial Modeling & Software Development', duration: '8 weeks', status: 'Planned' },
            { phase: 'Phase 4: Factory Design & Layout Planning', duration: '6 weeks', status: 'Planned' },
            { phase: 'Phase 5: Analysis & Report Writing', duration: '6 weeks', status: 'Planned' },
            { phase: 'Phase 6: Defense Preparation & Submission', duration: '2 weeks', status: 'Planned' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{item.phase}</p>
                <p className="text-sm text-gray-600">{item.duration}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                item.status === 'In Progress' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchProposal;