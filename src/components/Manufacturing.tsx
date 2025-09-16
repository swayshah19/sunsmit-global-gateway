import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, FlaskConical, Microscope, ShieldCheck, Recycle, Users } from "lucide-react";

const Manufacturing = () => {
  const capabilities = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Advanced Reactors",
      description: "State-of-the-art chemical reactors with precise temperature and pressure control",
    },
    {
      icon: <FlaskConical className="h-8 w-8" />,
      title: "Distillation Units",
      description: "High-efficiency distillation systems for product purification and separation",
    },
    {
      icon: <Recycle className="h-8 w-8" />,
      title: "Drying Systems",
      description: "Modern drying equipment ensuring optimal moisture content and product stability",
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Quality Control Labs",
      description: "In-house laboratories with HPLC, GC, FTIR, KF, and wet analysis capabilities",
    },
  ];

  const certifications = [
    { name: "ISO 9001:2015", type: "Quality Management" },
    { name: "ISO 14001:2015", type: "Environmental Management" },
    { name: "Water Purification License", type: "Chemical Manufacturing" },
    { name: "Export License", type: "International Trade" },
  ];

  return (
    <section id="manufacturing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Manufacturing Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our state-of-the-art manufacturing facilities across Ahmedabad, Ankleshwar, and Ghaziabad 
            combine advanced technology with stringent quality controls to deliver world-class chemical products.
          </p>
        </div>

        {/* Manufacturing Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-corporate transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  {capability.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-3">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Manufacturing Facilities */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Three Strategic Manufacturing Locations</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Ahmedabad Plant</div>
              <div className="text-white/90 mb-2">100,000 L/day</div>
              <div className="text-sm text-white/80">Sodium Hypochlorite for Textiles, Starch & Paper Industries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Ankleshwar Plant</div>
              <div className="text-white/90 mb-2">100,000 L/day + 10 TPD</div>
              <div className="text-sm text-white/80">Sun Chlorex + Stable Bleaching Powder for Pharma, Pesticides, Power Plants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Ghaziabad Plant</div>
              <div className="text-white/90 mb-2">75,000 L/day</div>
              <div className="text-sm text-white/80">Delhi NCR Supply Hub for Northern Region</div>
            </div>
          </div>
        </div>

        {/* Quality & Compliance */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Quality & Compliance</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Stringent Testing Protocols</h4>
                  <p className="text-muted-foreground">Every batch undergoes comprehensive testing using advanced analytical instruments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Team</h4>
                  <p className="text-muted-foreground">50+ chemical engineers and specialists ensuring product excellence</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Recycle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Environmental Focus</h4>
                  <p className="text-muted-foreground">Sustainable practices and EHS compliance across all operations</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Certifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">{cert.name}</Badge>
                    <p className="text-sm text-muted-foreground">{cert.type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;