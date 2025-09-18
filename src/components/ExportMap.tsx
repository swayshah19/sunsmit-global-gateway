import React, { useState, useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Leaf, Shield, Droplets, Factory, MapPin } from "lucide-react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
interface ExportMapProps {
  className?: string;
}
const ExportMap: React.FC<ExportMapProps> = ({
  className = ""
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Set Mapbox access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoic3dheXNoYWgiLCJhIjoiY21mbWlncmprMDJneDJqc2MxYTZzMTdndyJ9.-XIrM-KmglGTcjcss6O42w';
  const exportRegions = [{
    id: "north-america",
    name: "North America",
    coordinates: [-100, 40] as [number, number],
    chemicals: ["Pharmaceutical Intermediates", "Specialty Chemicals"],
    color: "#3B82F6",
    description: "High-value pharmaceutical and specialty chemical exports"
  }, {
    id: "europe",
    name: "Europe",
    coordinates: [10, 50] as [number, number],
    chemicals: ["Pharmaceutical Intermediates", "Specialty Chemicals"],
    color: "#10B981",
    description: "Premium quality standards and technical support"
  }, {
    id: "latin-america",
    name: "Latin America",
    coordinates: [-60, -15] as [number, number],
    chemicals: ["Agrochemical Intermediates", "Pesticide Inputs"],
    color: "#F59E0B",
    description: "Strong demand for crop protection formulations"
  }, {
    id: "southeast-asia",
    name: "Southeast Asia",
    coordinates: [110, 0] as [number, number],
    chemicals: ["Agrochemical Intermediates", "Water Treatment"],
    color: "#EF4444",
    description: "Growing agricultural and industrial markets"
  }, {
    id: "africa",
    name: "Africa",
    coordinates: [20, 0] as [number, number],
    chemicals: ["Water Treatment", "Agrochemical Intermediates"],
    color: "#8B5CF6",
    description: "Water purification and sanitation solutions"
  }, {
    id: "middle-east",
    name: "Middle East",
    coordinates: [45, 30] as [number, number],
    chemicals: ["Water Treatment", "Bulk Organics"],
    color: "#06B6D4",
    description: "Bulk chemical exports for industrial use"
  }, {
    id: "east-asia",
    name: "East Asia",
    coordinates: [120, 35] as [number, number],
    chemicals: ["Specialty Chemicals", "Pharmaceutical Intermediates"],
    color: "#F97316",
    description: "High-margin niche chemical exports"
  }];
  const chemicalCategories = [{
    icon: <Leaf className="h-5 w-5" />,
    title: "Agrochemical Intermediates",
    products: ["2-Chloro-5-Chloromethylthiazole", "2,6-Dichlorobenzonitrile", "Acetochlor intermediates"],
    regions: "Latin America, SE Asia, Africa",
    color: "bg-green-500",
    bgColor: "bg-green-50",
    textColor: "text-green-700"
  }, {
    icon: <FlaskConical className="h-5 w-5" />,
    title: "Pharmaceutical Intermediates",
    products: ["4-Methoxybenzylamine", "2-Phenylbenzimidazole-5-sulfonic acid", "p-Fluorobenzoyl Chloride"],
    regions: "US, EU, Regulated Markets",
    color: "bg-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700"
  }, {
    icon: <Shield className="h-5 w-5" />,
    title: "Specialty Chemicals",
    products: ["4,4′-Difluorobenzophenone", "2,5-Dimethylthiophene", "p-Toluenesulfonyl Chloride"],
    regions: "Europe, Korea, Japan",
    color: "bg-purple-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700"
  }, {
    icon: <Droplets className="h-5 w-5" />,
    title: "Water Treatment",
    products: ["Sodium Hypochlorite", "Calcium Hypochlorite", "Zirconium Carbonate"],
    regions: "Middle East, Africa, SE Asia",
    color: "bg-cyan-500",
    bgColor: "bg-cyan-50",
    textColor: "text-cyan-700"
  }, {
    icon: <Factory className="h-5 w-5" />,
    title: "Bulk Organics",
    products: ["Acetic Acid & Derivatives", "Methanol-based intermediates", "Ethylene Glycol derivatives"],
    regions: "Global Markets",
    color: "bg-orange-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700"
  }];
  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      zoom: 1.2,
      center: [30, 20],
      pitch: 0
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl({
      visualizePitch: true
    }), 'top-right');

    // Add atmosphere and fog effects
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2
      });

      // Add custom CSS for pulsing animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        .pulse-marker { animation: pulse 2s infinite; }
      `;
      document.head.appendChild(style);

      // Add markers for each export region
      exportRegions.forEach(region => {
        // Create marker element
        const markerEl = document.createElement('div');
        markerEl.className = 'cursor-pointer pulse-marker';
        markerEl.style.cssText = `
          width: 20px;
          height: 20px;
          background: ${region.color};
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: transform 0.2s ease;
        `;
        markerEl.addEventListener('mouseenter', () => {
          markerEl.style.transform = 'scale(1.2)';
        });
        markerEl.addEventListener('mouseleave', () => {
          markerEl.style.transform = 'scale(1)';
        });

        // Create popup content
        const popupContent = `
          <div class="p-3 min-w-[200px]">
            <h4 class="font-bold text-sm mb-2" style="color: ${region.color}">${region.name}</h4>
            <p class="text-xs text-gray-600 mb-2 italic">${region.description}</p>
            <div class="space-y-1">
              ${region.chemicals.map(chemical => `
                <div class="text-xs font-medium text-gray-700">• ${chemical}</div>
              `).join('')}
            </div>
          </div>
        `;

        // Create popup
        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          closeOnClick: false
        }).setHTML(popupContent);

        // Create marker with popup
        new mapboxgl.Marker(markerEl).setLngLat(region.coordinates).setPopup(popup).addTo(map.current!);

        // Add click handler
        markerEl.addEventListener('click', () => {
          setSelectedRegion(selectedRegion === region.id ? null : region.id);
        });
      });
    });

    // Rotation animation settings
    const secondsPerRevolution = 300;
    const maxSpinZoom = 4;
    let userInteracting = false;
    let spinEnabled = true;

    // Spin globe function
    function spinGlobe() {
      if (!map.current) return;
      const zoom = map.current.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        const distancePerSecond = 360 / secondsPerRevolution;
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({
          center,
          duration: 1000,
          easing: n => n
        });
      }
    }

    // Event listeners for interaction
    map.current.on('mousedown', () => {
      userInteracting = true;
    });
    map.current.on('dragstart', () => {
      userInteracting = true;
    });
    map.current.on('mouseup', () => {
      userInteracting = false;
      spinGlobe();
    });
    map.current.on('touchend', () => {
      userInteracting = false;
      spinGlobe();
    });
    map.current.on('moveend', () => {
      spinGlobe();
    });

    // Start the globe spinning
    spinGlobe();

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [selectedRegion]);
  return <div className={`w-full ${className}`}>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* World Map */}
        <div className="lg:col-span-2">
          <div className="card-glass p-6">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Deleivering trust and chemicals to the world </h3>
            
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl overflow-hidden">
              {/* Mapbox Globe */}
              <div ref={mapContainer} className="w-full h-[400px] rounded-xl" />
              
              <p className="text-sm text-muted-foreground text-center p-4">
                Interactive globe showing export regions - click markers for details
              </p>
            </div>
          </div>
        </div>

        {/* Chemical Categories */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-6">We supply </h3>
          {chemicalCategories.map((category, index) => <div key={index} className={`card-premium p-4 hover-lift animate-fade-in-up border-l-4 ${category.bgColor}`} style={{
          animationDelay: `${index * 0.1}s`,
          borderLeftColor: category.color.replace('bg-', '').replace('-500', '')
        }}>
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${category.color} text-white flex-shrink-0`}>
                  {category.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-semibold text-sm mb-2 ${category.textColor}`}>
                    {category.title}
                  </h4>
                  
                  
                </div>
              </div>
            </div>)}
          
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
    </div>;
};
export default ExportMap;