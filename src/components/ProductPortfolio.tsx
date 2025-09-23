import { Button } from "@/components/ui/button";
import { Droplets, FlaskConical, Beaker, Zap } from "lucide-react";
const ProductPortfolio = () => {
  const products = [{
    title: "Sodium Hypochlorite",
    description: "High-grade liquid disinfectant and bleaching agent with Manufacturing Drug License for water purification. Mercury-free and stable formulation.",
    icon: Droplets,
    applications: ["Drinking Water Disinfection", "Textile Bleaching", "Food Processing", "Sanitation", "Paper Industry", "Effluent Treatment"]
  }, {
    title: "Calcium Hypochlorite",
    description: "Premium quality stable bleaching powder with minimum 34% chlorine content. Mercury-free and stable in alkaline medium for reliable performance.",
    icon: Zap,
    applications: ["Water Purification", "Effluent Treatment", "Paper Industry", "Textile Bleaching", "Food Processing", "Oil Refineries"]
  }, {
    title: "Custom Specialty Chemicals",
    description: "Bespoke chemical formulations designed to meet specific industrial requirements. From complex organic synthesis to specialized inorganic compounds.",
    icon: FlaskConical,
    applications: ["Pharmaceutical Intermediates", "Agrochemical Synthesis", "Coating Additives", "Industrial Catalysts", "Research & Development", "Custom Manufacturing"]
  }, {
    title: "Chemical Intermediates",
    description: "High-quality chemical intermediates for pharmaceutical, agrochemical, and specialty chemical industries. Manufactured under strict quality control standards.",
    icon: Beaker,
    applications: ["API Manufacturing", "Dye Intermediates", "Polymer Additives", "Specialty Solvents", "Fine Chemicals", "Process Chemicals"]
  }];
  return <section id="products" className="py-20 bg-background">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => {
          const IconComponent = product.icon;
          return <div key={index} className="bg-card rounded-2xl p-8 border border-border/50 hover-lift transition-all duration-300 group">
                <div className="mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-foreground mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, appIndex) => <span key={appIndex} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                        {app}
                      </span>)}
                  </div>
                </div>

                <Button className="w-full group-hover:shadow-lg transition-all">
                  Request Quote
                </Button>
              </div>;
        })}
        </div>

        {/* Industries We Serve */}
        
      </div>
    </section>;
};
export default ProductPortfolio;