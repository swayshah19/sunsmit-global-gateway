import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Ship, Truck, Plane, Award, ArrowRight, Target, CheckCircle, Building2, Droplets, Zap, Factory, ShieldCheck, Wheat } from "lucide-react";
import ExportMap from "./ExportMap";
const Markets = () => {
  // Supply Categories Data
  const supplyCategories = [
    "Agrochemical Intermediates",
    "Pharmaceutical Intermediates", 
    "Specialty Chemicals",
    "Water Treatment",
    "Bulk Organics"
  ];

  // Export Readiness Stats
  const exportStats = [
    { number: "7", label: "Target Regions" },
    { number: "20+", label: "Chemical Types" },
    { number: "IEC", label: "Certified" },
    { number: "Ready", label: "To Export" }
  ];

  // Domestic Industries Data
  const industries = [{
    icon: <Droplets className="h-8 w-8" />,
    name: "Textiles",
    description: "Sodium Hypochlorite for bleaching and processing",
    products: ["Sodium Hypochlorite 12%"],
    color: "text-blue-600"
  }, {
    icon: <Wheat className="h-8 w-8" />,
    name: "Starch & Paper",
    description: "Industrial bleaching and processing solutions",
    products: ["Sodium Hypochlorite", "Bleaching Agents"],
    color: "text-amber-600"
  }, {
    icon: <ShieldCheck className="h-8 w-8" />,
    name: "Pharmaceutical",
    description: "High-purity chemicals for pharma applications",
    products: ["Stable Bleaching Powder", "Specialty Intermediates"],
    color: "text-green-600"
  }, {
    icon: <Building2 className="h-8 w-8" />,
    name: "Government Water",
    description: "Water purification for municipal supplies",
    products: ["Sodium Hypochlorite", "Calcium Hypochlorite"],
    color: "text-blue-700"
  }, {
    icon: <Zap className="h-8 w-8" />,
    name: "Power Plants",
    description: "Cooling tower treatment and disinfection",
    products: ["Stable Bleaching Powder", "Water Treatment"],
    color: "text-yellow-600"
  }, {
    icon: <Factory className="h-8 w-8" />,
    name: "Bottling & Food",
    description: "Sanitization and food processing applications",
    products: ["Food Grade Sodium Hypochlorite"],
    color: "text-green-700"
  }];
  const distributionChannels = [{
    icon: <Ship className="h-10 w-10" />,
    title: "Sea Freight",
    description: "Major shipping routes to global ports with reliable container services",
    color: "text-primary"
  }, {
    icon: <Truck className="h-10 w-10" />,
    title: "Land Transport",
    description: "Pan-India distribution network with specialized chemical transportation",
    color: "text-secondary"
  }, {
    icon: <Plane className="h-10 w-10" />,
    title: "Air Cargo",
    description: "Express delivery solutions for urgent chemical requirements worldwide",
    color: "text-accent"
  }];
  const globalStats = [{
    number: "30+",
    label: "Countries Served",
    icon: <Globe className="h-6 w-6" />
  }, {
    number: "100+",
    label: "Export Shipments/Year",
    icon: <Ship className="h-6 w-6" />
  }, {
    number: "95%",
    label: "On-time Delivery",
    icon: <CheckCircle className="h-6 w-6" />
  }, {
    number: "24/7",
    label: "Customer Support",
    icon: <Target className="h-6 w-6" />
  }];
  return (
    <section id="markets" className="py-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{
        animationDelay: '3s'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Markets
          </h2>
        </div>

        {/* 1. Introduction Section */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With our strong domestic presence across textiles, pharma, power, and government sectors, 
              we are <span className="text-primary font-semibold">actively seeking export opportunities globally</span>. 
              Our IEC-certified operations and proven quality standards position us perfectly for international partnerships.
            </p>
          </div>
        </div>

        {/* 2. International Market (Globe) */}
        <div className="mb-20">
          <ExportMap />
        </div>

        {/* 3. We Supply Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-8">We Supply</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Supply Categories */}
            <div>
              <div className="space-y-4">
                {supplyCategories.map((category, index) => (
                  <div key={index} className="flex items-center p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">{category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Readiness Stats */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-center text-foreground mb-8">Export Readiness</h4>
              <div className="grid grid-cols-2 gap-6 text-center">
                {exportStats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4. Distribution Network */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Distribution Network
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions ensuring seamless delivery across global markets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {distributionChannels.map((channel, index) => (
              <Card key={index} className="text-center group hover-lift">
                <CardContent className="p-8">
                  <div className={`${channel.color} mb-6 flex justify-center group-hover:scale-110 transition-transform`}>
                    {channel.icon}
                  </div>
                  <h5 className="font-bold text-foreground mb-3 text-lg">{channel.title}</h5>
                  <p className="text-muted-foreground leading-relaxed">{channel.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 5. Sectors We Serve */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-8">Our Markets</h3>
          </div>

          {/* Industries Served */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {industries.map((industry, index) => (
              <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`${industry.color} mb-4`}>
                    {industry.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{industry.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Domestic Market Strengths */}
          <div className="bg-background/50 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-center text-foreground mb-8">Domestic Market Strengths</h4>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Pan-India</div>
                <div className="text-muted-foreground">Distribution Network</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-muted-foreground">Supply Chain</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">MSDS</div>
                <div className="text-muted-foreground">Compliance Reports</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">Licensed</div>
                <div className="text-muted-foreground">Manufacturing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Markets;