"use client";

import { useState, useEffect, useTransition } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import monas from "@/assets/monas-no-bg.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Program", href: "/program" },
  { name: "Partnership", href: "/partnership" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isProgram = pathname === "/program";
  const isPartnership = pathname === "/partnership";
  const isContact = pathname === "/contact";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // const [isDark, setIsDark] = useState(false);
  const [, startTransition] = useTransition();

  /**
   * ✅ Navbar dibuat "solid" bila:
   * - user sudah scroll, ATAU
   * - menu mobile sedang terbuka
   */
  const isSolid = isScrolled || isMobileOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Bonus: ketika berpindah route, tutup mobile menu otomatis
  useEffect(() => {
    startTransition(() => {
      setIsMobileOpen(false);
    });
  }, [pathname, startTransition]);

  // useEffect(() => {
  //   if (isDark) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [isDark]);

  // const toggleTheme = () => {
  //   setIsDark(!isDark);
  // };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo */}
          <motion.a href="/" className="flex items-center gap-2">
            <Image
              src={monas}
              alt="image monas"
              className="size-30 absolute -left-12 -top-7"
              priority
            />
            <div className="sm:block ml-8">
              <span
                className={`font-bold ${
                  isHome
                    ? isSolid
                      ? "text-secondary"
                      : "text-white"
                    : "text-secondary"
                }`}>
                Students
              </span>
              <span className="text-primary font-bold">x</span>
              <span
                className={`font-bold ${
                  isHome
                    ? isSolid
                      ? "text-secondary"
                      : "text-white"
                    : "text-secondary"
                }`}>
                CEOs
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`group relative font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : isHome
                        ? isSolid
                          ? "text-muted-foreground hover:text-primary"
                          : "text-white/80 hover:text-white"
                        : "text-muted-foreground hover:text-primary"
                  }`}>
                  {link.name}
                  <span
                    className={`pointer-events-none absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-500 origin-center transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100`}
                  />
                </motion.a>
              );
            })}

            {/* Theme toggle (optional) */}
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme toggle (optional) */}
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </Button> */}

            <button
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
              className={`p-2 transition-colors cursor-pointer ${
                isAbout || isContact || isProgram || isPartnership
                  ? "text-foreground"
                  : isSolid
                    ? "text-foreground"
                    : "text-white"
              }`}
              onClick={() => setIsMobileOpen((v) => !v)}>
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`group relative inline-block w-fit py-2 transition-all duration-300 ${
                      isActive
                        ? "text-blue-500"
                        : "text-foreground hover:text-blue-500"
                    }`}
                    onClick={() => setIsMobileOpen(false)}>
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-blue-500 origin-center transition-transform duration-300 ease-out ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
