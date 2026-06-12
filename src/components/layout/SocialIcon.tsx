import { SocialIconProps } from "@/types/ui";

export default function SocialIcon({
  href,
  label,
  children,
}: Readonly<SocialIconProps>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        p-2 rounded-md
        border border-[var(--border-primary)]
        bg-[var(--bg-tertiary)]
        text-[var(--text-secondary)]
        hover:bg-[var(--brand-primary)]
        hover:text-white
        transition-all duration-300
      "
    >
      {children}
    </a>
  );
}
