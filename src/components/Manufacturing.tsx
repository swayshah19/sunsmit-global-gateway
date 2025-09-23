import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, FlaskConical, Microscope, ShieldCheck, Beaker, Users, TestTube, Building2, Warehouse, CheckCircle, Award, Cpu, Zap, Target, Star, ChevronRight } from "lucide-react";

const Manufacturing = () => {
  const certifications = [
    {
      name: "ISO 9001:2015",
      type: "Quality Management",
      icon: Award
    },
    {
      name: "ISO 14001:2015", 
      type: "Environmental Management",
      icon: ShieldCheck
    },
    {
      name: "Water Purification License",
      type: "Chemical Manufacturing",
      icon: Beaker
    },
    {
      name: "Export License",
      type: "International Trade",
      icon: Star
    }
  ];

  const labEquipment = [
    { name: "HPLC", description: "High-Performance Liquid Chromatography" },
    { name: "GC", description: "Gas Chromatography" },
    { name: "FTIR", description: "Fourier Transform Infrared Spectroscopy" },
    { name: "Karl Fischer", description: "Moisture Analysis" },
    { name: "Wet-analysis", description: "Traditional Analytical Methods" }
  ];

  const qualityFeatures = [
    {
      title: "In-process Inspection",
      description: "Quality control at every production stage",
      icon: CheckCircle
    },
    {
      title: "Batch-level Traceability", 
      description: "Complete documentation with COAs",
      icon: Target
    },
    {
      title: "Advanced Testing",
      description: "State-of-the-art purity and consistency testing",
      icon: Microscope
    },
    {
      title: "Standards Compliance",
      description: "Meets domestic and international standards",
      icon: Award
    }
  ];

  const customServices = [
    {
      title: "Raw Material Optimization",
      description: "Selection and optimization of chemical inputs",
      icon: Cpu
    },
    {
      title: "Process Compatibility",
      description: "Application and process testing services",
      icon: FlaskConical
    },
    {
      title: "Documentation Support",
      description: "Regulatory and technical documentation",
      icon: CheckCircle
    }
  ];

  const facilityFeatures = [
    {
      title: "Custom Chemical Blending",
      description: "Specialized blending & packaging services",
      icon: Factory,
      highlight: "100,000+ sq.ft."
    },
    {
      title: "Just-in-Time Stocking",
      description: "Optimized inventory for fast dispatch",
      icon: Zap,
      highlight: "Fast Delivery"
    },
    {
      title: "Production & Storage",
      description: "Large-scale manufacturing capabilities",
      icon: Warehouse,
      highlight: "Multi-Plant"
    }
  ];

  return (
    <section id="manufacturing" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
            <Factory className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Infrastructure Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At SunSmit Dye Chem Pvt. Ltd., our infrastructure combines scale, safety, and innovation.
            With multiple plants across Gujarat, advanced laboratories, and multipurpose facilities, 
            we deliver world-class manufacturing, blending, and packaging solutions.
          </p>
        </div>

        {/* Quality Control Laboratory Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-full mb-4">
              <Microscope className="h-10 w-10 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-3">Quality Control Laboratory</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced analytical capabilities ensuring the highest standards of quality and innovation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* R&D Centre Card */}
            <Card className="card-premium hover-lift group">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl mb-4">R&D Centre</CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  Our R&D centre drives innovation in chlor-alkali chemistry, bleaching agents, and specialty intermediates. 
                  Equipped with modern laboratories, our scientists and chemical engineers improve existing processes 
                  and support customer-specific needs.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Analytical Lab */}
                <div className="bg-muted/30 rounded-xl p-6">
                  <h5 className="font-semibold text-foreground mb-4 flex items-center">
                    <FlaskConical className="h-5 w-5 text-secondary mr-2" />
                    Analytical Laboratory
                  </h5>
                  <div className="grid gap-4">
                    {labEquipment.map((equipment, index) => (
                      <div key={index} className="group p-4 bg-gradient-to-r from-background to-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                              <TestTube className="h-4 w-4 text-primary" />
                            </div>
                            <Badge variant="secondary" className="font-semibold bg-secondary/20 text-secondary border-secondary/30">
                              {equipment.name}
                            </Badge>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-sm text-muted-foreground mt-3 ml-11 leading-relaxed">
                          {equipment.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Services */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <Building2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <h6 className="font-semibold text-foreground mb-1">Application Development</h6>
                      <p className="text-sm text-muted-foreground">Technical studies, process improvements, and scale-up feasibility</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                    <Users className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <h6 className="font-semibold text-foreground mb-1">Expert Collaboration</h6>
                      <p className="text-sm text-muted-foreground">Partnerships with scientists and technical institutions for breakthrough innovations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Assurance Card */}
            <Card className="card-premium hover-lift group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <ShieldCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Quality Assurance</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Quality is embedded in every stage of our manufacturing process. From raw material receipt 
                  to final shipment, every product is tested for purity, consistency, and safety.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {qualityFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-all hover-lift">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h6 className="font-semibold text-foreground mb-1">{feature.title}</h6>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Custom Solutions Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-90"></div>
          <div className="relative bg-gradient-overlay rounded-3xl p-8 md:p-16 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
                <Beaker className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Tailored Chemical Solutions</h3>
              <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                We collaborate with customers to deliver custom chemical solutions. Our team of skilled 
                chemists, engineers, and formulators ensures every solution is industry-ready and customer-driven.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {customServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="glass-dark rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover-lift">
                      <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-6 group-hover:bg-white/30 transition-colors">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                      <p className="text-white/80 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Facilities & Warehousing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4">
              <Warehouse className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Blending, Repacking & Warehousing</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our multipurpose facilities and regional units are designed for scalable chemical operations, 
              covering over 100,000+ sq.ft. of production and storage capacity across multiple locations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Facility Features */}
            <div>
              <h4 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <Factory className="h-6 w-6 text-primary mr-3" />
                Key Capabilities
              </h4>
              <div className="space-y-6">
                {facilityFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card key={index} className="card-premium hover-lift group border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-bold text-foreground">{feature.title}</h5>
                              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                {feature.highlight}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;