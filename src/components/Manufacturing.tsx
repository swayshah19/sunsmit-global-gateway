import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, FlaskConical, Microscope, ShieldCheck, Recycle, Users, TestTube, Building2, Warehouse, CheckCircle } from "lucide-react";
const Manufacturing = () => {
  const certifications = [{
    name: "ISO 9001:2015",
    type: "Quality Management"
  }, {
    name: "ISO 14001:2015",
    type: "Environmental Management"
  }, {
    name: "Water Purification License",
    type: "Chemical Manufacturing"
  }, {
    name: "Export License",
    type: "International Trade"
  }];
  const labEquipment = ["HPLC", "GC", "FTIR", "Karl Fischer", "Wet-analysis facilities"];
  const qualityFeatures = ["In-process inspection at every production stage", "Batch-level traceability with documented COAs", "Advanced testing facilities for purity and consistency", "Compliance with domestic and international standards"];
  const customServices = ["Raw material selection and optimization", "Application and process compatibility testing", "Regulatory and technical documentation support"];
  const facilityFeatures = ["Custom chemical blending & packaging services", "Just-in-time stocking for fast dispatch", "100,000+ sq.ft. of production & storage capacity"];
  return <section id="manufacturing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Infrastructure </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            At SunSmit Dye Chem Pvt. Ltd., our infrastructure is designed to combine scale, safety, and innovation. 
            With multiple plants across Gujarat, advanced laboratories, and multipurpose facilities, we provide 
            world-class manufacturing, blending, and packaging solutions to our customers.
          </p>
        </div>

        {/* Quality Control Laboratory */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <CheckCircle className="h-8 w-8 text-green-500 mr-4" />
            <h3 className="text-2xl font-bold text-foreground">Quality Control Laboratory</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">R&D Centre</h4>
              <p className="text-muted-foreground mb-6">
                Our R&D centre drives innovation in chlor-alkali chemistry, bleaching agents, and specialty intermediates. 
                Equipped with modern laboratories, our scientists and chemical engineers improve existing processes, 
                and support customer-specific needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TestTube className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Analytical Lab</h5>
                    <p className="text-sm text-muted-foreground mb-2">Equipped with:</p>
                    <div className="flex flex-wrap gap-2">
                      {labEquipment.map((equipment, index) => <Badge key={index} variant="outline" className="text-xs">
                          {equipment}
                        </Badge>)}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Building2 className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Application Development Support</h5>
                    <p className="text-sm text-muted-foreground">Technical studies, process improvements, and scale-up feasibility</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-foreground mb-1">Collaboration with Experts</h5>
                    <p className="text-sm text-muted-foreground">Partnerships with reputed scientists and technical institutions for breakthrough innovations</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Quality Assurance</h4>
              <p className="text-muted-foreground mb-6">
                At SunSmit, quality is embedded in every stage of the manufacturing process. 
                From raw material receipt to final shipment, every product is tested for purity, consistency, and safety.
              </p>
              
              <div className="space-y-3">
                {qualityFeatures.map((feature, index) => <div key={index} className="flex items-start space-x-3">
                    <ShieldCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{feature}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>

        {/* Customer Solutions */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Tailored Chemical Solutions</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We work hand-in-hand with customers to deliver tailored chemical solutions. 
              With a team of skilled chemists, engineers, and formulators, SunSmit ensures 
              that every solution is industry-ready and customer-driven.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {customServices.map((service, index) => <div key={index} className="text-center">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="font-medium">{service}</p>
                </div>
              </div>)}
          </div>
        </div>

        {/* Blending, Repacking & Warehousing */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Warehouse className="h-8 w-8 text-secondary mr-4" />
            <h3 className="text-2xl font-bold text-foreground">Blending, Repacking & Warehousing</h3>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-4xl">
            Our multipurpose facility and regional units are designed for scalable chemical operations. 
            Together, they cover over 100,000+ sq.ft. of production & storage capacity.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6">Key Features</h4>
              <div className="space-y-4">
                {facilityFeatures.map((feature, index) => <div key={index} className="flex items-start space-x-3">
                    <Factory className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>)}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6">Certifications</h4>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => <Card key={index} className="shadow-card">
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2">{cert.name}</Badge>
                      <p className="text-sm text-muted-foreground">{cert.type}</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Manufacturing;