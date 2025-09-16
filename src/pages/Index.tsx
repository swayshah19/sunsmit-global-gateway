import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Manufacturing from "@/components/Manufacturing";
import ExportMarkets from "@/components/ExportMarkets";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Manufacturing />
      <ExportMarkets />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
