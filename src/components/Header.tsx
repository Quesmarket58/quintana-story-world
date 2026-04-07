import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import quesBadge from "@/assets/ques-badge.png";
import quesFlag from "@/assets/ques-flag.png";
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
          {/* Logo */}
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
            <div className="flex flex-col items-center gap-1">
              <Button variant="hero" size="sm">
                Get Started
              </Button>
              <a
                href="https://www.linkedin.com/in/larry-quintana-b327793a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <img src={quesFlag} alt="Ques Marketing" className="w-28 h-28 rounded-md object-cover shadow-md" />
                <span className="font-body text-sm text-navy-foreground font-semibold">My LinkedIn</span>
              </a>
              <img src={marquisBadge} alt="Marquis Who's Who 2025 Honored Listee" className="w-28 h-28 rounded-md object-contain" />
            </div>
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
