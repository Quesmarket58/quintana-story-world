import { Heart } from "lucide-react";
import quesBadge from "@/assets/ques-badge.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Books", href: "#books" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-navy py-12 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <img 
                  src={quesBadge} 
                  alt="Ques Marketing Agency" 
                  className="w-12 h-12 object-contain"
                />
                <span className="font-display text-xl font-semibold text-navy-foreground">
                  Ques Marketing Agency LLC
                </span>
              </div>
              <p className="font-body text-sm text-navy-foreground/60">
                If we can do this, anyone can do it.
              </p>
            </div>

            {/* Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-sm text-navy-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-8 border-t border-navy-foreground/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
              <p className="font-body text-sm text-navy-foreground/50">
                © {currentYear} Ques Marketing Agency LLC. All rights reserved.
              </p>
              <p className="font-body text-sm text-navy-foreground/50 flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-primary" /> for beginners everywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
