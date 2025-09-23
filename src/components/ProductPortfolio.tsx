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


        {/* Industries We Serve */}
        <div id="industries" className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Industries We Serve</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Delivering specialized chemical solutions across diverse sectors with proven expertise and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Agriculture & Crop Protection",
              "Pharmaceuticals", 
              "Specialty Chemicals",
              "Water Treatment & Utilities",
              "Industrial Manufacturing",
              "Food & Beverages",
              "Textile & Paper",
              "Oil & Gas"
            ].map((industry, index) => (
              <div key={index} className="group">
                <div className="bg-card hover:bg-primary/5 rounded-xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-300 hover-lift text-center">
                  <div className="text-foreground font-medium text-sm leading-relaxed group-hover:text-primary transition-colors">
                    {industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolio;