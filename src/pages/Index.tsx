
import React from 'react';
import ProductBanner from '@/components/ProductBanner';

const Index = () => {
  const bannerContent = {
    title: "Introducing VizGenie",
    description: "Transform your data visualization with natural language queries. VizGenie creates Grafana dashboards from your plain English requests.",
    features: [
      "Natural language to visualization",
      "Seamless Grafana integration",
      "Prometheus support",
      "Intelligent PromQL generation"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            VizGenie Product Launch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simplify metric visualization in Grafana with natural language queries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProductBanner 
            title={bannerContent.title}
            description={bannerContent.description}
            features={bannerContent.features}
            variant="primary"
          />
          
          <ProductBanner 
            title={bannerContent.title}
            description={bannerContent.description}
            features={bannerContent.features}
            variant="secondary"
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 VizGenie. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
