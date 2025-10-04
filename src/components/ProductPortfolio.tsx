import { Button } from "@/components/ui/button";
import { Droplets, FlaskConical, Beaker, Zap } from "lucide-react";
const ProductPortfolio = () => {
  const products = [{
    title: "Sodium Hypochlorite",
    description: "Leading sodium hypochlorite manufacturer India supplying industrial-grade liquid sodium hypochlorite for water treatment, sanitation & textile bleaching. ISO certified with Manufacturing Drug License for municipal water boards and bottling plants. Mercury-free, stable formulation exported to Africa, Europe, Asia.",
    icon: Droplets,
    applications: ["Drinking Water Disinfection & Treatment", "Municipal Water Purification", "Textile Industry Bleaching", "Food Processing Sanitation", "Paper Industry Bleaching", "Effluent Treatment Plants"]
  }, {
    title: "Calcium Hypochlorite - Bleaching Powder",
    description: "Premium calcium hypochlorite exporter from Gujarat supplying stable bleaching powder with minimum 34% chlorine content. ISO certified manufacturer for water purification, textile bleaching and industrial applications. Mercury-free formulation ideal for effluent treatment and sanitation.",
    icon: Zap,
    applications: ["Water Purification Systems", "Industrial Effluent Treatment", "Paper & Pulp Industry", "Textile Bleaching Applications", "Food Processing Sanitation", "Oil Refineries & Chemical Plants"]
  }, {
    title: "APIs (Active Pharmaceutical Ingredients) Distribution & Export",
    description: "Leading API distributor and exporter from India supplying high-quality Active Pharmaceutical Ingredients (APIs) to pharmaceutical manufacturers worldwide. ISO certified distribution network for bulk drug APIs and pharmaceutical intermediates with strict quality control, regulatory compliance, and global logistics support.",
    icon: FlaskConical,
    applications: ["API Distribution & Export", "Pharmaceutical APIs for Drug Manufacturing", "Bulk Drug Intermediates", "Custom API Sourcing & Procurement", "GMP-Compliant API Supply Chain", "Global Pharmaceutical Distribution"]
  }, {
    title: "Chemical Intermediates & Fine Chemicals",
    description: "Leading chemical intermediates exporter from India manufacturing high-purity pharmaceutical intermediates, API precursors, agrochemical compounds, dye intermediates and polymer additives. ISO certified facility producing fine chemicals, specialty solvents and process chemicals under strict quality control.",
    icon: Beaker,
    applications: ["API & Bulk Drug Intermediates", "Pharmaceutical API Precursors", "Dye & Pigment Intermediates", "Polymer & Plastic Additives", "Industrial Specialty Solvents", "Fine Chemical Manufacturing"]
  }];
  return <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Products </h2>
          
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => <div key={index} className="bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-3">{product.title}</h3>
                  
                </div>
              </div>

              <div className="mb-6">
                <Button size="lg" className="mb-4" asChild>
                  <a href="#contact">Request Quote</a>
                </Button>
              </div>

              
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProductPortfolio;