import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Droplets, Zap, Factory, ShieldCheck, Wheat } from "lucide-react";

const DomesticMarkets = () => {
  const industries = [
    {
      icon: <Droplets className="h-8 w-8" />,
      name: "Textiles",
      description: "Sodium Hypochlorite for bleaching and processing",
      products: ["Sodium Hypochlorite 12%"],
      color: "text-blue-600"
    },
    {
      icon: <Wheat className="h-8 w-8" />,
      name: "Starch & Paper",
      description: "Industrial bleaching and processing solutions",
      products: ["Sodium Hypochlorite", "Bleaching Agents"],
      color: "text-amber-600"
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      name: "Pharmaceutical",
      description: "High-purity chemicals for pharma applications",
      products: ["Stable Bleaching Powder", "Specialty Intermediates"],
      color: "text-green-600"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      name: "Government Water",
      description: "Water purification for municipal supplies",
      products: ["Sodium Hypochlorite", "Calcium Hypochlorite"],
      color: "text-blue-700"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      name: "Power Plants",
      description: "Cooling tower treatment and disinfection",
      products: ["Stable Bleaching Powder", "Water Treatment"],
      color: "text-yellow-600"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      name: "Bottling & Food",
      description: "Sanitization and food processing applications",
      products: ["Food Grade Sodium Hypochlorite"],
      color: "text-green-700"
    }
  ];

  const packagingOptions = [
    {
      product: "Sodium Hypochlorite",
      options: ["MS Rubber-lined Tankers", "PVC/HDPE Drums", "Carboys"],
      description: "Flexible packaging for various quantity requirements"
    },
    {
      product: "Bleaching Powder",
      options: ["25 kg LDPE-lined HDPE Bags"],
      description: "Stable packaging for long-term storage and transport"
    }
  ];

  return (
    <section className="py-20 bg-background" id="domestic">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Strong Domestic Presence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading industries across India with proven track record in textiles, 
            pharmaceuticals, power generation, and government water treatment sectors.
          </p>
        </div>

        {/* Industries Served */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300">
              <CardContent className="p-6">
                <div className={`${industry.color} mb-4`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{industry.name}</h3>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.products.map((product, productIndex) => (
                    <Badge key={productIndex} variant="outline" className="text-xs">
                      {product}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Strengths */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Domestic Market Strengths</h3>
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

        {/* Packaging & Transport */}
        <div className="grid md:grid-cols-2 gap-8">
          {packagingOptions.map((option, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{option.product}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Packaging Options:</h4>
                  <ul className="space-y-1">
                    {option.options.map((pkg, pkgIndex) => (
                      <li key={pkgIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span>{pkg}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomesticMarkets;