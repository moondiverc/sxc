"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    // Ini apa di homepage aja?
    { name: "Impact", href: "#impact" },
    { name: "Join Us", href: "#join" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/studentsxceosjkt/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/studentsxceos", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@studentsxceos.com", label: "Email" },
  ];

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  S
                </span>
              </div>
              <div>
                <span className="font-bold text-secondary-foreground">
                  Students
                </span>
                <span className="text-primary font-bold">x</span>
                <span className="font-bold text-secondary-foreground">
                  CEOs
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Strategic leadership accelerator cultivating Indonesias next
              generation of business leaders since 2010.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Jakarta, Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary-foreground font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-secondary-foreground font-semibold mb-4">
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
                    className="w-10 h-10 rounded-lg bg-muted/20 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label={social.label}>
                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} StudentsxCEOs Jakarta. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Jakarta Batch 14 • Technology Development
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
