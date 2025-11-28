import { Link } from "react-router-dom";
import { Heart, User, Phone, Mail, MapPin } from "lucide-react";

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
    <footer className="bg-foreground text-background">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-secondary-foreground" />
                </div>
              </div>
              <span className="font-display text-2xl font-semibold">CareConnect</span>
            </Link>
            <p className="text-background/70 mb-6">
              Supporting the elderly with care, comfort, and essential needs since 2024.
            </p>
            <div className="flex flex-col gap-3 text-background/70">
              <a href="tel:+1800CARE" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="w-5 h-5" />
                1-800-CARE-NOW
              </a>
              <a href="mailto:help@careconnect.org" className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail className="w-5 h-5" />
                help@careconnect.org
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Serving Communities Nationwide
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Company</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Services</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Legal</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} CareConnect. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-secondary" fill="currentColor" /> for our seniors
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
