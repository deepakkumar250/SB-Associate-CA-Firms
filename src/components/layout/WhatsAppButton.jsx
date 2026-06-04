import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    const phoneNumber = '919876543210';
    const message = 'Hello SB Associate, I am looking for financial advisory/compliance services and would like to schedule a consultation.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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
