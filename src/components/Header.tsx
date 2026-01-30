"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MenuItemsProps } from "@/types";
import ThemeToggleButton from "./buttons/ThemeToggleButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems: MenuItemsProps[] = [
    { name: "Home", path: "/" },
    { name: "Projetos", path: "/projects" },
    { name: "Curriculo", path: "/resumer" },
    { name: "Blog", path: "/blog" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header className="fixed w-full z-50 top-0 left-0 text-green-400 font-mono">
      <div className="max-w-7xl flex justify-between items-center px-4 py-4">
        <h1>
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          </Link>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="hover:text-green-300 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-green-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ThemeToggleButton />
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden bg-black border-t border-green-600 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="block text-green-300 hover:text-green-200 transition"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
