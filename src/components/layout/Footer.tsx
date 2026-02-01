"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";
import FooterLink from "./FooterLink";

export default function Footer() {
  const { translate } = useLanguage();

  return (
    <footer
      className="
        relative z-[999] isolation-isolate
        w-full
        bg-black/60 backdrop-blur-md
        border-t border-green-500/20
        font-mono text-sm text-gray-400
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* LINKS RÁPIDOS */}
        <div>
          <h4 className="mb-4 text-green-400 tracking-wider text-xs">
            {">"} Links rápidos
          </h4>
          <ul className="space-y-2">
            <FooterLink href="/" text={translate("footer.sectionOne.first")} />
            <FooterLink
              href="/projects"
              text={translate("footer.sectionOne.second")}
            />
            <FooterLink
              href="/resume"
              text={translate("footer.sectionOne.third")}
            />
            <FooterLink
              href="/contact"
              text={translate("footer.sectionOne.fourth")}
            />
          </ul>
        </div>

        {/* Termos */}
        <div>
          <h4 className="mb-4 text-green-400 tracking-wider text-xs">
            {">"} Termos
          </h4>
          <ul className="space-y-2">
            <FooterLink
              href="/terms-service"
              text={translate("footer.sectionTwo.first")}
            />
            <FooterLink
              href="/terms-use"
              text={translate("footer.sectionTwo.second")}
            />
            <FooterLink
              href="/polity-privacy"
              text={translate("footer.sectionTwo.third")}
            />
            <FooterLink
              href="/polity-cookies"
              text={translate("footer.sectionTwo.fourth")}
            />
          </ul>
        </div>

        {/* BRAND + SOCIAL */}
        <div className="flex flex-col text-center items-center justify-center md:items-end gap-6 m-auto">
          <Image
            src="/images/logo.png"
            alt="Felipe Clarindo logo"
            width={48}
            height={48}
            className="opacity-90"
          />

          <div className="flex gap-4">
            <a
              href="https://github.com/felipeclarindo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="
                p-2 rounded-md
                border border-green-500/20
                text-green-400
                hover:text-black hover:bg-green-400
                transition-all duration-300
              "
            >
              <Github size={18} />
            </a>

            <a
              href="https://instagram.com/lipethecoder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                p-2 rounded-md
                border border-green-500/20
                text-green-400
                hover:text-black hover:bg-green-400
                transition-all duration-300
              "
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://linkedin.com/in/felipeclarindo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                p-2 rounded-md
                border border-green-500/20
                text-green-400
                hover:text-black hover:bg-green-400
                transition-all duration-300
              "
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center py-4 border-t border-green-500/10 text-xs text-gray-500">
        © {new Date().getFullYear()} Felipe Clarindo. All rights reserved.
      </div>
    </footer>
  );
}
