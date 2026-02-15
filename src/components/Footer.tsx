import { Heart, Instagram } from "lucide-react";
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

            {/* Social & Contact */}
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <a href="https://www.tiktok.com/@quenn1151" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-foreground/10 hover:bg-primary flex items-center justify-center text-navy-foreground hover:text-primary-foreground transition-all" aria-label="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15a6.34 6.34 0 0 0 6.33 6.33 6.34 6.34 0 0 0 6.34-6.33V8.75a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.18z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/quesmarket57" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-foreground/10 hover:bg-primary flex items-center justify-center text-navy-foreground hover:text-primary-foreground transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:Quesmarketingagency@gmail.com" className="font-body text-sm text-navy-foreground/70 hover:text-primary transition-colors">
                Quesmarketingagency@gmail.com
              </a>
            </div>
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
