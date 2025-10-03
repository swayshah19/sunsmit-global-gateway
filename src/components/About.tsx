import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Award, Leaf, Calendar, Factory, MapPin, Globe, Shield, Zap, CheckCircle } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About SunSmit Dyechem </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-left md:text-center">Established in 1996, SunSmit Dyechem Pvt. Ltd. is a trusted manufacturer of sodium hypochlorite in India and a leading exporter of specialty chemicals from Gujarat, backed by over three decades of expertise. We specialize in sodium hypochlorite, bulk and commodity chemicals, specialty chemicals, intermediates, and custom chemical formulations, with a strong presence across domestic markets and international regions including Africa, Europe, and Asia.</p>
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
                  <strong className="text-foreground">Strategic Locations:</strong> Ankleshwar plant and Dahej plant in Gujarat, India
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Global Reach:</strong> Expanding our proven expertise in specialty chemicals and intermediates across international markets
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Trusted Partnerships:</strong> Long-standing collaborations with clients across speciality chemicals, bulk chemicals, and intermediates
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Strong Supply Chain:</strong> Integrated logistics for smooth domestic distribution and international exports
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
                <h4 className="font-semibold text-foreground mb-2">Compliant</h4>
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

        {/* Our Strengths Section */}
        <div className="mb-16">
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

          {/* Key Strengths Grid - Vertical on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-premium hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                  Founded 1996
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">30+ Years Legacy</h3>
                <p className="text-muted-foreground leading-relaxed">Proven expertise since 1996</p>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                  High Capacity
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">14,000 MT/month Capacity</h3>
                <p className="text-muted-foreground leading-relaxed">High-scale chemical production</p>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                  Gujarat Based
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">2 State-of-the-Art Plants</h3>
                <p className="text-muted-foreground leading-relaxed">Ankleshwar & Dahej, Gujarat, India</p>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                  ISO Compliant
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground leading-relaxed">ISO 9001 & ISO 14001 compliant</p>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                  Export Ready
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">Export Readiness</h3>
                <p className="text-muted-foreground leading-relaxed">IEC-compliant, drug manufacturing license</p>
              </CardContent>
            </Card>

            <Card className="card-premium hover-lift group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                  Quality First
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">Quality Control</h3>
                <p className="text-muted-foreground leading-relaxed">In-house labs with MSDS & COAs</p>
              </CardContent>
            </Card>
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
                <div className="glass-dark rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover-lift">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-white/20 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/90 leading-relaxed">Proven Legacy – 30+ years in chemical manufacturing</p>
                  </div>
                </div>
                <div className="glass-dark rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover-lift">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-white/20 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/90 leading-relaxed">Strategic Location – Gujarat-based, India's chemical hub</p>
                  </div>
                </div>
                <div className="glass-dark rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover-lift">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-white/20 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/90 leading-relaxed">Global Reach – Exports to Europe, Africa, Asia, expanding to Americas</p>
                  </div>
                </div>
                <div className="glass-dark rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover-lift">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-white/20 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/90 leading-relaxed">Flexible Packaging – ISO tanks, IBCs, HDPE drums, bulk bags</p>
                  </div>
                </div>
                <div className="glass-dark rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover-lift lg:col-span-2">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-white/20 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-white/90 leading-relaxed">Quality Assurance – In-house labs (HPLC, GC, FTIR, KF) with MSDS & COAs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg md:text-xl font-light max-w-4xl mx-auto">"To be a global leader in chemicals, delivering sustainable solutions worldwide while maintaining the highest standards of quality, safety, and environmental responsibility with unwavering benchmark quality ."</p>
        </div>
      </div>
    </section>;
};
export default About;