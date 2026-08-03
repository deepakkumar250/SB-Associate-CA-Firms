import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    const phoneNumber = '917008679523';
    const message = 'Hello SB Associate, I would like to know more about your Chartered Accountant services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="whatsapp-btn flex items-center justify-center text-white"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} className="fill-white/10" />
    </button>
  );
}
