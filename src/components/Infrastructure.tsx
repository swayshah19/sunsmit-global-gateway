import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, FlaskConical, Microscope, ShieldCheck, Beaker, TestTube, Building2, Warehouse, CheckCircle, Award, Target, Star, ChevronRight } from "lucide-react";
const Infrastructure = () => {
  const manufacturingCapacity = [{
    title: "Sodium Hypochlorite",
    capacity: "13,000 MT/month",
    icon: Beaker,
    highlight: "Primary Product"
  }, {
    title: "Specialty Intermediates",
    capacity: "1,000 MT/month",
    icon: TestTube,
    highlight: "Custom Solutions"
  }, {
    title: "Warehousing & Blending",
    capacity: "100,000+ sq.ft.",
    icon: Warehouse,
    highlight: "Multi-facility"
  }];
  const labEquipment = [{
    name: "HPLC",
    description: "High-Performance Liquid Chromatography",
    icon: TestTube
  }, {
    name: "GC",
    description: "Gas Chromatography",
    icon: FlaskConical
  }, {
    name: "FTIR",
    description: "Fourier Transform Infrared Spectroscopy",
    icon: Microscope
  }, {
    name: "Karl Fischer",
    description: "Moisture Analysis",
    icon: Beaker
  }, {
    name: "Wet-analysis",
    description: "Traditional Analytical Methods",
    icon: TestTube
  }];
  const qualityFeatures = [{
    title: "Batch-level Traceability",
    description: "Complete documentation with COAs",
    icon: Target
  }, {
    title: "Global Compliance",
    description: "International quality standards",
    icon: Award
  }, {
    title: "In-process Quality Checks",
    description: "100% quality verification",
    icon: CheckCircle
  }, {
    title: "Application Development",
    description: "Process optimization & testing",
    icon: Building2
  }];
  const rdCapabilities = [{
    title: "Tailored Chemical Solutions",
    description: "Custom formulations for pharma, agrochem, and industrial needs"
  }, {
    title: "Process Optimization",
    description: "Application development & scale-up feasibility studies"
  }, {
    title: "Scientific Collaboration",
    description: "Strong partnerships with scientists & technical institutions"
  }];
  return <section id="infrastructure" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
            <Factory className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Infrastructure & Quality Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            State-of-the-art manufacturing facilities, advanced laboratories, and comprehensive quality 
            assurance systems ensuring world-class chemical production and innovation.
          </p>
        </div>

        {/* Manufacturing Capacity */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Manufacturing Facility</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              High-capacity production facilities with proven capabilities across multiple chemical categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {manufacturingCapacity.map((item, index) => {
            const IconComponent = item.icon;
            return <Card key={index} className="card-premium hover-lift group text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                      {item.highlight}
                    </Badge>
                    <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-2xl font-bold text-primary mb-2">{item.capacity}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>

        {/* Advanced Labs & R&D */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Laboratory Equipment */}
          <Card className="card-premium hover-lift">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Microscope className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Advanced Laboratory</CardTitle>
              </div>
              <p className="text-muted-foreground">
                State-of-the-art analytical capabilities ensuring precision and reliability in every test
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {labEquipment.map((equipment, index) => {
                const IconComponent = equipment.icon;
                return <div key={index} className="group p-4 bg-gradient-to-r from-background to-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-4 w-4 text-primary" />
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
                    </div>;
              })}
              </div>
            </CardContent>
          </Card>

          {/* Quality Assurance */}
          <Card className="card-premium hover-lift">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Quality Assurance</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Comprehensive quality control systems ensuring global compliance and customer satisfaction
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {qualityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return <div key={index} className="flex items-start space-x-4 p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-all hover-lift">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h6 className="font-semibold text-foreground mb-1">{feature.title}</h6>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>;
              })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* R&D & Customization */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-90"></div>
          <div className="relative bg-gradient-overlay rounded-3xl p-8 md:p-16 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">R&D & Customization</h3>
              <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                Innovation-driven research and development capabilities delivering custom chemical solutions 
                tailored to specific industry requirements and applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {rdCapabilities.map((capability, index) => <div key={index} className="text-center group">
                  <div className="glass-dark rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover-lift">
                    <h4 className="text-xl font-bold mb-4">{capability.title}</h4>
                    <p className="text-white/80 leading-relaxed">{capability.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Infrastructure;