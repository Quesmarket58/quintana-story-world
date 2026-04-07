import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import quesBadge from "@/assets/ques-badge.png";
import marquisBadge from "@/assets/marquis-whos-who.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#books", label: "Books" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + LinkedIn Badge */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3">
              <img 
                src={quesBadge} 
                alt="Ques Marketing Agency" 
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
              />
              <div className="hidden sm:block">
                <span className="font-display text-lg md:text-xl font-semibold text-navy-foreground">
                  Ques Marketing
                </span>
              </div>
            </a>
            <div className="hidden md:flex flex-col items-center gap-1">
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="small"
                data-theme="dark"
                data-type="VERTICAL"
                data-vanity="larry-quintana-b327793a2"
                data-version="v1"
              >
                <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/larry-quintana-b327793a2?trk=profile-badge">Larry Quintana</a>
              </div>
              <img src={marquisBadge} alt="Marquis Who's Who 2025 Honored Listee" className="w-28 h-28 rounded-md object-contain" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-navy-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-base font-medium text-navy-foreground/80 hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2">
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
