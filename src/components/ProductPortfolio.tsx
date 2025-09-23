import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Beaker, Sprout, TestTube, FlaskConical, Pill, Globe } from "lucide-react";

const ProductPortfolio = () => {
  const productCategories = [
    {
      title: "Sodium Hypochlorite & Calcium Hypochlorite",
      icon: Droplets,
      products: [
        { name: "Sodium Hypochlorite", description: "High-grade disinfectant for water treatment" },
        { name: "Calcium Hypochlorite", description: "Stable bleaching powder with extended shelf life" },
        { name: "Industrial Grade Solutions", description: "Various concentrations available" },
        { name: "Water Treatment Applications", description: "Municipal and industrial use" }
      ],
      color: "text-blue-600"
    },
    {
      title: "Chemical Intermediates",
      icon: Beaker,
      products: [
        { name: "Soda Ash (Sodium Carbonate)", description: "Industrial grade alkali" },
        { name: "Caustic Soda (NaOH)", description: "High purity sodium hydroxide" },
        { name: "Acetic Acid & Derivatives", description: "Industrial grade organic acids" },
        { name: "Aluminium Hydroxide", description: "Flame retardant applications" },
        { name: "Titanium Dioxide", description: "Pigment and coating grade" },
        { name: "Hydrogen Peroxide", description: "Various industrial concentrations" },
        { name: "Industrial Solvents", description: "Ethanol and specialty solvents" }
      ],
      color: "text-purple-600"
    },
    {
      title: "Specialty Chemicals",
      icon: FlaskConical,
      products: [
        { name: "Pharmaceutical APIs", description: "Active pharmaceutical ingredients" },
        { name: "Agrochemical Intermediates", description: "Pesticide and herbicide precursors" },
        { name: "Dye Intermediates", description: "Reactive and acid dye components" },
        { name: "Fine Chemicals", description: "High-purity specialty compounds" },
        { name: "Custom Synthesis", description: "Tailored chemical solutions" },
        { name: "Research Chemicals", description: "Laboratory and R&D applications" }
      ],
      color: "text-green-600"
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
            Comprehensive chemical solutions across three major categories, serving diverse industries 
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