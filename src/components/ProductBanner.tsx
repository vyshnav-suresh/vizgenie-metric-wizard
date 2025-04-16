
import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles, Rocket } from 'lucide-react';

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
        "relative flex flex-col border rounded-lg overflow-hidden aspect-[3/4] shadow-lg",
        variant === 'primary' 
          ? "bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 border-blue-200" 
          : "bg-gradient-to-br from-purple-50 via-purple-100 to-blue-100 border-purple-200",
        className
      )}
    >
      {/* Decoration Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 backdrop-blur-sm"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full relative z-10">
        <div className="flex items-center mb-4">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center mr-3",
            variant === 'primary' ? "bg-blue-500" : "bg-purple-500",
          )}>
            {variant === 'primary' ? 
              <Rocket size={20} className="text-white" /> : 
              <Sparkles size={20} className="text-white" />
            }
          </div>
          <div className="text-xs text-gray-600 font-medium">
            Launched on GitHub: vsion-x/vizgenie
          </div>
        </div>
        
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
        </div>
        
        <div className={cn(
          "mt-auto mb-2 py-2 px-6 rounded-full text-white text-center font-medium",
          variant === 'primary' 
            ? "bg-blue-500 hover:bg-blue-600" 
            : "bg-purple-500 hover:bg-purple-600",
          "transition-colors cursor-pointer shadow-md"
        )}>
          Coming Soon
        </div>
      </div>
      
      {/* Enhanced Pattern Bottom Decoration */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-32 opacity-20",
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
          <path 
            d="M0,30 Q40,60 80,30 T160,30" 
            fill="none" 
            stroke={variant === 'primary' ? "#3B82F6" : "#8B5CF6"} 
            strokeWidth="0.8" 
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductBanner;
