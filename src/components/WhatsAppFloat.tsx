import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "9825030377";
  const message = "Hello! I'm interested in your chemical products and would like to know more.";
  
  const handleWhatsAppClick = () => {
    const fullNumber = `91${phoneNumber}`;
    const encoded = encodeURIComponent(message);
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${fullNumber}?text=${encoded}`
      : `https://web.whatsapp.com/send?phone=${fullNumber}&text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppFloat;