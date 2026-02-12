"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import monas from "@/assets/monas-no-bg.png";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Impact", href: "#impact" },
    { name: "Partnership", href: "#partnership" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/studentsxceosjkt/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/studentsxceos",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:contact@studentsxceos.com", label: "Email" },
  ];

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 relative">
              <Image
                src={monas}
                alt="Monas"
                className="size-30 absolute -left-12 -top-14"
              />
              {/* Can be set here */}
              <div className="ml-9">
                <span className="font-bold text-primary-foreground">
                  Students
                </span>
                <span className="text-primary font-bold">x</span>
                <span className="font-bold text-primary-foreground">CEOs</span>
              </div>
            </div>
            <p className="text-secondary-foreground mb-4 max-w-md font-light">
              Strategic leadership accelerator cultivating Indonesias next
              generation of business leaders since 2010.
            </p>
            <div className="flex items-center gap-2 text-secondary-foreground font-light">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Jakarta, Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground font-light hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                  <a
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-muted/20 hover:bg-primary/20 flex items-center justify-center transition-colors "
                    aria-label={social.label}>
                    <social.icon className="w-5 h-5 text-secondary-foreground hover:text-primary" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <p className="text-sm text-secondary-foreground text-center font-light">
            © {currentYear} StudentsxCEOs Jakarta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
