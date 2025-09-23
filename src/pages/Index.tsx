import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Markets from "@/components/Markets";
import Manufacturing from "@/components/Manufacturing";
import ProductPortfolio from "@/components/ProductPortfolio";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Manufacturing />
      <Markets />
      <ProductPortfolio />
      <IndustriesWeServe />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
