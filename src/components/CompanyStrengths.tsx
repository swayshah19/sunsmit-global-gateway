import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Factory, Globe, Shield, Calendar, Zap, MapPin, CheckCircle } from "lucide-react";

const CompanyStrengths = () => {
  const keyStrengths = [
    {
      title: "30+ Years Legacy",
      description: "Proven expertise since 1996",
      icon: Calendar,
      highlight: "Founded 1996"
    },
    {
      title: "14,000 MT/month Capacity", 
      description: "High-scale chemical production",
      icon: Factory,
      highlight: "High Capacity"
    },
    {
      title: "2 State-of-the-Art Plants",
      description: "Ankleshwar & Dahej, Gujarat, India", 
      icon: MapPin,
      highlight: "Gujarat Based"
    },
    {
      title: "Global Certifications",
      description: "ISO 9001 & ISO 14001 compliant",
      icon: Award,
      highlight: "ISO Compliant"
    },
    {
      title: "Export Readiness",
      description: "IEC-compliant, drug manufacturing license",
      icon: Globe,
      highlight: "Export Ready"
    },
    {
      title: "Quality Assurance", 
      description: "In-house labs with MSDS & COAs",
      icon: Shield,
      highlight: "Quality First"
    }
  ];

  const whyChooseUs = [
    "Proven Legacy – 30+ years in chemical manufacturing",
    "Strategic Location – Gujarat-based, India's chemical hub", 
    "Global Reach – Exports to Europe, Africa, Asia, expanding to Americas",
    "Flexible Packaging – ISO tanks, IBCs, HDPE drums, bulk bags",
    "Quality Assurance – In-house labs (HPLC, GC, FTIR, KF) with MSDS & COAs"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Our Strengths
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Three decades of excellence in chemical manufacturing, built on innovation, quality, 
            and unwavering commitment to customer success.
          </p>
        </div>

        {/* Key Strengths Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {keyStrengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <Card key={index} className="card-premium hover-lift group">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                    {strength.highlight}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3">{strength.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose SunSmit */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-90"></div>
          <div className="relative bg-gradient-overlay rounded-3xl p-8 md:p-16 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose SunSmit?</h3>
              <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                We bring India's chemical manufacturing power to the world with reliability, 
                compliance, and efficiency.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="glass-dark rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover-lift">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-white/20 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/90 leading-relaxed">{reason}</p>
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

export default CompanyStrengths;