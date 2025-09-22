import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award, Leaf } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About SunSmit Dyechem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Established in 1996, SunSmit Dyechem Pvt. Ltd. has built over three decades of leadership in chemical manufacturing and supplying, specializing in Sodium Hypochlorite, Bleaching Powder, Speciality chemical and Intermediates with strong domestic and global presence. </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Our Legacy</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Established Leadership:</strong> Over three decades of operations in chemical manufacturing since 1996
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Licensed Manufacturing:</strong> Holds Manufacturing Drug License for sodium hypochlorite for water purification and IEC certificate for exporting
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Strategic Locations:</strong> Ankleshwar plant and Dahej plant in Gujarat, India
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Global Reach:</strong> Expanding our proven expertise in specialty chemicals and intermediates across international markets
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center shadow-card">
              <CardContent className="p-6">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Headquarters</h4>
                <p className="text-sm text-muted-foreground">Ahmedabad, Gujarat</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Expert Team</h4>
                <p className="text-sm text-muted-foreground">Team of Chemical & Supply Chain Experts</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Certificchange to ations</h4>
                <p className="text-sm text-muted-foreground">ISO 9001 & 14001</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardContent className="p-6">
                <Leaf className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Sustainability</h4>
                <p className="text-sm text-muted-foreground">Environment Focused</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg md:text-xl font-light max-w-4xl mx-auto">
            "To be a global leader in chemical exports, delivering sustainable solutions worldwide 
            while maintaining the highest standards of quality, safety, and environmental responsibility."
          </p>
        </div>
      </div>
    </section>;
};
export default About;