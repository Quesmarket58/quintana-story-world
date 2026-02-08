import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need any experience to get started?",
      answer: "Absolutely not! Our programs are specifically designed for complete beginners. We start from the very basics and guide you through every step. If you can send an email and browse the internet, you have all the skills you need to begin.",
    },
    {
      question: "Is this really beginner-friendly?",
      answer: "Yes, 100%. We've worked with hundreds of people who had zero online business experience, including retirees who never imagined themselves working online. Our step-by-step approach makes everything simple and manageable.",
    },
    {
      question: "How long before I can start earning?",
      answer: "Results vary based on effort and consistency, but many of our members start seeing their first commissions within 30-60 days. The key is following the system and taking consistent action.",
    },
    {
      question: "How much money do I need to start?",
      answer: "You can start learning for free with our beginner resources. As you progress, some tools and platforms may have small costs, but we focus on low-cost and free methods, especially when you're starting out.",
    },
    {
      question: "What makes Ques Marketing different?",
      answer: "We focus on real, actionable guidance—not hype or get-rich-quick promises. Our team has been in your shoes, starting from zero. We teach what actually works because we've done it ourselves.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft"
              >
                <AccordionTrigger className="font-display text-lg font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
