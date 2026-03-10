import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-sunset.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-sm font-medium text-primary">
              Start Your Journey Today
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            If I Can Do This,{" "}
            <span className="text-gradient">Anyone Can Do It</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-navy-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Providing income opportunities, courses, and guidance for beginners, retirees, 
            and anyone ready to start their own online business. No experience needed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://www.quesconstitutioncourse.store/" target="_blank" rel="noopener noreferrer">
                Ques US Constitution Course
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </div>

          {/* Free Book CTA */}
          <p className="font-body text-lg md:text-xl text-navy-foreground mt-8 animate-fade-up font-semibold" style={{ animationDelay: "0.35s" }}>
            Scroll down to the very bottom and fill in your details to get your FREE copy of my book{" "}
            <span className="text-gradient italic">"The Affiliate Marketer's Playbook"</span>
          </p>

          {/* Trust Indicator */}
          <p className="font-body text-sm text-navy-foreground/60 mt-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Join hundreds of beginners who started their online business journey
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-navy-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
