import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Ship, Truck } from "lucide-react";

const ExportMarkets = () => {
  const markets = [
    {
      region: "Europe",
      flag: "🇪🇺",
      products: ["Liquid Sodium Hypochlorite"],
      highlights: ["Premium quality standards", "Reliable supply chain", "Technical support"],
      description: "Serving European markets with high-grade liquid sodium hypochlorite for water treatment and industrial applications."
    },
    {
      region: "Africa",
      flag: "🌍",
      products: ["Calcium Hypochlorite", "Bleaching Powder"],
      highlights: ["Stable shipping solutions", "Long shelf life products", "Competitive pricing"],
      description: "Supplying stable bleaching powder and calcium hypochlorite across African nations for water purification and sanitation."
    },
    {
      region: "Asia",
      flag: "🌏",
      products: ["Specialty Intermediates", "Custom Solutions"],
      highlights: ["Custom formulations", "Quick turnaround", "Regional expertise"],
      description: "Providing specialized chemical intermediates and custom solutions to pharmaceutical and fine chemical industries across Asia."
    }
  ];

  const distributionChannels = [
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Sea Freight",
      description: "Major shipping routes to global ports with reliable container services"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Land Transport",
      description: "Pan-India distribution network with specialized chemical transportation"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Logistics",
      description: "Partner network ensuring timely delivery across continents"
    }
  ];

  return (
    <section id="markets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Global Export Markets
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building on our strong domestic presence across textiles, pharma, power, and government sectors, 
            we are expanding into global export markets with proven quality and compliance.
          </p>
        </div>

        {/* Export Markets */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {markets.map((market, index) => (
            <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <span className="text-3xl">{market.flag}</span>
                  <span>{market.region}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Key Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {market.products.map((product, productIndex) => (
                      <Badge key={productIndex} variant="secondary">{product}</Badge>
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{market.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {market.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full">
                  Explore {market.region} Markets
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Distribution Network */}
        <div className="bg-background rounded-2xl p-8 md:p-12 shadow-card">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Distribution Network</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {distributionChannels.map((channel, index) => (
              <div key={index} className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {channel.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-3">{channel.title}</h4>
                <p className="text-muted-foreground">{channel.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-primary rounded-xl p-6 text-white text-center">
            <h4 className="text-xl font-semibold mb-2">Ready to Export?</h4>
            <p className="text-white/90 mb-4">
              Join our global network of satisfied customers across 30+ countries
            </p>
            <Button variant="hero" size="lg">
              Start Export Partnership
            </Button>
          </div>
        </div>

        {/* Geographic Presence */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Our Global Presence</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">100+</div>
              <div className="text-muted-foreground">Export Shipments/Year</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">On-time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportMarkets;