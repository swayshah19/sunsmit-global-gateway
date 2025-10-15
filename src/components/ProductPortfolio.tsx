import { Button } from "@/components/ui/button";
import { Droplets, FlaskConical, Beaker, Zap, Wheat, Pill, Settings, Palette } from "lucide-react";
const ProductPortfolio = () => {
  const products = [{
    title: "Sodium HypoChlorite",
    description: "Leading Sodium HypoChlorite manufacturer India supplying industrial-grade liquid Sodium HypoChlorite for water treatment, sanitation & textile bleaching. ISO certified with Manufacturing Drug License for municipal water boards and bottling plants. Mercury-free, stable formulation exported to Africa, Europe, Asia.",
    icon: Droplets,
    applications: ["Drinking Water Disinfection & Treatment", "Municipal Water Purification", "Textile Industry Bleaching", "Food Processing Sanitation", "Paper Industry Bleaching", "Effluent Treatment Plants"]
  }, {
    title: "Calcium Hypochlorite - Bleaching Powder",
    description: "Premium calcium hypochlorite exporter from Gujarat supplying stable bleaching powder with minimum 34% chlorine content. ISO certified manufacturer for water purification, textile bleaching and industrial applications. Mercury-free formulation ideal for effluent treatment and sanitation.",
    icon: Zap,
    applications: ["Water Purification Systems", "Industrial Effluent Treatment", "Paper & Pulp Industry", "Textile Bleaching Applications", "Food Processing Sanitation", "Oil Refineries & Chemical Plants"]
  }, {
    title: "Inorganic Chemicals",
    description: "Leading supplier of inorganic chemicals from India including Soda Ash, Caustic Soda, Alumina, Titanium Dioxide, and Hydrogen Peroxide. Stable supply base with globally competitive pricing and proximity to Dahej and Mundra ports for efficient export logistics.",
    icon: Beaker,
    applications: ["Soda Ash (Sodium Carbonate)", "Caustic Soda (NaOH)", "Alumina / Aluminium Hydroxide", "Titanium Dioxide", "Hydrogen Peroxide", "Industrial Mineral Salts"]
  }, {
    title: "Organic Chemicals",
    description: "Premium organic chemicals supplier from Gujarat providing Acetic Acid, Industrial Alcohols, Phenols, Aniline Derivatives, and Specialty Solvents. Applications span pharmaceuticals, coatings, resins, plastics, and adhesives manufacturing.",
    icon: FlaskConical,
    applications: ["Acetic Acid & Derivatives", "Ethanol / Industrial Alcohols", "Phenols & Aniline Derivatives", "Industrial Solvents", "Specialty Organics", "Chemical Intermediates"]
  }, {
    title: "Dyes & Dye Intermediates",
    description: "Leading dyes and dye intermediates exporter from India supplying Reactive Dyes, Acid Dyes, and Azo Intermediates. India supplies approximately 16% of global dyestuffs with exports to 90+ countries worldwide.",
    icon: Palette,
    applications: ["Reactive Dyes", "Acid Dyes", "Azo Intermediates", "Textile Colorants", "Industrial Dyes", "Specialty Dyestuffs"]
  }, {
    title: "Agro-Chemicals and Intermediates",
    description: "Trusted agro-chemicals supplier from India providing technical-grade pesticides and formulations including insecticides, herbicides, and fungicides. India is one of the world's largest producers of agro-chemicals with stringent quality standards.",
    icon: Wheat,
    applications: ["Technical-grade Pesticides", "Insecticides", "Herbicides", "Fungicides", "Plant Growth Regulators", "Agricultural Intermediates"]
  }, {
    title: "Active Pharmaceutical Intermediates",
    description: "ISO certified API and pharmaceutical intermediates supplier from India with world-class regulatory compliance (US FDA, EU GMP). Supplying Active Pharmaceutical Ingredients, bulk drug intermediates, and specialty fine chemicals to pharmaceutical manufacturers worldwide.",
    icon: Pill,
    applications: ["APIs (Active Pharmaceutical Ingredients)", "Bulk Drug Intermediates", "Specialty Fine Chemicals", "Custom API Sourcing", "GMP-Compliant Supply", "Pharmaceutical Precursors"]
  }, {
    title: "Specialty Chemicals",
    description: "Leading specialty chemicals manufacturer offering custom chemical formulations, performance additives, surfactants, catalysts, and process chemicals. Tailored solutions for specific industrial applications with flexible manufacturing capabilities.",
    icon: Settings,
    applications: ["Custom Chemical Formulations", "Performance Additives", "Surfactants & Emulsifiers", "Catalysts", "Process Chemicals", "Industrial Specialty Solutions"]
  }];
  return <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Products </h2>
          
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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