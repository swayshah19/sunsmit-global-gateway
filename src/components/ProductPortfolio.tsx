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
      
    </section>;
};
export default ProductPortfolio;