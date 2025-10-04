import { Button } from "@/components/ui/button";
import { Droplets, FlaskConical, Beaker, Zap } from "lucide-react";
const ProductPortfolio = () => {
  const products = [{
    title: "Sodium Hypochlorite - Bulk Liquid Disinfectant",
    description: "Leading sodium hypochlorite manufacturer India supplying industrial-grade liquid sodium hypochlorite for water treatment, sanitation & textile bleaching. ISO certified with Manufacturing Drug License for municipal water boards and bottling plants. Mercury-free, stable formulation exported to Africa, Europe, Asia.",
    icon: Droplets,
    applications: ["Drinking Water Disinfection & Treatment", "Municipal Water Purification", "Textile Industry Bleaching", "Food Processing Sanitation", "Paper Industry Bleaching", "Effluent Treatment Plants"]
  }, {
    title: "Calcium Hypochlorite - Bleaching Powder",
    description: "Premium calcium hypochlorite exporter from Gujarat supplying stable bleaching powder with minimum 34% chlorine content. ISO certified manufacturer for water purification, textile bleaching and industrial applications. Mercury-free formulation ideal for effluent treatment and sanitation.",
    icon: Zap,
    applications: ["Water Purification Systems", "Industrial Effluent Treatment", "Paper & Pulp Industry", "Textile Bleaching Applications", "Food Processing Sanitation", "Oil Refineries & Chemical Plants"]
  }, {
    title: "Custom Specialty Chemicals & Formulations",
    description: "Specialty chemicals exporter India offering bespoke chemical formulations and custom chemical synthesis for pharmaceutical, agrochemical and industrial applications. From complex organic synthesis to specialized inorganic compounds, we manufacture technical-grade chemicals for global markets.",
    icon: FlaskConical,
    applications: ["Pharmaceutical Intermediates & APIs", "Agrochemical Pesticide Synthesis", "Industrial Coating Additives", "Chemical Catalysts Manufacturing", "R&D Custom Formulations", "Contract Chemical Manufacturing"]
  }, {
    title: "Chemical Intermediates & Fine Chemicals",
    description: "Leading chemical intermediates exporter from India manufacturing high-purity pharmaceutical intermediates, agrochemical compounds, dye intermediates and polymer additives. ISO certified facility producing fine chemicals, specialty solvents and process chemicals under strict quality control.",
    icon: Beaker,
    applications: ["API & Bulk Drug Intermediates", "Dye & Pigment Intermediates", "Polymer & Plastic Additives", "Industrial Specialty Solvents", "Fine Chemical Manufacturing", "Technical Process Chemicals"]
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
                <Button className="mb-4">Request Quote</Button>
              </div>

              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Applications:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {product.applications.map((application, appIndex) => <li key={appIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      {application}
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProductPortfolio;