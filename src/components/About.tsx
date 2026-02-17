import { Target, Heart, Users } from "lucide-react";
import quesLogoBg from "@/assets/ques-logo-bg.png";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Simple Systems",
      description: "Step-by-step guidance anyone can follow, regardless of experience.",
    },
    {
      icon: Heart,
      title: "Real Support",
      description: "We're here to help you succeed, not just sell you a course.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join others on the same journey. You're never alone.",
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background Logo */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: `url(${quesLogoBg})` }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              About Ques Marketing Agency LLC
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide various income and online business opportunities, courses, guidance, and advice 
              for those with no income, no career, or no experience — including retirees and anyone 
              seeking to start their own business. Serving the United States, Canada, Mexico, and European nations.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card mb-16 border border-border">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                To provide real guidance and simple systems anyone can follow. 
                We believe that financial freedom should be accessible to everyone — 
                whether you're unemployed, retired, or simply looking for a fresh start. 
                No technical skills or business experience required.
              </p>
              <div className="mt-8 pt-8 border-t border-border">
                <blockquote className="font-display text-xl md:text-2xl font-medium text-gradient italic">
                  "If we can do this, anyone can do it."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-warm-gradient flex items-center justify-center shadow-glow">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
