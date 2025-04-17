import React from 'react';
import { cn } from '@/lib/utils';

interface ProductBannerProps {
  title: string;
  description: string;
  features: string[];
  variant: 'primary' | 'secondary';
  className?: string;
}

const ProductBanner = ({ 
  title, 
  description, 
  features, 
  variant = 'primary',
  className
}: ProductBannerProps) => {
  return (
    <div 
      className={cn(
        "relative flex flex-col  max-w-[60%] max-h-[600px] border rounded-lg overflow-hidden aspect-[3/4]",
        variant === 'primary' 
          ? "bg-gradient-to-b from-blue-50 to-indigo-100 border-blue-200" 
          : "bg-gradient-to-b from-purple-50 to-blue-100 border-purple-200",
        className
      )}
    >
      {/* VizGenie Logo */}
      <div className="absolute top-4 left-4 flex flex-col">
        <img 
                     src="/logo.png"
                     alt="VizGenie Logo"
                     className="mx-auto mb-4 w-32 h-auto"
                   />
       
      </div>

      {/* Partner Logos */}
      <div className="absolute top-4 right-4 flex space-x-3">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" 
            alt="Grafana Logo" 
            className="w-full h-auto"
          />
        </div>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" 
            alt="Prometheus Logo" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-24 px-6 flex flex-col h-full">
        <h2 className={cn(
          "text-3xl font-bold mb-3",
          variant === 'primary' ? "text-blue-600" : "text-purple-600"
        )}>
          {title}
        </h2>
        
        <p className="text-gray-700 mb-6 text-sm">
          {description}
        </p>
        
        <div className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className={cn(
                  "flex items-start",
                  "text-sm"
                )}
              >
                <span className={cn(
                  "inline-block w-5 h-5 mr-2 rounded-full flex-shrink-0 flex items-center justify-center",
                  variant === 'primary' ? "bg-blue-500" : "bg-purple-500",
                  "text-white text-xs"
                )}>
                  ✓
                </span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-600 font-medium mt-10">
            <a href='https://github.com/vsion-x/vizgenie'>
          Launched on GitHub: vsion-x/vizgenie
          </a>
        </div>
        </div>
        
        <div className={cn(
          "mt-auto mb-8 py-2 px-6 rounded-full text-white text-center font-medium",
          variant === 'primary' 
            ? "bg-blue-500 hover:bg-blue-600" 
            : "bg-purple-500 hover:bg-purple-600",
          "transition-colors cursor-pointer shadow-md"
        )}>
          Coming Soon
        </div>
      </div>
      
      {/* Pattern Bottom Decoration */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-24 opacity-20",
        variant === 'primary' 
          ? "bg-blue-300" 
          : "bg-purple-300",
        "bg-opacity-50"
      )}>
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 L100,0 L100,100 L0,100 Z" 
            fill="none" 
            stroke={variant === 'primary' ? "#3B82F6" : "#8B5CF6"} 
            strokeWidth="0.5" 
            strokeDasharray="6,3" 
          />
          <path 
            d="M0,50 Q25,30 50,50 T100,50" 
            fill="none" 
            stroke={variant === 'primary' ? "#3B82F6" : "#8B5CF6"} 
            strokeWidth="0.5" 
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductBanner;