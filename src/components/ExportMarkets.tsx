import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Ship, Truck, Plane, Award, ArrowRight, Target, CheckCircle } from "lucide-react";

const ExportMarkets = () => {
  const markets = [
    {
      region: "Europe",
      flag: "🇪🇺",
      products: ["Specialty Chemicals", "Chemical Intermediates"],
      highlights: ["Premium quality standards", "IEC certified operations", "Technical support"],
      description: "Eager to serve European markets with high-grade specialty chemicals and intermediates for various industrial applications.",
      color: "primary",
      bgGradient: "from-primary/10 to-primary/5"
    },
    {
      region: "Africa", 
      flag: "🌍",
      products: ["Bulk Chemicals", "Specialty Chemicals"],
      highlights: ["Stable shipping solutions", "Export-ready facilities", "Competitive pricing"],
      description: "Looking forward to supplying bulk and specialty chemicals across African nations for industrial and manufacturing sectors.",
      color: "secondary",
      bgGradient: "from-secondary/10 to-secondary/5"
    },
    {
      region: "Asia",
      flag: "🌏", 
      products: ["Chemical Intermediates", "Bulk Chemicals"],
      highlights: ["Custom formulations", "Export compliance", "Regional expertise"],
      description: "Seeking opportunities to provide chemical intermediates and bulk chemicals to pharmaceutical and fine chemical industries across Asia.",
      color: "accent",
      bgGradient: "from-accent/10 to-accent/5"
    }
  ];

  const distributionChannels = [
    {
      icon: <Ship className="h-10 w-10" />,
      title: "Sea Freight",
      description: "Major shipping routes to global ports with reliable container services",
      color: "text-primary"
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Land Transport", 
      description: "Pan-India distribution network with specialized chemical transportation",
      color: "text-secondary"
    },
    {
      icon: <Plane className="h-10 w-10" />,
      title: "Air Cargo",
      description: "Express delivery solutions for urgent chemical requirements worldwide",
      color: "text-accent"
    }
  ];

  const globalStats = [
    { number: "30+", label: "Countries Served", icon: <Globe className="h-6 w-6" /> },
    { number: "100+", label: "Export Shipments/Year", icon: <Ship className="h-6 w-6" /> },
    { number: "95%", label: "On-time Delivery", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "24/7", label: "Customer Support", icon: <Target className="h-6 w-6" /> }
  ];

  return (
    <section id="markets" className="py-24 section-gradient overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center glass-dark px-6 py-3 rounded-full text-primary mb-6">
            <Globe className="h-5 w-5 mr-2" />
            <span className="font-semibold">Global Expansion Ready</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Global Export
            <span className="text-gradient block mt-2">Markets</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With our strong domestic presence across textiles, pharma, power, and government sectors, 
            we are <span className="text-primary font-semibold">actively seeking export opportunities globally</span>. 
            Our IEC-certified operations and proven quality standards position us perfectly for international partnerships.
          </p>
        </div>

        {/* Export Markets Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {markets.map((market, index) => (
            <div 
              key={index} 
              className="card-premium hover-lift group animate-fade-in-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl animate-float" style={{animationDelay: `${index * 1}s`}}>
                      {market.flag}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{market.region}</h3>
                      <p className="text-sm text-muted-foreground">Export Ready</p>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${market.bgGradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <ArrowRight className={`h-5 w-5 text-${market.color} group-hover:translate-x-1 transition-transform`} />
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Award className="h-4 w-4 mr-2 text-primary" />
                    Key Products
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {market.products.map((product, productIndex) => (
                      <Badge 
                        key={productIndex} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-muted to-muted-dark hover:from-primary/10 hover:to-primary/5 transition-all duration-300"
                      >
                        {product}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{market.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-secondary" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {market.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-muted-foreground flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full group hover:border-primary/30">
                  Explore {market.region} Markets
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          ))}
        </div>

        {/* Distribution Network */}
        <div className="card-glass p-8 md:p-12 mb-20 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Distribution Network
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions ensuring seamless delivery across global markets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {distributionChannels.map((channel, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className={`${channel.color} mb-6 flex justify-center group-hover:scale-110 transition-transform`}>
                  {channel.icon}
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">{channel.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{channel.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Ship className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h4 className="text-2xl font-bold mb-3">Ready to Export?</h4>
              <p className="text-white/90 mb-6 max-w-md mx-auto">
                Join our global network of satisfied customers and unlock new market opportunities
              </p>
              
              <Button variant="hero" size="lg" className="shadow-glow hover:shadow-elevated">
                Start Export Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Global Presence Stats */}
        <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <h3 className="text-3xl font-bold text-foreground mb-12">Our Global Presence</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <div key={index} className="group hover-lift">
                <div className="card-premium p-6 text-center h-full">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportMarkets;