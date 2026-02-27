import { InfoBlockProps } from "@/types/pages";


export default function InfoBlock({
  title,
  content,
}: Readonly<InfoBlockProps>) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-[var(--brand-primary)]">
        {title}
      </h3>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        {content}
      </p>
    </div>
  );
}
