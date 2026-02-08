import { TrendingUp, GraduationCap, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Affiliate Marketing",
      description: "Learn how to earn commissions by promoting products you believe in. No inventory, no shipping—just share and earn.",
      features: ["Product selection guidance", "Marketing strategies", "Commission optimization"],
    },
    {
      icon: GraduationCap,
      title: "Online Business Training",
      description: "Beginner-friendly, step-by-step training designed for people starting from zero. Learn at your own pace.",
      features: ["Video tutorials", "Live Q&A sessions", "Actionable worksheets"],
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Build your authority and attract customers through valuable content. We show you exactly how.",
      features: ["Content templates", "Social media strategies", "Email marketing basics"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Path to Online Income
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to start earning online, designed for complete beginners.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border hover:border-primary/30"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-warm-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 font-body text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-accent group/btn">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
