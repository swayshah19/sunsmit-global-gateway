import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Manufacturing", href: "#manufacturing" },
    { label: "Domestic Markets", href: "#domestic" },
    { label: "Export Markets", href: "#markets" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary">
                Sun Smit Dye Chem
              </h1>
              <p className="text-xs text-muted-foreground">Pvt. Ltd.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>export02@sunsmitdyechem.com</span>
            </div>
            <Button variant="premium" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block py-2 text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border">
                <Button variant="premium" className="w-full">
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;