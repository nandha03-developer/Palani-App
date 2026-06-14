"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DownloadDialog } from "@/components/shared/download-dialog";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        className={cn(
          "flex items-center justify-between w-full max-w-5xl h-16 px-8 rounded-full transition-all duration-500",
          scrolled
            ? "bg-white shadow-premium border border-white/20"
            : "bg-white shadow-lg border border-white/10"
        )}
      >
        <Link href="/" className="flex items-center group">
          <Image
            src="/palani-logo-Photoroom.png"
            alt="Palani logo"
            width={140}
            height={50}
            quality={100}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[13px] font-medium tracking-wide transition-all hover:text-primary relative",
                pathname === link.href ? "text-primary" : "text-foreground/70"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <DownloadDialog>
            <Button className="hidden sm:flex rounded-full h-10 px-8 text-[13px] font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-xl shadow-primary/30 transition-all active:scale-95 border border-primary/20">
              Download App
            </Button>
          </DownloadDialog>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2 hover:bg-slate-100 dark:hover:bg-zinc-900 rounded-lg transition-all active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-20 left-4 right-4 bg-white p-6 rounded-3xl shadow-2xl md:hidden border border-gray-200"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm font-medium py-3 px-4 rounded-xl transition-colors",
                      pathname === link.href ? "bg-primary-50 text-primary" : "hover:bg-slate-50"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <DownloadDialog>
                  <Button className="w-full rounded-xl h-12 text-sm mt-2">
                    Download App
                  </Button>
                </DownloadDialog>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
