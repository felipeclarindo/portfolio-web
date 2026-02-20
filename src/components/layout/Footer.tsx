"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";
import FooterLink from "./FooterLink";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const { translate } = useLanguage();

  return (
    <footer
      className="
        relative z-[999]
        w-full
        border-t border-[var(--border-primary)]
        font-mono text-sm
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LINKS RÁPIDOS */}
        <div>
          <h4 className="mb-4 text-[var(--brand-primary)] tracking-wider text-xs">
            {">"} Links
          </h4>
          <ul className="space-y-2 text-[var(--text-secondary)]">
            <FooterLink
              href="/"
              text={translate("footer.sectionOne.first")}
              linkRapido
            />
            <FooterLink
              href="/projects"
              text={translate("footer.sectionOne.second")}
              linkRapido
            />
            <FooterLink
              href="/resume"
              text={translate("footer.sectionOne.third")}
              linkRapido
            />
            <FooterLink
              href="/contact"
              text={translate("footer.sectionOne.fourth")}
              linkRapido
            />
          </ul>
        </div>

        {/* TERMOS */}
        <div>
          <h4 className="mb-4 text-[var(--brand-primary)] tracking-wider text-xs">
            {">"} Termos
          </h4>
          <ul className="space-y-2 text-[var(--text-secondary)]">
            <FooterLink
              href="/terms-of-service"
              text={translate("footer.sectionTwo.first")}
            />
            <FooterLink
              href="/terms-of-use"
              text={translate("footer.sectionTwo.second")}
            />
            <FooterLink
              href="/privacy-polity"
              text={translate("footer.sectionTwo.third")}
            />
            <FooterLink
              href="/cookies-polity"
              text={translate("footer.sectionTwo.fourth")}
            />
          </ul>
        </div>

        {/* BRAND + SOCIAL */}
        <div className="flex flex-col text-center items-center justify-center gap-6 mx-auto">

          <Image
            src="/images/logo.png"
            alt="Felipe Clarindo logo"
            width={68}
            height={68}
            className="opacity-90"
          />

          <div className="flex gap-4">
            <SocialIcon
              href="https://github.com/felipeclarindo"
              label="Github"
            >
              <Github size={18} />
            </SocialIcon>

            <SocialIcon
              href="https://instagram.com/lipethecoder"
              label="Instagram"
            >
              <Instagram size={18} />
            </SocialIcon>

            <SocialIcon
              href="https://linkedin.com/in/felipeclarindo"
              label="LinkedIn"
            >
              <Linkedin size={18} />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center py-4 border-t border-[var(--border-primary)] text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} Felipe Clarindo. All rights reserved.
      </div>
    </footer>
  );
}
