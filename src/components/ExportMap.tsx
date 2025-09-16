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
                
                {/* More accurate continent shapes based on reference */}
                {/* North America */}
                <path d="M60 90 Q90 70 130 75 Q170 70 200 80 L220 90 Q240 100 250 120 L260 140 Q270 160 265 180 L250 200 Q230 210 200 215 L170 220 Q140 215 120 200 L100 180 Q80 160 70 140 L65 120 Q60 105 60 90 Z" 
                      fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" opacity="0.9"/>
                      
                {/* Greenland */}
                <path d="M220 50 Q240 45 260 55 L270 70 Q265 85 250 80 L235 75 Q220 65 220 50 Z" 
                      fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" opacity="0.9"/>
                      
                {/* South America */}
                <path d="M200 230 Q220 235 240 250 L250 270 Q255 290 250 310 L245 330 Q240 350 235 370 L225 385 Q215 390 205 385 L195 380 Q185 370 180 350 L175 330 Q170 310 175 290 L180 270 Q185 250 195 240 L200 230 Z" 
                      fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" opacity="0.9"/>
                      
                {/* Europe */}
                <path d="M420 80 Q440 75 460 80 L480 85 Q500 90 510 100 L520 110 Q525 120 520 130 L510 135 Q490 140 470 135 L450 130 Q430 125 425 115 L420 105 Q415 95 420 80 Z" 
                      fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" opacity="0.9"/>
                      
                {/* Africa */}
                <path d="M450 150 Q470 145 490 150 L510 155 Q530 160 540 170 L550 180 Q560 200 555 220 L550 240 Q545 260 540 280 L535 300 Q530 315 520 325 L505 330 Q485 335 470 330 L455 325 Q445 315 440 300 L435 280 Q430 260 435 240 L440 220 Q445 200 450 180 L455 165 Q450 155 450 150 Z" 
                      fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" opacity="0.9"/>
                      
                {/* Asia */}
                <path d="M540 80 Q580 75 620 80 L660 85 Q700 90 720 100 L740 110 Q760 120 770 140 L775 160 Q770 180 760 200 L745 215 Q725 225 700 220 L675 215 Q650 210 625 205 L600 200 Q575 195 560 185 L545 175 Q535 165 530 150 L525 135 Q530 120 535 105 L540 90 Q540 85 540 80 Z" 
                      fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" opacity="0.9"/>
                      
                {/* Australia */}
                <path d="M650 290 Q680 285 710 290 L730 295 Q750 300 760 310 L765 320 Q760 330 745 335 L725 340 Q700 345 680 340 L665 335 Q650 330 645 320 L640 310 Q645 300 650 290 Z" 
                      fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" opacity="0.9"/>

                {/* Export region markers */}
                {exportRegions.map((region, index) => (
                  <g key={region.id}>
                    {/* Pulsing circle animation */}
                    <circle
                      cx={region.coordinates.x}
                      cy={region.coordinates.y}
                      r="12"
                      fill={region.color}
                      opacity="0.2"
                      className="animate-ping"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    />
                    
                    {/* Main marker */}
                    <circle
                      cx={region.coordinates.x}
                      cy={region.coordinates.y}
                      r="8"
                      fill={region.color}
                      stroke="white"
                      strokeWidth="3"
                      className="cursor-pointer hover:r-10 transition-all duration-200 shadow-lg"
                      onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
                    />
                    
                    {/* Region label */}
                    <text
                      x={region.coordinates.x}
                      y={region.coordinates.y - 20}
                      textAnchor="middle"
                      className="text-xs font-bold fill-gray-800 pointer-events-none drop-shadow-sm"
                      style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}
                    >
                      {region.name}
                    </text>
                    
                    {/* Connection lines to chemicals */}
                    {selectedRegion === region.id && (
                      <g>
                        <rect
                          x={region.coordinates.x + 15}
                          y={region.coordinates.y - 40}
                          width="200"
                          height="80"
                          fill="white"
                          stroke={region.color}
                          strokeWidth="3"
                          rx="12"
                          className="shadow-2xl"
                          filter="drop-shadow(0 10px 25px rgba(0,0,0,0.15))"
                        />
                        <text
                          x={region.coordinates.x + 25}
                          y={region.coordinates.y - 20}
                          className="text-sm font-bold fill-gray-800"
                        >
                          {region.name}
                        </text>
                        <text
                          x={region.coordinates.x + 25}
                          y={region.coordinates.y - 5}
                          className="text-xs fill-gray-600 italic"
                        >
                          {region.description}
                        </text>
                        {region.chemicals.map((chemical, idx) => (
                          <text
                            key={idx}
                            x={region.coordinates.x + 25}
                            y={region.coordinates.y + 10 + (idx * 14)}
                            className="text-xs fill-gray-700 font-medium"
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