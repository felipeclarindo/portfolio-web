import { FooterLinkProps } from "@/types/ui";
import Link from "next/link";


export default function FooterLink({ href, text }: FooterLinkProps) {
  return (
    <li className="group">
      <Link
        href={href}
        className="
          relative inline-flex items-center
          pl-4
          transition-all duration-200
          text-gray-400
          group-hover:text-[var(--primary-color)]
          group-focus-within:text-[var(--primary-color)]
          group-hover:translate-x-1

          before:content-['▸']
          before:absolute before:left-0
          before:opacity-0
          before:-translate-x-1
          before:text-[var(--primary-color)]
          before:transition-all before:duration-200

          group-hover:before:opacity-100
          group-hover:before:translate-x-0
        "
      >
        {text}
      </Link>
    </li>
  );
}
