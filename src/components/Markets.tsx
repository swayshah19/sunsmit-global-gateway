import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Ship, Truck, Plane, Award, ArrowRight, Target, CheckCircle, Building2, Droplets, Zap, Factory, ShieldCheck, Wheat } from "lucide-react";
import ExportMap from "./ExportMap";
const Markets = () => {
  // Domestic Markets Data
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
  const packagingOptions = [{
    product: "Sodium Hypochlorite",
    options: ["MS Rubber-lined Tankers", "PVC/HDPE Drums", "Carboys"],
    description: "Flexible packaging for various quantity requirements"
  }, {
    product: "Bleaching Powder",
    options: ["25 kg LDPE-lined HDPE Bags"],
    description: "Stable packaging for long-term storage and transport"
  }];

  // Export Markets Data
  const markets = [{
    region: "Europe",
    flag: "🇪🇺",
    products: ["Specialty Chemicals", "Chemical Intermediates"],
    highlights: ["Premium quality standards", "IEC certified operations", "Technical support"],
    description: "Eager to serve European markets with high-grade specialty chemicals and intermediates for various industrial applications.",
    color: "primary",
    bgGradient: "from-primary/10 to-primary/5"
  }, {
    region: "Africa",
    flag: "🌍",
    products: ["Bulk Chemicals", "Specialty Chemicals"],
    highlights: ["Stable shipping solutions", "Export-ready facilities", "Competitive pricing"],
    description: "Looking forward to supplying bulk and specialty chemicals across African nations for industrial and manufacturing sectors.",
    color: "secondary",
    bgGradient: "from-secondary/10 to-secondary/5"
  }, {
    region: "Asia",
    flag: "🌏",
    products: ["Chemical Intermediates", "Bulk Chemicals"],
    highlights: ["Custom formulations", "Export compliance", "Regional expertise"],
    description: "Seeking opportunities to provide chemical intermediates and bulk chemicals to pharmaceutical and fine chemical industries across Asia.",
    color: "accent",
    bgGradient: "from-accent/10 to-accent/5"
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
  return <section id="markets" className="py-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '3s'
    }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Markets
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Serving diverse industries domestically while expanding our reach globally with quality chemical solutions.</p>
        </div>

        {/* Domestic Markets Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center glass-dark px-6 py-3 rounded-full text-primary mb-6">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="font-semibold">India Operations</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Domestic
              <span className="text-gradient block mt-2">Markets</span>
            </h3>
            
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Trusted by leading industries across India with proven track record in textiles, pharmaceuticals, power generation, and government water treatment sectors.
            </p>
          </div>

          {/* Industries Served */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {industries.map((industry, index) => <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`${industry.color} mb-4`}>
                    {industry.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{industry.name}</h4>
                </CardContent>
              </Card>)}
          </div>

          {/* Market Strengths */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16">
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

        {/* International Markets Section */}
        <div className="section-gradient rounded-3xl p-8 md:p-12">
          {/* International Markets Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center glass-dark px-6 py-3 rounded-full text-primary mb-6">
              <Globe className="h-5 w-5 mr-2" />
              <span className="font-semibold">Global Expansion Ready</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              International
              <span className="text-gradient block mt-2">Markets</span>
            </h3>
            
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              With our strong domestic presence across textiles, pharma, power, and government sectors, 
              we are <span className="text-primary font-semibold">actively seeking export opportunities globally</span>. 
              Our IEC-certified operations and proven quality standards position us perfectly for international partnerships.
            </p>
          </div>

          {/* World Map Section */}
          <div className="mb-16 animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <ExportMap />
          </div>

          {/* Distribution Network */}
          <div className="card-glass p-8 md:p-12 animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <div className="text-center mb-12">
              <h4 className="text-3xl font-bold text-foreground mb-4">
                Distribution Network
              </h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive logistics solutions ensuring seamless delivery across global markets
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {distributionChannels.map((channel, index) => <div key={index} className="text-center group hover-lift">
                  <div className={`${channel.color} mb-6 flex justify-center group-hover:scale-110 transition-transform`}>
                    {channel.icon}
                  </div>
                  <h5 className="font-bold text-foreground mb-3 text-lg">{channel.title}</h5>
                  <p className="text-muted-foreground leading-relaxed">{channel.description}</p>
                </div>)}
            </div>

            
          </div>
        </div>
      </div>
    </section>;
};
export default Markets;