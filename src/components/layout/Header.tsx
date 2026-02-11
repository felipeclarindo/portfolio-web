"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggleButton from "../navigation/ThemeToggleButton";
import LanguageToggleButton from "../navigation/LanguageToggleButton";
import { MenuItemProps } from "@/types/navigation";
import { useEffect, useState } from "react";
import { hoverGlitch } from "@/lib/motion/motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { translate } = useLanguage();
  const [open, setOpen] = useState(false);

  const navItems: MenuItemProps[] = [
    { name: translate("header.home"), path: "/" },
    { name: translate("header.projects"), path: "/projects" },
    { name: translate("header.resume"), path: "/resume" },
    { name: translate("header.services"), path: "/services" },
    { name: translate("header.contact"), path: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className="
          fixed top-0 left-0 w-full
          z-[9999]
          backdrop-blur-xl
          border-b border-[var(--border-primary)]
          transition-colors
        "
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Felipe Clarindo Logo"
              width={40}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-mono text-[var(--text-secondary)]">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={hoverGlitch}
                className="relative group"
              >
                <Link
                  href={item.path}
                  className="
                    relative z-10
                    transition-colors
                    hover:text-[var(--brand-primary)]
                  "
                >
                  {item.name}
                </Link>

                {/* Glitch Bars */}
                <div className="glitch-bars">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span key={i} />
                  ))}
                </div>
              </motion.div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <LanguageToggleButton />
              <ThemeToggleButton />
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-[var(--text-primary)]"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            fixed inset-0 z-[10000]
            bg-[var(--bg-primary)] 
            flex flex-col
            transition-colors
          "
        >
          {/* Close */}
          <div className="flex justify-end px-6 py-4">
            <button
              onClick={() => setOpen(false)}
              className="text-[var(--brand-primary)]"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Toggles */}
          <div className="flex justify-center gap-4 pb-6">
            <LanguageToggleButton />
            <ThemeToggleButton />
          </div>

          {/* Mobile Nav */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-lg font-mono text-[var(--text-primary)]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setOpen(false)}
                className="hover:text-[var(--brand-primary)] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
