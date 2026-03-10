"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const COLORS = {
  warmIvory: "#FAF8F3",
  charcoalText: "#2C2C2A",
  pureWhite: "#FFFFFF",
  bronzeAccent: "#A0784A",
  bronzeLight: "#C4976A",
  midnightEmerald: "#0D2B1F",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Counsel", href: "/counsel" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Legal Matters", href: "/legal-matters" },
  { label: "Instructions", href: "/instructions" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  // Always use solid styling on non-home pages so text is visible on light backgrounds
  const isHome = pathname === "/";
  const solidNav = isScrolled || !isHome;
  const textColor = solidNav ? COLORS.charcoalText : COLORS.pureWhite;

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: "rgba(255,255,255,0)" }}
        animate={{
          backgroundColor: solidNav ? COLORS.warmIvory : "rgba(255,255,255,0)",
          borderBottom: solidNav
            ? `1px solid ${COLORS.bronzeLight}`
            : "1px solid rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand name */}
          <Link
            href="/"
            className="font-serif text-2xl focus:outline-none transition-colors duration-300"
            style={{ color: textColor }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Aileen Ingati
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative group font-sans focus:outline-none py-2 transition-colors duration-300"
                    style={{ color: textColor }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute left-0 bottom-0 w-full h-[2px]"
                        style={{ backgroundColor: COLORS.bronzeAccent }}
                      />
                    )}
                    {!isActive && (
                      <span
                        className="absolute left-0 bottom-0 w-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full"
                        style={{ backgroundColor: COLORS.bronzeAccent }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/brief-me"
              className="font-sans px-6 rounded focus:outline-none transition-colors duration-300"
              style={{
                backgroundColor: COLORS.bronzeAccent,
                color: COLORS.pureWhite,
                minHeight: 40,
                display: "inline-flex",
                alignItems: "center",
                paddingTop: "0.625rem",
                paddingBottom: "0.625rem",
              }}
            >
              Brief Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden focus:outline-none p-2 transition-colors duration-300"
            style={{ color: textColor }}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col px-6 py-8 md:hidden"
            style={{ backgroundColor: COLORS.midnightEmerald }}
          >
            <div className="flex justify-end">
              <button
                className="focus:outline-none p-2"
                style={{ color: COLORS.pureWhite }}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-col flex-1 justify-center space-y-6 md:space-y-8 mt-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-2xl tracking-wide block"
                  style={{ color: COLORS.pureWhite, fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 mb-4">
              <Link
                href="/brief-me"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center font-sans py-4 rounded text-lg transition-colors duration-300"
                style={{ backgroundColor: COLORS.bronzeAccent, color: COLORS.pureWhite }}
              >
                Brief Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
