import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Download, Loader2, CheckCircle } from "lucide-react";

const EBOOK_URL = "https://dhzihccplpbdkkptcddv.supabase.co/storage/v1/object/public/ebooks/affiliate-marketers-playbook.epub";

interface LightningBolt {
  id: number;
  path: string;
  opacity: number;
  side: "left" | "right";
}

const generateBoltPath = (side: "left" | "right"): string => {
  const startX = side === "left" ? -8 : 108;
  const endX = side === "left" ? 15 + Math.random() * 20 : 85 - Math.random() * 20;
  const segments = 4 + Math.floor(Math.random() * 3);
  let path = `M ${startX} ${Math.random() * 30 + 10}`;
  
  for (let i = 1; i <= segments; i++) {
    const progress = i / segments;
    const x = startX + (endX - startX) * progress + (Math.random() - 0.5) * 25;
    const y = progress * 60 + Math.random() * 15;
    path += ` L ${x} ${y}`;
  }
  return path;
};

const LightningButton = () => {
  const [bolts, setBolts] = useState<LightningBolt[]>([]);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      const side: "left" | "right" = Math.random() > 0.5 ? "left" : "right";
      const newBolt: LightningBolt = {
        id: id++,
        path: generateBoltPath(side),
        opacity: 0.7 + Math.random() * 0.3,
        side,
      };
      setBolts((prev) => [...prev.slice(-5), newBolt]);
      
      if (Math.random() > 0.5) {
        const otherSide = side === "left" ? "right" : "left";
        const secondBolt: LightningBolt = {
          id: id++,
          path: generateBoltPath(otherSide),
          opacity: 0.5 + Math.random() * 0.3,
          side: otherSide,
        };
        setTimeout(() => {
          setBolts((prev) => [...prev.slice(-5), secondBolt]);
        }, 50);
      }
    }, 400 + Math.random() * 300);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          name: "Ebook Request",
          email: email,
          message: "Free ebook download request from hero section",
        });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your free ebook is ready to download!",
      });
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative inline-flex flex-col items-center justify-center mt-6 animate-fade-up" style={{ animationDelay: "0.45s" }}>
      {/* Lightning SVG Container */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 80"
        preserveAspectRatio="none"
        style={{ overflow: "visible", width: "120%", height: "140%", left: "-10%", top: "-20%" }}
      >
        {bolts.map((bolt) => (
          <g key={bolt.id}>
            <path
              d={bolt.path}
              fill="none"
              stroke="hsl(45, 100%, 70%)"
              strokeWidth="4"
              strokeLinecap="round"
              opacity={bolt.opacity * 0.4}
              filter="url(#lightning-glow)"
              className="lightning-bolt"
            />
            <path
              d={bolt.path}
              fill="none"
              stroke="hsl(50, 100%, 95%)"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={bolt.opacity}
              className="lightning-bolt"
            />
          </g>
        ))}
        <defs>
          <filter id="lightning-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Form or Success State */}
      <div
        className="relative z-10 rounded-xl bg-warm-gradient p-6 shadow-glow"
        style={{ animation: "lightning-pulse 2s ease-in-out infinite" }}
      >
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
            <h3 className="font-display text-lg font-bold text-primary-foreground text-center">
              🎁 Get Your FREE Ebook
            </h3>
            <p className="font-body text-sm text-primary-foreground/90 text-center max-w-sm">
              Enter your email below to instantly download<br />
              <strong>"The Affiliate Marketer's Playbook"</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-white/90 border-white/50 text-foreground placeholder:text-muted-foreground flex-1"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-12 px-6 rounded-md font-body font-semibold text-sm bg-navy text-navy-foreground hover:bg-navy/90 transition-colors disabled:opacity-50 cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                ) : (
                  "Get Free Ebook"
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-3 text-primary-foreground">
            <CheckCircle className="w-10 h-10" />
            <h3 className="font-display text-lg font-bold text-center">Your Ebook is Ready!</h3>
            <a
              href={EBOOK_URL}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-navy text-navy-foreground font-body font-semibold hover:bg-navy/90 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Now
            </a>
          </div>
        )}
      </div>

      <style>{`
        .lightning-bolt {
          animation: bolt-flash 0.4s ease-out forwards;
        }
        @keyframes bolt-flash {
          0% { opacity: 1; }
          20% { opacity: 0.3; }
          40% { opacity: 0.9; }
          60% { opacity: 0.2; }
          100% { opacity: 0; }
        }
        @keyframes lightning-pulse {
          0%, 100% { box-shadow: 0 0 15px hsl(25, 100%, 50%, 0.3), 0 0 30px hsl(45, 100%, 60%, 0.1); }
          50% { box-shadow: 0 0 25px hsl(25, 100%, 50%, 0.5), 0 0 50px hsl(45, 100%, 60%, 0.2); }
        }
      `}</style>
    </div>
  );
};

export default LightningButton;
