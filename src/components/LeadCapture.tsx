import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, CheckCircle, ArrowRight } from "lucide-react";

const LeadCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would integrate with your email service
    }
  };

  const benefits = [
    "Step-by-step beginner guide",
    "Top affiliate programs list",
    "Content templates",
    "Private community access",
  ];

  return (
    <section id="lead" className="py-20 md:py-32 bg-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sunset blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 mb-6">
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm font-medium text-primary">Free Resource</span>
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Get Your Free Beginner Starter Kit
                </h2>
                <p className="font-body text-muted-foreground mb-6">
                  Everything you need to start your online business journey, delivered straight to your inbox.
                </p>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 font-body text-sm text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side - Form */}
              <div>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-body text-sm font-medium text-foreground mb-2 block">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 bg-background border-border focus:border-primary"
                      />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Get Free Access
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <p className="font-body text-xs text-muted-foreground text-center">
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      You're In!
                    </h3>
                    <p className="font-body text-muted-foreground">
                      Check your inbox for your free starter kit.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
