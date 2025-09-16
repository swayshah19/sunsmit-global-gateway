import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Leaf, Shield, Droplets, Factory } from "lucide-react";

interface ExportMapProps {
  className?: string;
}

const ExportMap: React.FC<ExportMapProps> = ({ className = "" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const exportRegions = [
    { 
      name: "North America", 
      coordinates: [-95, 40], 
      chemicals: ["Pharmaceutical Intermediates", "Specialty Chemicals"],
      color: "#3B82F6"
    },
    { 
      name: "Europe", 
      coordinates: [10, 50], 
      chemicals: ["Pharmaceutical Intermediates", "Specialty Chemicals"],
      color: "#10B981"
    },
    { 
      name: "Latin America", 
      coordinates: [-60, -10], 
      chemicals: ["Agrochemical Intermediates", "Pesticide Inputs"],
      color: "#F59E0B"
    },
    { 
      name: "Southeast Asia", 
      coordinates: [110, 10], 
      chemicals: ["Agrochemical Intermediates", "Water Treatment"],
      color: "#EF4444"
    },
    { 
      name: "Africa", 
      coordinates: [20, 0], 
      chemicals: ["Water Treatment", "Agrochemical Intermediates"],
      color: "#8B5CF6"
    },
    { 
      name: "Middle East", 
      coordinates: [50, 25], 
      chemicals: ["Water Treatment", "Bulk Organics"],
      color: "#06B6D4"
    },
    { 
      name: "East Asia", 
      coordinates: [130, 35], 
      chemicals: ["Specialty Chemicals", "Pharmaceutical Intermediates"],
      color: "#F97316"
    }
  ];

  const chemicalCategories = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Agrochemical Intermediates",
      products: ["2-Chloro-5-Chloromethylthiazole (CMTC)", "2,6-Dichlorobenzonitrile (DCBN)", "Acetochlor, Butachlor intermediates"],
      regions: "Latin America, SE Asia, Africa",
      color: "bg-green-500"
    },
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Pharmaceutical Intermediates",
      products: ["4-Methoxybenzylamine (MBA)", "2-Phenylbenzimidazole-5-sulfonic acid", "p-Fluorobenzoyl Chloride"],
      regions: "US, EU, Regulated Markets",
      color: "bg-blue-500"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Specialty Chemicals",
      products: ["4,4′-Difluorobenzophenone (DFBP)", "2,5-Dimethylthiophene", "p-Toluenesulfonyl Chloride"],
      regions: "Europe, Korea, Japan",
      color: "bg-purple-500"
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Water Treatment",
      products: ["Sodium Hypochlorite", "Calcium Hypochlorite", "Zirconium Carbonate"],
      regions: "Middle East, Africa, SE Asia",
      color: "bg-cyan-500"
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Bulk Organics",
      products: ["Acetic Acid & Derivatives", "Methanol-based intermediates", "Ethylene Glycol derivatives"],
      regions: "Global Markets",
      color: "bg-orange-500"
    }
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe' as any,
      zoom: 1.5,
      center: [30, 15],
      pitch: 0,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.scrollZoom.disable();

    map.current.on('style.load', () => {
      if (!map.current) return;
      
      map.current.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });

      // Add markers for export regions
      exportRegions.forEach((region, index) => {
        const el = document.createElement('div');
        el.className = 'export-marker';
        el.style.cssText = `
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: ${region.color};
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          cursor: pointer;
          animation: pulse 2s infinite;
          animation-delay: ${index * 0.2}s;
        `;

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-3 min-w-[200px]">
            <h3 class="font-bold text-lg mb-2">${region.name}</h3>
            <div class="space-y-1">
              ${region.chemicals.map(chemical => `<div class="text-sm bg-gray-100 px-2 py-1 rounded">${chemical}</div>`).join('')}
            </div>
          </div>
        `);

        new mapboxgl.Marker(el)
          .setLngLat(region.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    // Auto rotation
    const secondsPerRevolution = 180;
    const maxSpinZoom = 5;
    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
      if (!map.current || userInteracting || map.current.getZoom() >= maxSpinZoom) return;
      
      const center = map.current.getCenter();
      center.lng -= 360 / secondsPerRevolution;
      map.current.easeTo({ center, duration: 1000, easing: (n) => n });
    }

    map.current.on('mousedown', () => { userInteracting = true; });
    map.current.on('dragstart', () => { userInteracting = true; });
    map.current.on('mouseup', () => { userInteracting = false; spinGlobe(); });
    map.current.on('touchend', () => { userInteracting = false; spinGlobe(); });
    map.current.on('moveend', spinGlobe);

    spinGlobe();
    setIsMapInitialized(true);
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  // Add pulse animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={`w-full ${className}`}>
      {!isMapInitialized && (
        <div className="card-glass p-8 text-center mb-8">
          <h3 className="text-xl font-bold text-foreground mb-4">Add Your Mapbox Token</h3>
          <p className="text-muted-foreground mb-6">
            To display the interactive world map, please enter your Mapbox public token. 
            You can get it from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Enter Mapbox Public Token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button onClick={initializeMap} disabled={!mapboxToken}>
              Load Map
            </Button>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Map Container */}
        <div className="lg:col-span-2">
          <div className="card-glass p-6 h-[500px]">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Global Export Markets
            </h3>
            <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden" />
            {isMapInitialized && (
              <p className="text-sm text-muted-foreground text-center mt-3">
                Click on the markers to see regional chemical demands
              </p>
            )}
          </div>
        </div>

        {/* Chemical Categories */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-6">High-Demand Export Chemicals</h3>
          {chemicalCategories.map((category, index) => (
            <div key={index} className="card-premium p-4 hover-lift animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${category.color} text-white flex-shrink-0`}>
                  {category.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm mb-2">{category.title}</h4>
                  <div className="space-y-1 mb-3">
                    {category.products.slice(0, 2).map((product, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs mr-1 mb-1">
                        {product.split(' ')[0]}
                      </Badge>
                    ))}
                    <Badge variant="outline" className="text-xs">+more</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <strong>Target:</strong> {category.regions}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExportMap;