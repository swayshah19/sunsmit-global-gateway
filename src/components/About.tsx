import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award, Leaf } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Sun Smit Dye Chem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Established in 1996, Sun Smit Dye Chem Pvt. Ltd. has built over three decades of leadership in chemical manufacturing, specializing in Sodium Hypochlorite and Bleaching Powder with strong domestic presence and growing export focus in speciality chemicals and intermediates.</p>
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
                  <strong className="text-foreground">Licensed Manufacturing:</strong> Holds Manufacturing Drug License for sodium hypochlorite for water purification
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Strategic Locations:</strong> Two manufacturing plants in Ankleshwar and Ghaziabad (Delhi NCR)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Growth Focus:</strong> Deliver speciality chemicals and intermediates
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
                <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
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