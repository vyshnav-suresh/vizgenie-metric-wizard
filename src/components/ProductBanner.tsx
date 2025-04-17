import React from 'react';
import { cn } from '@/lib/utils';
import { Github } from 'lucide-react';

interface ProductBannerProps {
  title: string;
  description: string;
  theme: string;
  features: string[];
  variant: 'primary' | 'secondary';
  className?: string;
}

const ProductBanner = ({ 
  title, 
  description, 
  theme,
  features, 
  variant = 'primary',
  className
}: ProductBannerProps) => {
  return (
    <div 
      className={cn(
        "relative flex flex-col border rounded-lg overflow-hidden px-4",
        "md:max-w-[60%] min-h-[500px] max-h-[500px]  md:max-h-[500px] md:aspect-[5/6] ",
        "max-w-full max-h-[500px]",
        variant === 'primary' 
          ? "bg-gradient-to-b from-blue-50 to-indigo-100 border-blue-200" 
          : "bg-gradient-to-b from-purple-50 to-blue-100 border-purple-200",
        className
      )}
    >
      {/* VizGenie Logo */}
      <div className="absolute top-2 left-7 flex flex-col md:flex-row items-center">
        <img 
          src="/logo.png"
          alt="VizGenie Logo"
          className="w-24 h-auto md:w-24 sm:w-24"
        />
      </div>

      {/* Partner Logos */}
      <div className="absolute top-4 right-4 flex space-x-2 md:space-x-3">
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
      <div className="mt-20 md:mt-16  border-t-[.5px] border-blue-400 px-2 pt-3 sm:px-3 flex flex-col h-full">
        <h2 className={cn(
          "text-3xl font-bold mb-5 sm:text-2xl",
          variant === 'primary' ? "text-blue-600" : "text-purple-600"
        )}>
          {title}
        </h2>
        
        <p className="text-gray-700 mb-5 text-sm">
          {description}
        </p>
        
        <div className="flex-grow">
          <ul className="space-y-6">
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
              
       
        </div>
        
  
   {/* <div className="mt-6 sm:mt-4 flex justify-start text-center items-center"> */}
            <a 
              href="https://github.com/vsion-x/vizgenie"
              target="_blank"
             
              className={cn(
                "mt-auto z-[9999] mb-4 sm:mb-2 p-2  cursor-pointer rounded-full text-white text-center font-medium",
                variant === 'primary' 
                  ? "bg-blue-700 hover:bg-blue-600" 
                  : "bg-purple-500 hover:bg-purple-600",
                "transition-colors cursor-pointer shadow-md "
              )}
            >
              <div 
                // className={cn(
                //   "inline-block p-2 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 border-[0.1px] border-gray-600 backdrop-blur-md shadow-lg transition-all duration-300",
                //   theme === 'light' && "bg-gray-200 border-gray-300 text-gray-800",
                //   "focus:outline-none focus:ring-2 focus:ring-purple-500"
                // )}
              >
                <div className="flex text-white  cursor-pointer justify-center text-center items-center">
                  <Github className="w-6 h-6  text-white  mr-2 animate-pulse sm:w-5 sm:h-5" />
                  GitHub: vsion-x/vizgenie
                </div>
              </div>
            </a>
          {/* </div> */}
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