import { Button } from "@/components/ui/button";
import { Globe, Award, Factory, Users, ChevronDown, Play } from "lucide-react";
import heroImage from "@/assets/hero-background-whitish-blue.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Enhanced Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="SunSmit Dyechem manufacturing facility" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 left-16 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center glass-dark px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in">
            <Award className="h-4 w-4 mr-2 text-accent" />
            25+ Years of Chemical Manufacturing Excellence
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-accent mb-8 leading-tight animate-fade-in-up">
            30+ Years of Excellence in Chemical Manufacturing and Global Distribution
            
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-6 font-light max-w-3xl animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>Sodium hypochlorite and custom specialty chemical manufacturer and supplier with 30+ years of expertise in Gujarat, India</p>
          
          {/* Description */}
          <p className="text-lg text-white/75 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>A leading manufacturer of sodium hypochlorite, specialty chemicals, and intermediates, we operate from state-of-the-art facilities in Ankleshwar and Dahej, Gujarat. With a strong focus on quality and reliability, we supply industrial chemicals and intermediates to clients across Africa, Europe, and Asia.</p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 md:pb-0" style={{
          animationDelay: '0.8s'
        }}>
            <div className="glass text-center p-6 rounded-2xl hover-lift group">
              <Award className="h-10 w-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">30+</div>
              <div className="text-sm text-white/80 font-medium">Years Legacy</div>
            </div>
            
            <div className="glass text-center p-6 rounded-2xl hover-lift group">
              <Factory className="h-10 w-10 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">14,000</div>
              <div className="text-sm text-white/80 font-medium">MT/month</div>
            </div>
            
            <div className="glass text-center p-6 rounded-2xl hover-lift group">
              <Globe className="h-10 w-10 text-primary-glow mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-sm text-white/80 font-medium">Manufacturing Hubs</div>
            </div>
            
            <div className="glass text-center p-6 rounded-2xl hover-lift group">
              <Users className="h-10 w-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">ISO</div>
              <div className="text-sm text-white/80 font-medium">Certified Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Positioned above metrics */}
      <div className="absolute bottom-32 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-50">
        <div className="glass-dark w-8 h-12 rounded-full flex justify-center items-start pt-3 cursor-pointer group hover:bg-white/20 transition-smooth">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse group-hover:bg-accent"></div>
        </div>
        <p className="text-white/60 text-xs mt-2 text-center font-medium">Scroll to explore</p>
      </div>

      {/* Side Navigation Dots */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4">
        {['Home', 'About', 'Products', 'Manufacturing'].map((item, index) => <div key={item} className="group flex items-center">
            <div className="w-3 h-3 rounded-full bg-white/30 group-hover:bg-white transition-smooth cursor-pointer"></div>
            <span className="text-white/60 text-sm ml-4 opacity-0 group-hover:opacity-100 transition-smooth">{item}</span>
          </div>)}
      </div>
    </section>;
};
export default Hero;