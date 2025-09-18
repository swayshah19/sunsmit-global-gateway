import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Manufacturing from "@/components/Manufacturing";
import DomesticMarkets from "@/components/DomesticMarkets";
import ExportMarkets from "@/components/ExportMarkets";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ExportMarkets />
      <DomesticMarkets />
      <Manufacturing />
      <Products />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
