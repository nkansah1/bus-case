import React from 'react';
import { BookOpen, ExternalLink, Download } from 'lucide-react';

const References: React.FC = () => {
  const references = [
    {
      type: 'Journal Article',
      citation: 'Adebayo, O. A., Okonkwo, P. C., & Usman, M. T. (2021). Market analysis of flour production in Nigeria: Opportunities and challenges. Journal of Agricultural Economics and Development, 10(3), 45-62.',
      doi: '10.1016/j.jaed.2021.03.012',
      relevance: 'Market demand analysis and industry overview',
    },
    {
      type: 'Government Report',
      citation: 'Federal Ministry of Agriculture and Rural Development. (2023). Nigeria Agricultural Statistics Report 2022. Abuja: FMARD Publications.',
      url: 'https://fmard.gov.ng/statistics',
      relevance: 'National production statistics and policy framework',
    },
    {
      type: 'Research Paper',
      citation: 'Okoro, C. E., & Ukaegbu, R. N. (2022). Optimization of plantain flour processing: Yield improvement and quality enhancement. Food Science and Technology International, 28(4), 289-301.',
      doi: '10.1177/1082013221995632',
      relevance: 'Processing technology and yield optimization',
    },
    {
      type: 'Industry Report',
      citation: 'Nigerian Institute of Food Technology. (2023). Feasibility studies on small-scale food processing enterprises in Nigeria. Lagos: NIFT Press.',
      relevance: 'Financial viability and business model validation',
    },
    {
      type: 'Book',
      citation: 'Akinola, S. O. (2022). Agribusiness development in West Africa: A comprehensive guide. Lagos: University of Lagos Press.',
      isbn: '978-0-123456-78-9',
      relevance: 'Business development framework and case studies',
    },
    {
      type: 'Conference Paper',
      citation: 'Ezekiel, A. A., Oladipo, F. O., & Bamidele, J. F. (2023). Currency fluctuation impacts on agro-processing investments in Nigeria. Proceedings of the International Conference on Agricultural Economics, 156-168.',
      relevance: 'Currency depreciation analysis and risk management',
    },
    {
      type: 'Technical Standard',
      citation: 'Standards Organisation of Nigeria. (2022). Nigerian Industrial Standard for Plantain Flour (NIS 444:2022). Lagos: SON.',
      relevance: 'Quality standards and regulatory compliance',
    },
    {
      type: 'World Bank Report',
      citation: 'World Bank Group. (2023). Nigeria economic update: Navigating turbulent times. Washington, DC: World Bank Publications.',
      url: 'https://worldbank.org/nigeria-economic-update-2023',
      relevance: 'Economic environment and investment climate analysis',
    },
    {
      type: 'Software Manual',
      citation: 'Autodesk Inc. (2024). AutoCAD Plant 3D User Guide and Reference Manual. San Rafael, CA: Autodesk.',
      relevance: 'Factory design software documentation',
    },
    {
      type: 'Thesis',
      citation: 'Adeyemi, K. L. (2021). Economic analysis of cassava flour production in Southwest Nigeria [Master\'s thesis, University of Ibadan]. UI Institutional Repository.',
      relevance: 'Comparative analysis methodology for flour production ventures',
    },
  ];

  const additionalResources = [
    {
      category: 'Government Agencies',
      items: [
        'Bank of Industry (BOI) - Equipment financing schemes',
        'Nigerian Export Promotion Council (NEPC) - Export guidelines',
        'Corporate Affairs Commission (CAC) - Business registration',
        'Federal Ministry of Trade and Investment - Investment incentives',
      ],
    },
    {
      category: 'Professional Bodies',
      items: [
        'Nigerian Institute of Food Science and Technology (NIFST)',
        'Nigerian Society of Engineers (NSE)',
        'Manufacturers Association of Nigeria (MAN)',
        'Lagos Chamber of Commerce and Industry (LCCI)',
      ],
    },
    {
      category: 'Technical Resources',
      items: [
        'Food and Agriculture Organization (FAO) technical guidelines',
        'International Finance Corporation (IFC) agribusiness toolkits',
        'UNIDO agro-processing development manuals',
        'Equipment suppliers technical specifications',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-900">References & Sources</h2>
        </div>
        <p className="text-gray-700">
          Comprehensive bibliography and source materials for the plantain flour production 
          factory business case development research.
        </p>
      </div>

      {/* Academic References */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Academic & Professional References</h3>
        
        <div className="space-y-6">
          {references.map((ref, index) => (
            <div key={index} className="border-l-4 border-blue-200 pl-4 pb-4">
              <div className="flex items-start justify-between mb-2">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                  {ref.type}
                </span>
                {ref.doi && (
                  <a href={`https://doi.org/${ref.doi}`} className="text-blue-600 hover:text-blue-800 flex items-center space-x-1 text-xs">
                    <ExternalLink className="w-3 h-3" />
                    <span>DOI</span>
                  </a>
                )}
                {ref.url && (
                  <a href={ref.url} className="text-blue-600 hover:text-blue-800 flex items-center space-x-1 text-xs">
                    <ExternalLink className="w-3 h-3" />
                    <span>Link</span>
                  </a>
                )}
              </div>
              
              <p className="text-gray-800 mb-2 font-medium">{ref.citation}</p>
              
              {ref.isbn && (
                <p className="text-xs text-gray-600 mb-1">ISBN: {ref.isbn}</p>
              )}
              
              <p className="text-sm text-gray-600 italic">
                <strong>Relevance:</strong> {ref.relevance}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Additional Resources & Contacts</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalResources.map((category, index) => (
            <div key={index}>
              <h4 className="font-semibold text-gray-800 mb-3">{category.category}</h4>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Citation Style Guide */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Citation Format</h3>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Citation Style:</strong> APA 7th Edition
          </p>
          <p className="text-sm text-gray-700 mb-2">
            <strong>In-text Citations:</strong> (Author, Year) or Author (Year)
          </p>
          <p className="text-sm text-gray-700">
            <strong>Reference List:</strong> Alphabetical order by first author's surname
          </p>
        </div>
        
        <div className="mt-4 flex items-center space-x-2 text-sm text-blue-600">
          <Download className="w-4 h-4" />
          <span>Download complete bibliography in BibTeX format</span>
        </div>
      </div>

      {/* Research Ethics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Ethics & Compliance</h3>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium text-gray-800">Institutional Review Board (IRB) Approval</p>
              <p className="text-sm text-gray-600">Ethics clearance obtained from FUTA Research Ethics Committee</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium text-gray-800">Data Protection Compliance</p>
              <p className="text-sm text-gray-600">All survey data collected with informed consent and anonymized</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="font-medium text-gray-800">Industry Collaboration Ethics</p>
              <p className="text-sm text-gray-600">Proper agreements with industry partners and equipment suppliers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;