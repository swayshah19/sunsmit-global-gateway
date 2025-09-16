import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, FlaskConical, Award, Leaf, Users } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: <Droplets className="h-8 w-8" />,
      name: "Sodium Hypochlorite",
      brand: "Sun Chlorex",
      concentration: "10-15%",
      capacity: "430 MT/day",
      description: "High-grade liquid bleaching agent for water treatment, textile processing, and sanitation applications.",
      applications: ["Water Treatment", "Textile Industry", "Sanitization", "Paper & Pulp"],
      color: "text-blue-600"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      name: "Calcium Hypochlorite",
      brand: "Stable Bleaching Powder",
      concentration: "65-70%",
      capacity: "Export Grade",
      description: "Premium quality stable bleaching powder for long-term storage and international shipping.",
      applications: ["Water Purification", "Swimming Pools", "Industrial Bleaching", "Disinfection"],
      color: "text-green-600"
    },
    {
      icon: <FlaskConical className="h-8 w-8" />,
      name: "Specialty Intermediates",
      brand: "Custom Solutions",
      concentration: "Various",
      capacity: "20 MT Campaign",
      description: "Specialized chemical intermediates manufactured for pharmaceutical and fine chemical industries.",
      applications: ["Pharmaceutical", "Fine Chemicals", "Research", "Custom Synthesis"],
      color: "text-purple-600"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Manufacturing high-quality chemicals with advanced technology and stringent quality control 
            to meet international standards and customer requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300 group">
              <CardHeader>
                <div className={`${product.color} mb-4`}>
                  {product.icon}
                </div>
                <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{product.brand}</Badge>
                  <Badge variant="outline">{product.concentration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.map((app, appIndex) => (
                      <span 
                        key={appIndex}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-3 mb-4">
                  <div className="text-sm text-muted-foreground">Production Capacity</div>
                  <div className="font-semibold text-foreground">{product.capacity}</div>
                </div>

                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Features */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Why Choose Our Products?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Premium Quality</h4>
              <p className="text-sm text-muted-foreground">ISO certified manufacturing with stringent quality controls</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Eco-Friendly</h4>
              <p className="text-sm text-muted-foreground">Sustainable production methods and environmental compliance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Custom Solutions</h4>
              <p className="text-sm text-muted-foreground">Tailored formulations to meet specific requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Expert Support</h4>
              <p className="text-sm text-muted-foreground">Technical assistance and customer service excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;