import { TrendingUp, GraduationCap, PenTool, ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

import passiveIncomePlaybook from "@/assets/books/passive-income-playbook.jpg";
import listBuildersBlueprint from "@/assets/books/list-builders-blueprint.jpg";
import affiliateMarketersPlaybook from "@/assets/books/affiliate-marketers-playbook.jpg";

interface ResourceLink {
  title: string;
  url: string;
  image?: string;
}

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  resources?: ResourceLink[];
  embedUrl?: string;
  affiliateLink?: {
    title: string;
    description: string;
    url: string;
  };
}

const Services = () => {
  const services: Service[] = [
    {
      icon: TrendingUp,
      title: "Affiliate Marketing",
      description: "Learn how to earn commissions by promoting products you believe in. No inventory, no shipping—just share and earn.",
      features: ["Product selection guidance", "Marketing strategies", "Commission optimization"],
      resources: [
        {
          title: "Passive Income Playbook",
          url: "https://www.barnesandnoble.com/w/passive-income-playbook-larry-a-quintana/1148494927?ean=9798349609565",
          image: passiveIncomePlaybook,
        },
        {
          title: "The List Builder's Blueprint",
          url: "https://www.barnesandnoble.com/w/the-list-builders-blueprint-larry-a-quintana/1148282662?ean=9798349543579",
          image: listBuildersBlueprint,
        },
        {
          title: "The Affiliate Marketer's Playbook",
          url: "https://www.barnesandnoble.com/w/the-affiliate-marketers-playbook-larry-a-quintana/1148476002?ean=9798349603143",
          image: affiliateMarketersPlaybook,
        },
        {
          title: "4 Aces Mailer — Everything an Internet Marketer needs in a Viral Safelist Mailer Site. Get an instant audience to your website or business opportunity.",
          url: "https://4acesmailer.com/index.php?referid=Quesmarket57",
        },
      ],
      affiliateLink: {
        title: "DREAMS Business Resources",
        description: "Your launchpad to success — where knowledge turns into action, and action turns into income. Follow the J.E.D.I. path to start earning right away.",
        url: "https://dreamsresources.com/join/?refid=AA6498",
      },
    },
    {
      icon: GraduationCap,
      title: "Online Business Training",
      description: "Beginner-friendly, step-by-step training designed for people starting from zero. Learn at your own pace.",
      features: ["Video tutorials", "Live Q&A sessions", "Actionable worksheets"],
      resources: [
        {
          title: "Worldprofit AI Suite — 7 Powerful Tools in One: Create, design, write, and sell faster than ever with Worldprofit's complete AI-powered business suite.",
          url: "https://aisuite.worldprofit.ai/?id=6347762",
        },
      ],
      embedUrl: "https://www.freewebsubmission.com/fws-remote-submit.php",
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Build your authority and attract customers through valuable content. We show you exactly how.",
      features: ["Content templates", "Social media strategies", "Email marketing basics"],
      resources: [
        {
          title: "Vidatia — AI-powered video creation in any niche, genre, or style with just a few clicks.",
          url: "https://jvz1.com/c/3367123/420441",
        },
        {
          title: "Vidko — Tap into AI video generation and build a lucrative video service business.",
          url: "https://jvz5.com/c/3367123/416486",
        },
        {
          title: "Clickly — Start your own thumbnail and video editing service, everything included.",
          url: "https://jvz5.com/c/3367123/433065",
        },
      ],
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
            {services.map((service) => (
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

                {/* Resources */}
                {service.resources && (
                  <div className="mb-6">
                    <h4 className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {service.resources.some(r => r.image) ? "Recommended Resources" : "Recommended Tools"}
                    </h4>
                    {/* Book resources with images */}
                    {service.resources.some(r => r.image) && (
                      <div className="flex gap-3 mb-3">
                        {service.resources.filter(r => r.image).map((resource) => (
                          <a
                            key={resource.title}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/book flex-1"
                            title={resource.title}
                          >
                            <img
                              src={resource.image}
                              alt={resource.title}
                              className="w-full h-auto rounded-md shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                            />
                          </a>
                        ))}
                      </div>
                    )}
                    {/* Text-only resources */}
                    {service.resources.some(r => !r.image) && (
                      <ul className="space-y-2">
                        {service.resources.filter(r => !r.image).map((resource) => (
                          <li key={resource.title}>
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-2 font-body text-sm text-primary hover:text-accent transition-colors duration-200"
                            >
                              <ExternalLink className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                              <span>{resource.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Embedded Form */}
                {service.embedUrl && (
                  <div className="mb-6">
                    <h4 className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Free Web Submission
                    </h4>
                    <iframe
                      width="100%"
                      height="186"
                      frameBorder={0}
                      scrolling="no"
                      src={service.embedUrl}
                      title="Free Web Submission"
                      className="rounded-lg border border-border"
                    />
                  </div>
                )}

                {/* Affiliate Link */}
                {service.affiliateLink && (
                  <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <h4 className="font-display text-sm font-semibold text-foreground mb-1">
                      🚀 {service.affiliateLink.title}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground mb-3 leading-relaxed">
                      {service.affiliateLink.description}
                    </p>
                    <Button variant="default" size="sm" asChild>
                      <a href={service.affiliateLink.url} target="_blank" rel="noopener noreferrer">
                        Join DREAMS
                        <ExternalLink className="ml-1 w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                )}

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
