import { Button } from "@/components/ui/button";
import { Droplets, FlaskConical, Beaker, Zap } from "lucide-react";

const ProductPortfolio = () => {
  const products = [
    {
      title: "Sodium Hypochlorite",
      description: "High-grade liquid disinfectant and bleaching agent with Manufacturing Drug License for water purification. Mercury-free and stable formulation.",
      icon: Droplets,
      applications: [
        "Drinking Water Disinfection",
        "Textile Bleaching", 
        "Food Processing",
        "Sanitation",
        "Paper Industry",
        "Effluent Treatment"
      ]
    },
    {
      title: "Calcium Hypochlorite",
      description: "Premium quality stable bleaching powder with minimum 34% chlorine content. Mercury-free and stable in alkaline medium for reliable performance.",
      icon: Zap,
      applications: [
        "Water Purification",
        "Effluent Treatment",
        "Paper Industry", 
        "Textile Bleaching",
        "Food Processing",
        "Oil Refineries"
      ]
    },
    {
      title: "Custom Specialty Chemicals",
      description: "Bespoke chemical formulations designed to meet specific industrial requirements. From complex organic synthesis to specialized inorganic compounds.",
      icon: FlaskConical,
      applications: [
        "Pharmaceutical Intermediates",
        "Agrochemical Synthesis",
        "Coating Additives",
        "Industrial Catalysts", 
        "Research & Development",
        "Custom Manufacturing"
      ]
    },
    {
      title: "Chemical Intermediates", 
      description: "High-quality chemical intermediates for pharmaceutical, agrochemical, and specialty chemical industries. Manufactured under strict quality control standards.",
      icon: Beaker,
      applications: [
        "API Manufacturing",
        "Dye Intermediates",
        "Polymer Additives",
        "Specialty Solvents",
        "Fine Chemicals",
        "Process Chemicals"
      ]
    }
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
            Manufacturing high-quality chemicals with advanced technology and stringent quality control to meet international standards and customer requirements.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 hover-lift">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">{product.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {product.description}
                    </p>
                    <Button size="lg" className="w-full sm:w-auto">
                      Request Quote
                    </Button>
                  </div>
                  
                  <div className="bg-muted/30 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4 text-foreground">Applications:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.applications.map((application, appIndex) => (
                        <div key={appIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{application}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolio;