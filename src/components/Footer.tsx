import { MapPin, Mail, Phone, Globe, Award } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sun Smit Dye Chem Pvt. Ltd.</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Leading chemical exporters with 30+ years of expertise in manufacturing and 
              supplying high-quality chemicals to global markets.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Globe className="h-4 w-4 text-secondary" />
                <span>Global Presence</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Award className="h-4 w-4 text-secondary" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-secondary transition-colors">Products</a></li>
              <li><a href="#manufacturing" className="hover:text-secondary transition-colors">Manufacturing</a></li>
              <li><a href="#markets" className="hover:text-secondary transition-colors">Export Markets</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p>707 Mauryansh Ellanza,</p>
                  <p>Shymal Cross Roads,</p>
                  <p>Gujarat – 380015</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>shashwat@sunsmitdyechem.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+91 7069889770</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 Sun Smit Dye Chem Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Quality Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;