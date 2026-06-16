"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, Instagram } from "lucide-react";
import FooterLink from "./FooterLink";
import SocialIcon from "./SocialIcon";
import Logo from "./Logo";

export default function Footer() {
  const { translate } = useLanguage();

  return (
    <footer
      className="
        relative z-999
        w-full
        border-t border-(--border-primary)]
        font-mono text-sm
        transition-colors
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:grid md:grid-cols-3 gap-8">
        {/* LINKS RÁPIDOS */}
        <div className="sm:flex sm:flex-col sm:items-start text-center sm:text-left">
          <h4 className="mb-4 text-(--brand-primary) tracking-wider text-xs">
            {">"} Links
          </h4>
          <ul className="space-y-2 text-(--text-secondary)">
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
        <div className="sm:flex sm:flex-col sm:items-start text-center">
          <h4 className="mb-4 text-(--brand-primary) tracking-wider text-xs">
            {">"} {translate("footer.terms")}
          </h4>
          <ul className="space-y-2 text-(--text-secondary) sm:text-left">
            <FooterLink
              href="/terms-of-service"
              text={translate("footer.sectionTwo.first")}
            />
            <FooterLink
              href="/terms-of-use"
              text={translate("footer.sectionTwo.second")}
            />
            <FooterLink
              href="/privacy-policy"
              text={translate("footer.sectionTwo.third")}
            />
            <FooterLink
              href="/cookies-policy"
              text={translate("footer.sectionTwo.fourth")}
            />
          </ul>
        </div>

        {/* BRAND + SOCIAL */}
        <div className="flex flex-col text-center items-center justify-center gap-6 mx-auto mb-2">
          <Logo height={68} width={68} />

          <div className="flex gap-4">
            <SocialIcon href="https://github.com/felipeclarindo" label="Github">
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
      <div className="text-center py-4 border-t border-(--border-primary)] text-xs text-(--text-muted)]">
        © {new Date().getFullYear()} Felipe Clarindo. All rights reserved.
      </div>
    </footer>
  );
}
