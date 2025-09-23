import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, FlaskConical, Award, Leaf, Users, Beaker, Factory } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: <Droplets className="h-8 w-8" />,
      name: "Sodium Hypochlorite",
      brand: "Sun Chlorex (12%)",
      concentration: "12%",
      capacity: "275,000 L/day",
      description: "High-grade liquid disinfectant and bleaching agent with Manufacturing Drug License for water purification. Mercury-free and stable formulation.",
      applications: ["Drinking Water Disinfection", "Textile Bleaching", "Food Processing", "Sanitation", "Paper Industry", "Effluent Treatment"],
      color: "text-blue-600"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      name: "Calcium Hypochlorite",
      brand: "Stable Bleaching Powder",
      concentration: "Min 34% Chlorine",
      capacity: "10 TPD",
      description: "Premium quality stable bleaching powder with minimum 34% chlorine content. Mercury-free and stable in alkaline medium for reliable performance.",
      applications: ["Water Purification", "Effluent Treatment", "Paper Industry", "Textile Bleaching", "Food Processing", "Oil Refineries"],
      color: "text-green-600"
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      name: "Custom Specialty Chemicals",
      brand: "Tailored Solutions",
      concentration: "As per requirement",
      capacity: "1000 MT/Month",
      description: "Bespoke chemical formulations designed to meet specific industrial requirements. From complex organic synthesis to specialized inorganic compounds.",
      applications: ["Pharmaceutical Intermediates", "Agrochemical Synthesis", "Coating Additives", "Industrial Catalysts", "Research & Development", "Custom Manufacturing"],
      color: "text-purple-600"
    },
    {
      icon: <Factory className="h-8 w-8" />,
      name: "Chemical Intermediates",
      brand: "Industrial Grade",
      concentration: "High Purity",
      capacity: "Variable Batch Size",
      description: "High-quality chemical intermediates for pharmaceutical, agrochemical, and specialty chemical industries. Manufactured under strict quality control standards.",
      applications: ["API Manufacturing", "Dye Intermediates", "Polymer Additives", "Specialty Solvents", "Fine Chemicals", "Process Chemicals"],
      color: "text-orange-600"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300 group">
              <CardHeader>
                <div className={`${product.color} mb-4`}>
                  {product.icon}
                </div>
                <CardTitle className="text-xl mb-4">{product.name}</CardTitle>
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