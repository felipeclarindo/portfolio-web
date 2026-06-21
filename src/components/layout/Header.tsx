"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { useLanguage } from "@/contexts/LanguageContext";
import { MenuItemProps } from "@/types/navigation";

import Logo from "./Logo";
import ThemeToggleButton from "../navigation/ThemeToggleButton";
import LanguageToggleButton from "../navigation/LanguageToggleButton";

const GLITCH_BARS = [0, 1, 2, 3, 4, 5];

export default function Header() {
  const { translate } = useLanguage();
  const [open, setOpen] = useState(false);

  const navItems = useMemo<MenuItemProps[]>(
    () => [
      { name: translate("header.home"), path: "/" },
      { name: translate("header.projects"), path: "/projects" },
      { name: translate("header.services"), path: "/services" },
    ],
    [translate],
  );

  const openMenu = useCallback(() => {
    setOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <header
        className="
          fixed top-0 left-0 w-full
          z-9999
          backdrop-blur-xl
          border-b border-(--border-primary)
          transition-colors
        "
      >
        <div className="max-w-7xl lg:mx-auto mx-4 flex items-center justify-between py-6">
          <Logo height={45} width={45} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-mono text-(--text-secondary)">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  href={item.path}
                  className="
                    relative z-10
                    transition-colors duration-300
                    hover:text-(--brand-primary)
                  "
                >
                  {item.name}
                </Link>

                <div className="glitch-bars">
                  {GLITCH_BARS.map((bar) => (
                    <span key={bar} />
                  ))}
                </div>
              </div>
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
              onClick={openMenu}
              className="md:hidden text-(--text-primary)"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-10000
          bg-(--bg-tertiary)
          flex flex-col
          transition-all duration-300 ease-in-out
          ${
            open
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        {/* Close */}
        <div className="flex justify-end px-6 py-4">
          <button
            onClick={closeMenu}
            className="text-(--brand-primary)"
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

        {/* Mobile Navigation */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-lg font-mono text-(--text-primary)">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={closeMenu}
              className="
                transition-colors duration-300
                hover:text-(--brand-primary)
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
