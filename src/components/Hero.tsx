import { Button } from "@/components/ui/button";
import { Globe, Award, Factory, Users } from "lucide-react";
import heroImage from "@/assets/hero-background-new.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sun Smit Dye Chem manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            From Gujarat to the Globe
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Supplying Chemicals with Trust, Quality & Scale
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            Over two decades of chemical manufacturing excellence with three strategic plants producing 
            275,000+ L/day Sodium Hypochlorite and 10 TPD Stable Bleaching Powder.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="shadow-corporate">
              Download Company Profile
            </Button>
            <Button variant="outline-hero" size="lg">
              Request Quote
            </Button>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-sm text-white/80">Years Legacy</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Factory className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">275K</div>
                <div className="text-sm text-white/80">L/day Capacity</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Globe className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-sm text-white/80">Manufacturing Plants</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-2">
                <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">10</div>
                <div className="text-sm text-white/80">TPD Bleaching Powder</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;