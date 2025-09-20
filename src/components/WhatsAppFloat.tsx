import { MessageCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const WhatsAppFloat = () => {
  const phoneNumber = "9825030377";
  const message = "Hello! I'm interested in your chemical products and would like to know more.";
  
  const handleWhatsAppClick = () => {
    const fullNumber = `91${phoneNumber}`;
    const encoded = encodeURIComponent(message);

    const appUrl = `whatsapp://send?phone=${fullNumber}&text=${encoded}`;
    const webUrl = `https://wa.me/${fullNumber}?text=${encoded}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    let fallbackTriggered = false;

    const fallback = async () => {
      if (fallbackTriggered) return;
      fallbackTriggered = true;

      if (isMobile) {
        window.location.href = webUrl;
        return;
      }

      try {
        await navigator.clipboard?.writeText(`WhatsApp: +${fullNumber}\n${message}`);
        toast({
          title: "Can't open WhatsApp Web",
          description: `We copied our number. Open WhatsApp and paste: +${fullNumber}`,
        });
      } catch {
        toast({
          title: "Can't open WhatsApp Web",
          description: `Please message us at +${fullNumber}`,
        });
      }
    };

    // Attempt to open the WhatsApp app via deep link
    const start = Date.now();
    window.location.href = appUrl;

    // If nothing happens quickly, use fallback
    setTimeout(() => {
      if (Date.now() - start < 1500) {
        fallback();
      }
    }, 1200);
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