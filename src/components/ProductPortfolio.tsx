import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Beaker, Sprout, TestTube, FlaskConical, Pill, Globe } from "lucide-react";

const ProductPortfolio = () => {
  const productCategories = [
    {
      title: "Water Treatment Chemicals",
      icon: Droplets,
      products: [
        { name: "Sodium Hypochlorite", description: "High-grade disinfectant" },
        { name: "Calcium Hypochlorite", description: "Stable bleaching powder" }
      ],
      color: "text-blue-600"
    },
    {
      title: "Inorganic Chemicals", 
      icon: Beaker,
      products: [
        { name: "Soda Ash", description: "Sodium Carbonate" },
        { name: "Caustic Soda", description: "NaOH" },
        { name: "Aluminium Hydroxide", description: "Industrial grade" },
        { name: "Titanium Dioxide", description: "Pigment grade" },
        { name: "Hydrogen Peroxide", description: "Various concentrations" }
      ],
      color: "text-purple-600"
    },
    {
      title: "Organic Chemicals",
      icon: FlaskConical,
      products: [
        { name: "Acetic Acid & Derivatives", description: "Industrial grade" },
        { name: "Ethanol", description: "Industrial Alcohols" },
        { name: "Phenols", description: "Aniline Derivatives" },
        { name: "Industrial Solvents", description: "Various grades" }
      ],
      color: "text-green-600"
    },
    {
      title: "Agrochemicals",
      icon: Sprout,
      products: [
        { name: "Technical-grade Pesticides", description: "Various formulations" },
        { name: "Insecticides", description: "Crop protection" },
        { name: "Herbicides", description: "Weed control" },
        { name: "Fungicides", description: "Disease prevention" }
      ],
      color: "text-emerald-600"
    },
    {
      title: "Dyes & Intermediates",
      icon: TestTube,
      products: [
        { name: "Reactive Dyes", description: "Textile applications" },
        { name: "Acid Dyes", description: "Various colors" },
        { name: "Azo Intermediates", description: "Specialty chemicals" }
      ],
      color: "text-orange-600"
    },
    {
      title: "Pharmaceuticals & Fine Chemicals",
      icon: Pill,
      products: [
        { name: "APIs", description: "Bulk Drug Intermediates" },
        { name: "Specialty Fine Chemicals", description: "Pharma grade" }
      ],
      color: "text-red-600"
    }
  ];

  const industries = [
    "Agriculture & Crop Protection",
    "Pharmaceuticals", 
    "Specialty Chemicals",
    "Water Treatment & Utilities",
    "Industrial Manufacturing",
    "Food & Beverages",
    "Textile & Paper"
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <FlaskConical className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Our Product Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive chemical solutions across six major categories, serving diverse industries 
            with quality, reliability, and innovation.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="card-premium hover-lift group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="p-3 bg-muted/30 rounded-lg border border-border/50">
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="secondary" className="text-xs font-medium">
                            {product.name}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Industries We Serve */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-90"></div>
          <div className="relative bg-gradient-overlay rounded-3xl p-8 md:p-16 text-white">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
                Delivering specialized chemical solutions across diverse sectors with proven expertise and reliability
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="group">
                    <div className="glass-dark rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover-lift text-center">
                      <div className="text-white/90 font-medium text-sm leading-relaxed group-hover:text-white transition-colors">
                        {industry}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolio;