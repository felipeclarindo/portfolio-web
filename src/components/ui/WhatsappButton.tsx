import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5511978590137"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-[#25D366]
        hover:scale-110
        text-white
        p-4
        rounded-full
        shadow-xl
        transition
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}