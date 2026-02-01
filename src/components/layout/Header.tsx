"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggleButton from "../navigation/ThemeToggleButton";
import { MenuItemProps } from "@/types/navigation";
import { useEffect, useState } from "react";
import { hoverGlitch } from "@/lib/motion/motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems: MenuItemProps[] = [
    { name: "Home", path: "/" },
    { name: "Projetos", path: "/projects" },
    { name: "Currículo", path: "/resume" },
    { name: "Blog", path: "/blog" },
    { name: "Services", path: "/services" },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      {/* HEADER FIXO */}
      <header
        className="
          fixed top-0 left-0 w-full
          z-[9999]
          isolation-isolate
          bg-black/60 backdrop-blur-md
          border-b border-green-500/20
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-mono text-green-400">
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
      font-mono
      transition-colors
      hover:text-green-300
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
          <div className="flex items-center gap-4">
            <ThemeToggleButton />

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-green-400"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div
          className="
            fixed inset-0 z-[10000]
            bg-black/95
            backdrop-blur-sm
            flex flex-col
          "
        >
          {/* Close */}
          <div className="flex justify-end px-6 py-4">
            <button
              onClick={() => setOpen(false)}
              className="text-green-400"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-lg font-mono text-green-300">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setOpen(false)}
                className="hover:text-green-200 transition"
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
