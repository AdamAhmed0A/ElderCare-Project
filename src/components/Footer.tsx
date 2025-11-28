import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";
import { Logo } from "@/components/Logo";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/about#mission" },
    { name: "Contact", href: "/about#contact" },
  ],
  services: [
    { name: "Supplies Catalog", href: "/supplies" },
    { name: "Donate Items", href: "/donate" },
    { name: "Find Care Homes", href: "/nearby" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 animate-fade-in-up">
            <div className="mb-6">
              <Logo size="md" className="[&_span]:text-primary-foreground [&_.text-secondary]:text-secondary [&_.text-muted-foreground]:text-primary-foreground/70" />
            </div>
            <p className="text-primary-foreground/70 mb-6">
              Supporting the elderly with care, comfort, and essential needs since 2024.
            </p>
            <div className="flex flex-col gap-3 text-primary-foreground/70">
              <a href="tel:+1800ELDER" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
                1-800-ELDER-CARE
              </a>
              <a href="mailto:help@eldercare.org" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
                help@eldercare.org
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Serving Communities Nationwide
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div className="animate-fade-in-up delay-100">
            <h3 className="font-display text-lg font-semibold mb-6">Company</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="animate-fade-in-up delay-200">
            <h3 className="font-display text-lg font-semibold mb-6">Services</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="animate-fade-in-up delay-300">
            <h3 className="font-display text-lg font-semibold mb-6">Legal</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Elder Care. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-secondary animate-pulse-soft" fill="currentColor" /> for our seniors
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
