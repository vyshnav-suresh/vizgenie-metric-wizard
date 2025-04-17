import React, { useState } from 'react';
import ProductBanner from '@/components/ProductBanner';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const bannerContent = {
    title: "Introducing VizGenie",
    description: "Transform your data visualization with natural language queries. VizGenie creates Grafana dashboards from your plain English requests.",
    features: ["Natural language to visualization", "Seamless Grafana integration", "Prometheus support","Intelligent PromQL generation"]
  };

  return (
    <div className={cn(
      "min-h-screen w-full p-6 overflow-hidden transition-colors duration-300",
      theme === 'dark' ? "bg-gradient-to-br from-gray-900 to-black dark" : "bg-gradient-to-br from-gray-50 to-white"
    )}>
      <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full absolute -top-2 -right-2",
              theme === 'dark' ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300",
              "focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors absolute top-6 right-6 z-30"
            )}
            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
          </button>
      <div className="max-w-7xl mx-auto relative z-10">
      
        <div className="flex justify-center items-center mb-12">
          <div className="text-center">
           
            <h1 className={cn(
              "text-4xl font-bold",
              theme === 'dark' ? "text-white" : "text-gray-900"
            )}>
              Product Launch
            </h1>
          </div>
         
        </div>
        
        <div className="flex justify-center">
          <ProductBanner 
            title={bannerContent.title}
            description={bannerContent.description}
            features={bannerContent.features}
            theme={theme}
            variant="primary"
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className={cn(
            "text-sm",
            theme === 'dark' ? "text-gray-400" : "text-gray-500"
          )}>
            © 2025 vsionX. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;