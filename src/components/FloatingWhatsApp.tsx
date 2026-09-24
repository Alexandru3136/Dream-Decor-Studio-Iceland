import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp({ href, label }: { href: string; label: string }) {
  return (
    <a
      className="floating-whatsapp"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
