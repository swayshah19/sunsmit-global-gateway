import { Building, Leaf, Pill, Beaker, Droplets, Factory, Palette, Shirt } from "lucide-react";

const IndustriesWeServe = () => {
  const industries = [
    {
      title: "Agriculture & Crop Protection",
      icon: Leaf,
    },
    {
      title: "Pharmaceuticals",
      icon: Pill,
    },
    {
      title: "Specialty Chemicals",
      icon: Beaker,
    },
    {
      title: "Water Treatment & Utilities",
      icon: Droplets,
    },
    {
      title: "Industrial Manufacturing",
      icon: Factory,
    },
    {
      title: "Dyes & Pigments",
      icon: Palette,
    },
    {
      title: "Textile & Paper",
      icon: Shirt,
    },
    {
      title: "Oil & Gas",
      icon: Building,
    },
  ];

  return (
    <section id="industries" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Building className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Delivering specialized chemical solutions across diverse sectors with proven expertise and reliability
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border/50 hover-lift transition-all duration-300 text-center group"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;