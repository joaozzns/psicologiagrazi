
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, gostaria de agendar uma sessão.");
    const phoneNumber = "5521989391820";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Fale conosco
        </span>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
