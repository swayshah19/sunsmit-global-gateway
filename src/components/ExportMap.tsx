import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Leaf, Shield, Droplets, Factory, MapPin } from "lucide-react";

interface ExportMapProps {
  className?: string;
}

const ExportMap: React.FC<ExportMapProps> = ({ className = "" }) => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const exportRegions = [
    { 
      id: "north-america",
      name: "North America", 
      coordinates: { x: 180, y: 120 },
      chemicals: ["Pharmaceutical Intermediates", "Specialty Chemicals"],
      color: "#3B82F6",
      description: "High-value pharmaceutical and specialty chemical exports"
    },
    { 
      id: "europe",
      name: "Europe", 
      coordinates: { x: 480, y: 100 },
      chemicals: ["Pharmaceutical Intermediates", "Specialty Chemicals"],
      color: "#10B981",
      description: "Premium quality standards and technical support"
    },
    { 
      id: "latin-america",
      name: "Latin America", 
      coordinates: { x: 220, y: 260 },
      chemicals: ["Agrochemical Intermediates", "Pesticide Inputs"],
      color: "#F59E0B",
      description: "Strong demand for crop protection formulations"
    },
    { 
      id: "southeast-asia",
      name: "Southeast Asia", 
      coordinates: { x: 680, y: 200 },
      chemicals: ["Agrochemical Intermediates", "Water Treatment"],
      color: "#EF4444",
      description: "Growing agricultural and industrial markets"
    },
    { 
      id: "africa",
      name: "Africa", 
      coordinates: { x: 520, y: 240 },
      chemicals: ["Water Treatment", "Agrochemical Intermediates"],
      color: "#8B5CF6",
      description: "Water purification and sanitation solutions"
    },
    { 
      id: "middle-east",
      name: "Middle East", 
      coordinates: { x: 560, y: 170 },
      chemicals: ["Water Treatment", "Bulk Organics"],
      color: "#06B6D4",
      description: "Bulk chemical exports for industrial use"
    },
    { 
      id: "east-asia",
      name: "East Asia", 
      coordinates: { x: 720, y: 140 },
      chemicals: ["Specialty Chemicals", "Pharmaceutical Intermediates"],
      color: "#F97316",
      description: "High-margin niche chemical exports"
    }
  ];

  const chemicalCategories = [
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "Agrochemical Intermediates",
      products: ["2-Chloro-5-Chloromethylthiazole", "2,6-Dichlorobenzonitrile", "Acetochlor intermediates"],
      regions: "Latin America, SE Asia, Africa",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700"
    },
    {
      icon: <FlaskConical className="h-5 w-5" />,
      title: "Pharmaceutical Intermediates",
      products: ["4-Methoxybenzylamine", "2-Phenylbenzimidazole-5-sulfonic acid", "p-Fluorobenzoyl Chloride"],
      regions: "US, EU, Regulated Markets",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Specialty Chemicals",
      products: ["4,4′-Difluorobenzophenone", "2,5-Dimethylthiophene", "p-Toluenesulfonyl Chloride"],
      regions: "Europe, Korea, Japan",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700"
    },
    {
      icon: <Droplets className="h-5 w-5" />,
      title: "Water Treatment",
      products: ["Sodium Hypochlorite", "Calcium Hypochlorite", "Zirconium Carbonate"],
      regions: "Middle East, Africa, SE Asia",
      color: "bg-cyan-500",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700"
    },
    {
      icon: <Factory className="h-5 w-5" />,
      title: "Bulk Organics",
      products: ["Acetic Acid & Derivatives", "Methanol-based intermediates", "Ethylene Glycol derivatives"],
      regions: "Global Markets",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700"
    }
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* World Map */}
        <div className="lg:col-span-2">
          <div className="card-glass p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Global Export Markets & Chemical Demand
            </h3>
            
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 overflow-hidden">
              {/* World Map SVG */}
              <svg
                viewBox="0 0 800 400"
                className="w-full h-auto"
                style={{ maxHeight: '400px' }}
              >
                {/* Simplified world map outline */}
                <defs>
                  <pattern id="dots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="#e2e8f0" opacity="0.5"/>
                  </pattern>
                </defs>
                
                {/* Ocean background */}
                <rect width="800" height="400" fill="url(#dots)" />
                
                {/* Continents - simplified shapes */}
                {/* North America */}
                <path d="M50 80 Q150 60 250 80 L280 120 Q270 180 230 200 L180 220 Q120 200 80 180 L50 140 Z" 
                      fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" opacity="0.8"/>
                      
                {/* South America */}
                <path d="M200 220 Q250 240 280 280 L270 350 Q240 380 200 370 L170 340 Q160 300 180 260 Z" 
                      fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" opacity="0.8"/>
                      
                {/* Europe */}
                <path d="M420 70 Q480 60 520 80 L530 120 Q520 140 480 130 L440 120 Q420 100 420 70 Z" 
                      fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" opacity="0.8"/>
                      
                {/* Africa */}
                <path d="M450 150 Q520 140 580 160 L590 280 Q570 320 520 330 L480 320 Q450 280 450 200 Z" 
                      fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" opacity="0.8"/>
                      
                {/* Asia */}
                <path d="M580 80 Q700 70 750 100 L770 180 Q750 220 700 210 L620 200 Q580 160 580 120 Z" 
                      fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" opacity="0.8"/>
                      
                {/* Australia */}
                <path d="M650 280 Q720 270 750 290 L760 320 Q740 340 700 335 L670 330 Q650 310 650 290 Z" 
                      fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" opacity="0.8"/>

                {/* Export region markers */}
                {exportRegions.map((region, index) => (
                  <g key={region.id}>
                    {/* Pulsing circle animation */}
                    <circle
                      cx={region.coordinates.x}
                      cy={region.coordinates.y}
                      r="8"
                      fill={region.color}
                      opacity="0.3"
                      className="animate-ping"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    />
                    
                    {/* Main marker */}
                    <circle
                      cx={region.coordinates.x}
                      cy={region.coordinates.y}
                      r="6"
                      fill={region.color}
                      stroke="white"
                      strokeWidth="2"
                      className="cursor-pointer hover:r-8 transition-all duration-200"
                      onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
                    />
                    
                    {/* Region label */}
                    <text
                      x={region.coordinates.x}
                      y={region.coordinates.y - 15}
                      textAnchor="middle"
                      className="text-xs font-semibold fill-gray-700 pointer-events-none"
                    >
                      {region.name}
                    </text>
                    
                    {/* Connection lines to chemicals */}
                    {selectedRegion === region.id && (
                      <g>
                        <rect
                          x={region.coordinates.x + 15}
                          y={region.coordinates.y - 30}
                          width="180"
                          height="60"
                          fill="white"
                          stroke={region.color}
                          strokeWidth="2"
                          rx="8"
                          className="shadow-lg"
                        />
                        <text
                          x={region.coordinates.x + 25}
                          y={region.coordinates.y - 15}
                          className="text-xs font-bold fill-gray-800"
                        >
                          {region.name}
                        </text>
                        {region.chemicals.map((chemical, idx) => (
                          <text
                            key={idx}
                            x={region.coordinates.x + 25}
                            y={region.coordinates.y - 5 + (idx * 12)}
                            className="text-xs fill-gray-600"
                          >
                            • {chemical}
                          </text>
                        ))}
                      </g>
                    )}
                  </g>
                ))}
              </svg>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                Click on the markers to see regional chemical demands
              </p>
            </div>
          </div>
        </div>

        {/* Chemical Categories */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-6">High-Demand Export Chemicals</h3>
          {chemicalCategories.map((category, index) => (
            <div 
              key={index} 
              className={`card-premium p-4 hover-lift animate-fade-in-up border-l-4 ${category.bgColor}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                borderLeftColor: category.color.replace('bg-', '').replace('-500', '')
              }}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${category.color} text-white flex-shrink-0`}>
                  {category.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-semibold text-sm mb-2 ${category.textColor}`}>
                    {category.title}
                  </h4>
                  <div className="space-y-1 mb-3">
                    {category.products.slice(0, 2).map((product, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1 block w-fit">
                        {product.length > 25 ? product.substring(0, 25) + '...' : product}
                      </Badge>
                    ))}
                    <Badge variant="outline" className="text-xs">+{category.products.length - 2} more</Badge>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {category.regions}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Export Statistics */}
          <div className="card-premium p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
            <h4 className="font-bold text-foreground mb-3 text-center">Export Readiness</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">7</div>
                <div className="text-xs text-muted-foreground">Target Regions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">20+</div>
                <div className="text-xs text-muted-foreground">Chemical Types</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">IEC</div>
                <div className="text-xs text-muted-foreground">Certified</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">Ready</div>
                <div className="text-xs text-muted-foreground">To Export</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportMap;