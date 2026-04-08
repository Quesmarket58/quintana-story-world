import { useState, useEffect } from "react";

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
      
      // Add a second bolt on the opposite side occasionally
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

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative inline-flex items-center justify-center mt-6 animate-fade-up" style={{ animationDelay: "0.45s" }}>
      {/* Lightning SVG Container */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 80"
        preserveAspectRatio="none"
        style={{ overflow: "visible", width: "120%", height: "140%", left: "-10%", top: "-20%" }}
      >
        {bolts.map((bolt) => (
          <g key={bolt.id}>
            {/* Glow layer */}
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
            {/* Core bolt */}
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

      {/* Button with pulsing glow */}
      <button
        onClick={scrollToContact}
        className="relative z-10 px-8 py-4 rounded-xl font-display text-lg font-bold text-primary-foreground bg-warm-gradient shadow-glow hover:scale-105 transition-transform duration-300 cursor-pointer"
        style={{
          animation: "lightning-pulse 2s ease-in-out infinite",
        }}
      >
        To get my free book, send your name and email
        <span className="block font-body text-sm font-normal mt-1 opacity-90">↓ Scroll to the bottom to claim yours</span>
      </button>

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
