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
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Product Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manufacturing high-quality chemicals with advanced technology and stringent quality control to meet international standards and customer requirements.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-3">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <Button className="mb-4">Request Quote</Button>
              </div>

              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Applications:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {product.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductPortfolio;