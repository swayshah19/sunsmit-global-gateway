import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Factory, 
  Microscope, 
  Shield, 
  FlaskConical, 
  Award, 
  CheckCircle,
  BarChart3,
  Beaker,
  Zap,
  Target,
  Users,
  TrendingUp
} from "lucide-react";

const InfrastructureQuality = () => {
  const manufacturingCapacity = [
    {
      title: "Primary Product",
      subtitle: "Sodium HypoChlorite",
      capacity: "13,000 MT/month",
      icon: Factory
    },
    {
      title: "Custom Solutions", 
      subtitle: "Specialty Intermediates",
      capacity: "1,000 MT/month",
      icon: FlaskConical
    },
    {
      title: "Multi-facility",
      subtitle: "Warehousing & Blending", 
      capacity: "100,000+ sq.ft.",
      icon: BarChart3
    }
  ];

  const labEquipment = [
    {
      name: "HPLC",
      description: "High-Performance Liquid Chromatography",
      icon: Microscope
    },
    {
      name: "GC", 
      description: "Gas Chromatography",
      icon: Beaker
    },
    {
      name: "FTIR",
      description: "Fourier Transform Infrared Spectroscopy", 
      icon: Zap
    },
    {
      name: "Karl Fischer",
      description: "Moisture Analysis",
      icon: Target
    },
    {
      name: "Wet-analysis",
      description: "Traditional Analytical Methods",
      icon: FlaskConical
    }
  ];

  const qualityFeatures = [
    {
      title: "Batch-level Traceability",
      description: "Complete documentation with COAs",
      icon: CheckCircle
    },
    {
      title: "Global Compliance", 
      description: "International quality standards",
      icon: Award
    },
    {
      title: "In-process Quality Checks",
      description: "100% quality verification",
      icon: Shield
    },
    {
      title: "Application Development",
      description: "Process optimization & testing", 
      icon: TrendingUp
    }
  ];

  const rdCapabilities = [
    "Tailored Chemical Solutions - Custom formulations for pharma, agrochem, and industrial needs",
    "Process Optimization - Application development & scale-up feasibility studies", 
    "Scientific Collaboration - Strong partnerships with scientists & technical institutions"
  ];

  return (
    <section id="manufacturing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
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

        {/* Manufacturing Facility */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Manufacturing Facility</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              High-capacity production facilities with proven capabilities across multiple chemical categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {manufacturingCapacity.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="card-premium hover-lift group">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground mb-4">{item.subtitle}</p>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {item.capacity}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Advanced Laboratory */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Advanced Laboratory</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art analytical capabilities ensuring precision and reliability in every test
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labEquipment.map((equipment, index) => {
              const IconComponent = equipment.icon;
              return (
                <Card key={index} className="card-premium hover-lift group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">{equipment.name}</h4>
                        <p className="text-sm text-muted-foreground">{equipment.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Quality Assurance</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive quality control systems ensuring global compliance and customer satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="card-premium hover-lift group">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-base font-bold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* R&D & Customization */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-90"></div>
          <div className="relative bg-gradient-overlay rounded-3xl p-8 md:p-16 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">R&D & Customization</h3>
              <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                Innovation-driven research and development capabilities delivering custom chemical 
                solutions tailored to specific industry requirements and applications.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {rdCapabilities.map((capability, index) => (
                <div key={index} className="glass-dark rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover-lift">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-white/20 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/90 leading-relaxed">{capability}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureQuality;