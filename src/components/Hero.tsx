import { Button } from "@/components/ui/button";
import { Globe, Award, Factory, Users, ChevronDown, Play } from "lucide-react";
import heroImage from "@/assets/hero-background-neutral.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Enhanced Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sun Smit Dye Chem manufacturing facility"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 left-16 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center glass-dark px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in">
            <Award className="h-4 w-4 mr-2 text-accent" />
            25+ Years of Chemical Manufacturing Excellence
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
            Delivering Chemicals with
            <span className="block text-gradient mt-2">Trust & Innovation</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-6 font-light max-w-3xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Premium chemical solutions backed by three decades of expertise and cutting-edge manufacturing
          </p>
          
          {/* Description */}
          <p className="text-lg text-white/75 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            From our state-of-the-art facilities in Ahmedabad, Ankleshwar, and Ghaziabad, we deliver 
            275,000+ L/day of premium chemicals with unwavering quality and reliability.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold shadow-primary hover:shadow-glow transition-smooth group">
              Download Company Profile
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="glass text-center p-6 rounded-2xl hover-lift group">
              <Award className="h-10 w-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">30+</div>
              <div className="text-sm text-white/80 font-medium">Years Legacy</div>
            </div>
            
            <div className="glass text-center p-6 rounded-2xl hover-lift group">
              <Factory className="h-10 w-10 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">275K</div>
              <div className="text-sm text-white/80 font-medium">L/day Production</div>
            </div>
            
            <div className="glass text-center p-6 rounded-2xl hover-lift group">
              <Globe className="h-10 w-10 text-primary-glow mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-2">3</div>
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

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="glass-dark w-8 h-12 rounded-full flex justify-center items-start pt-3 cursor-pointer group hover:bg-white/20 transition-smooth">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse group-hover:bg-accent"></div>
        </div>
        <p className="text-white/60 text-xs mt-2 text-center font-medium">Scroll to explore</p>
      </div>

      {/* Side Navigation Dots */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4">
        {['Home', 'About', 'Products', 'Manufacturing'].map((item, index) => (
          <div key={item} className="group flex items-center">
            <div className="w-3 h-3 rounded-full bg-white/30 group-hover:bg-white transition-smooth cursor-pointer"></div>
            <span className="text-white/60 text-sm ml-4 opacity-0 group-hover:opacity-100 transition-smooth">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;