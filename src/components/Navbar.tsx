import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Package, Gift, MapPin, Info, LogIn, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Supplies", href: "/supplies", icon: Package },
  { name: "Donate", href: "/donate", icon: Gift },
  { name: "Nearby Homes", href: "/nearby", icon: MapPin },
  { name: "About Us", href: "/about", icon: Info },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm animate-fade-in">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 hover:scale-105",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild className="transition-all duration-300 hover:scale-105">
              <Link to="/profile">
                <User className="w-5 h-5" />
                Profile
              </Link>
            </Button>
            <Button variant="ghost" asChild className="transition-all duration-300 hover:scale-105">
              <Link to="/auth?mode=login">
                <LogIn className="w-5 h-5" />
                Login
              </Link>
            </Button>
            <Button variant="hero" asChild className="transition-all duration-300 hover:scale-105">
              <Link to="/auth?mode=signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-screen pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <link.icon className="w-6 h-6" />
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <Button variant="outline" size="lg" asChild className="w-full">
                <Link to="/profile" onClick={() => setIsOpen(false)}>
                  <User className="w-5 h-5" />
                  Profile
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full">
                <Link to="/auth?mode=login" onClick={() => setIsOpen(false)}>
                  <LogIn className="w-5 h-5" />
                  Login
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild className="w-full">
                <Link to="/auth?mode=signup" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
