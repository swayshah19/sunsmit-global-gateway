import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Ship, Truck, Plane, Award, ArrowRight, Target, CheckCircle, Building2, Droplets, Zap, Factory, ShieldCheck, Wheat, Beaker, FlaskConical, Leaf, Shield, Settings, Package } from "lucide-react";
import ExportMap from "./ExportMap";
const Markets = () => {
  // Export Product Categories
  const exportCategories = [{
    title: "Inorganic Chemicals",
    icon: <Beaker className="h-8 w-8" />,
    color: "text-blue-600",
    products: ["Soda Ash (Sodium Carbonate)", "Caustic Soda (NaOH)", "Alumina / Aluminium Hydroxide", "Titanium Dioxide", "Hydrogen Peroxide"],
    advantage: "Stable supply base, globally competitive pricing, and proximity to Dahej and Mundra ports"
  }, {
    title: "Organic Chemicals",
    icon: <FlaskConical className="h-8 w-8" />,
    color: "text-green-600",
    products: ["Acetic Acid & Derivatives", "Ethanol / Industrial Alcohols", "Phenols & Aniline Derivatives", "Industrial Solvents", "Specialty Organics"],
    advantage: "Applications: Pharmaceuticals, coatings, resins, plastics, adhesives"
  }, {
    title: "Dyes & Dye Intermediates",
    icon: <Droplets className="h-8 w-8" />,
    color: "text-purple-600",
    products: ["Reactive Dyes", "Acid Dyes", "Azo Intermediates"],
    advantage: "India supplies ~16% of global dyestuffs and exports to 90+ countries"
  }, {
    title: "Agro-Chemicals",
    icon: <Wheat className="h-8 w-8" />,
    color: "text-amber-600",
    products: ["Technical-grade Pesticides", "Formulations (insecticides, herbicides, fungicides)"],
    advantage: "India is one of the world's largest producers of agro-chemicals"
  }, {
    title: "Plastics & Polymers",
    icon: <Package className="h-8 w-8" />,
    color: "text-indigo-600",
    products: ["Polyethylene (PE) & Polypropylene (PP) derivatives", "Films & Packaging Materials", "Synthetic Rubber & Filaments"],
    advantage: "Applications: FMCG, industrial packaging, automotive, textiles"
  }, {
    title: "Pharmaceuticals & Intermediates",
    icon: <ShieldCheck className="h-8 w-8" />,
    color: "text-red-600",
    products: ["APIs (Active Pharmaceutical Ingredients)", "Bulk Drug Intermediates", "Specialty Fine Chemicals for pharma"],
    advantage: "India's pharma ecosystem is export-driven, with world-class regulatory compliance (US FDA, EU GMP)"
  }];

  // Why Choose SunSmit
  const whyChooseUs = [{
    title: "Proven Legacy",
    description: "30 years of chemical manufacturing experience",
    icon: <Award className="h-6 w-6" />
  }, {
    title: "Strategic Location",
    description: "Gujarat-based operations with easy access to Dahej & Mundra ports",
    icon: <MapPin className="h-6 w-6" />
  }, {
    title: "Scale & Network",
    description: "Partnerships across India's largest chemical clusters",
    icon: <Globe className="h-6 w-6" />
  }, {
    title: "Quality Assurance",
    description: "ISO-compliant, in-house testing labs (HPLC, GC, FTIR, KF)",
    icon: <Shield className="h-6 w-6" />
  }, {
    title: "Flexible Packaging",
    description: "ISO tanks, IBCs, HDPE drums, carboys, bulk bags",
    icon: <Package className="h-6 w-6" />
  }, {
    title: "Global Reach",
    description: "Active exports to Europe, Africa, Asia, expanding to Americas",
    icon: <Target className="h-6 w-6" />
  }];

  // Export Infrastructure Stats
  const infrastructureStats = [{
    number: "13000",
    unit: "MT/Month",
    label: "Sodium Hypochlorite"
  }, {
    number: "1000",
    unit: "MT/MONTH",
    label: "Campaign Specialty"
  }, {
    number: "Near",
    unit: "Dahej & Mundra",
    label: "Ports Location"
  }, {
    number: "Multi",
    unit: "Format",
    label: "Export Packaging"
  }];

  // Domestic Industries Data
  const industries = [{
    icon: <Droplets className="h-8 w-8" />,
    name: "Textiles",
    description: "Sodium Hypochlorite for bleaching and processing",
    products: ["Sodium Hypochlorite 12%"],
    color: "text-blue-600"
  }, {
    icon: <Wheat className="h-8 w-8" />,
    name: "Starch & Paper",
    description: "Industrial bleaching and processing solutions",
    products: ["Sodium Hypochlorite", "Bleaching Agents"],
    color: "text-amber-600"
  }, {
    icon: <ShieldCheck className="h-8 w-8" />,
    name: "Pharmaceutical",
    description: "High-purity chemicals for pharma applications",
    products: ["Stable Bleaching Powder", "Specialty Intermediates"],
    color: "text-green-600"
  }, {
    icon: <Building2 className="h-8 w-8" />,
    name: "Government Water",
    description: "Water purification for municipal supplies",
    products: ["Sodium Hypochlorite", "Calcium Hypochlorite"],
    color: "text-blue-700"
  }, {
    icon: <Zap className="h-8 w-8" />,
    name: "Power Plants",
    description: "Cooling tower treatment and disinfection",
    products: ["Stable Bleaching Powder", "Water Treatment"],
    color: "text-yellow-600"
  }, {
    icon: <Factory className="h-8 w-8" />,
    name: "Bottling & Food",
    description: "Sanitization and food processing applications",
    products: ["Food Grade Sodium Hypochlorite"],
    color: "text-green-700"
  }];
  const distributionChannels = [{
    icon: <Ship className="h-10 w-10" />,
    title: "Sea Freight",
    description: "Major shipping routes to global ports with reliable container services",
    color: "text-primary"
  }, {
    icon: <Truck className="h-10 w-10" />,
    title: "Land Transport",
    description: "Pan-India distribution network with specialized chemical transportation",
    color: "text-secondary"
  }, {
    icon: <Plane className="h-10 w-10" />,
    title: "Air Cargo",
    description: "Express delivery solutions for urgent chemical requirements worldwide",
    color: "text-accent"
  }];
  const globalStats = [{
    number: "30+",
    label: "Countries Served",
    icon: <Globe className="h-6 w-6" />
  }, {
    number: "100+",
    label: "Export Shipments/Year",
    icon: <Ship className="h-6 w-6" />
  }, {
    number: "95%",
    label: "On-time Delivery",
    icon: <CheckCircle className="h-6 w-6" />
  }, {
    number: "24/7",
    label: "Customer Support",
    icon: <Target className="h-6 w-6" />
  }];
  return <section id="markets" className="py-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '3s'
    }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">🌍 Export  Services</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            For nearly three decades, SunSmit Dye Chem Pvt. Ltd. has been a trusted manufacturer of sodium hypochlorite in India. 
            Building on our legacy of reliability, technical strength, and quality assurance, we are now expanding into the 
            <span className="text-primary font-semibold"> global export and distribution of bulk and specialty chemicals</span>.
          </p>
        </div>

        {/* International Market (Globe) */}
        <div className="mb-20">
          <ExportMap />
        </div>

        {/* Introduction Section */}
        <div className="text-center mb-20">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With strong roots in Gujarat's chemical manufacturing hub and close partnerships with leading producers across India, 
              SunSmit offers a diverse product basket, competitive pricing, and efficient supply chain solutions for international buyers.
            </p>
            <div className="bg-background/50 rounded-xl p-6">
              <p className="text-primary font-semibold text-xl">
                India has become a global powerhouse in chemical manufacturing, with Gujarat alone contributing nearly half of the nation's exports.
              </p>
            </div>
          </div>
        </div>

        {/* 3. What We Export - Detailed Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">🔹 What We Export</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              SunSmit leverages India's chemical manufacturing ecosystem to bring high-demand, export-ready chemicals to global markets
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {exportCategories.map((category, index) => <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300 hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`${category.color}`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Products:</h5>
                      <div className="space-y-1">
                        {category.products.map((product, idx) => <div key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{product}</span>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* 4. Why Choose SunSmit */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">🔹 Why Choose SunSmit DyeChem</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => <Card key={index} className="text-center shadow-card hover:shadow-corporate transition-all duration-300 hover-lift">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* 5. Export-Ready Infrastructure */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">🔹 Export-Ready Infrastructure</h3>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-8">
              {infrastructureStats.map((stat, index) => <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-secondary font-medium mb-2">{stat.unit}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>)}
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background/50 rounded-xl p-6">
                <h5 className="font-bold text-foreground mb-3">Manufacturing Backbone</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 13000 MT/month Sodium Hypochlorite • 1000 MT/month Campaign Specialty Chemical</li>
                  <li>• Dahej warehouse near Dahej & Mundra Ports</li>
                  <li>• Multi format export packaging</li>
                </ul>
              </div>
              
              <div className="bg-background/50 rounded-xl p-6">
                <h5 className="font-bold text-foreground mb-3">Export Packaging</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ISO tanks & IBCs</li>
                  <li>• HDPE drums & carboys</li>
                  <li>• LDPE-lined bulk bags</li>
                </ul>
              </div>
              
              <div className="bg-background/50 rounded-xl p-6">
                <h5 className="font-bold text-foreground mb-3">Compliance</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• MSDS & COAs provided</li>
                  <li>• Global regulatory certifications</li>
                  <li>• Port logistics partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Distribution Network */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Distribution Network
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions ensuring seamless delivery across global markets
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {distributionChannels.map((channel, index) => <Card key={index} className="text-center group hover-lift">
                <CardContent className="p-8">
                  <div className={`${channel.color} mb-6 flex justify-center group-hover:scale-110 transition-transform`}>
                    {channel.icon}
                  </div>
                  <h5 className="font-bold text-foreground mb-3 text-lg">{channel.title}</h5>
                  <p className="text-muted-foreground leading-relaxed">{channel.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* 7. Domestic Market Strengths */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-8">Domestic Market Leadership</h3>
          </div>

          {/* Industries Served */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {industries.map((industry, index) => <Card key={index} className="shadow-card hover:shadow-corporate transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`${industry.color} mb-4`}>
                    {industry.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{industry.name}</h4>
                </CardContent>
              </Card>)}
          </div>

          {/* Domestic Market Strengths */}
          <div className="bg-background/50 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-center text-foreground mb-8">Domestic Market Strengths</h4>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Pan-India</div>
                <div className="text-muted-foreground">Distribution Network</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-muted-foreground">Supply Chain</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">MSDS</div>
                <div className="text-muted-foreground">Compliance Reports</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">Licensed</div>
                <div className="text-muted-foreground">Manufacturing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Markets;