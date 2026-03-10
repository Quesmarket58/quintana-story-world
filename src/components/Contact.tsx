import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, CheckCircle, Instagram, Download, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const EBOOK_URL = "https://dhzihccplpbdkkptcddv.supabase.co/storage/v1/object/public/ebooks/affiliate-marketers-playbook.epub";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });

      if (error) throw error;
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <div>
              <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                Contact Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Let's Start a Conversation
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8">
                To get my free book just send your name and email.
              </p>

                <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      Email Us
                    </h4>
                    <a href="mailto:Quesmarketingagency@gmail.com" className="font-body text-sm text-primary hover:text-accent transition-colors block">
                      Quesmarketingagency@gmail.com
                    </a>
                    <a href="mailto:Quesmarket2@gmail.com" className="font-body text-sm text-primary hover:text-accent transition-colors block">
                      Quesmarket2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15a6.34 6.34 0 0 0 6.33 6.33 6.34 6.34 0 0 0 6.34-6.33V8.75a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.18z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      TikTok
                    </h4>
                    <a href="https://www.tiktok.com/@quenn1151" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary hover:text-accent transition-colors">
                      @quenn1151
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      Instagram
                    </h4>
                    <a href="https://www.instagram.com/quesmarket57" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-primary hover:text-accent transition-colors">
                      @quesmarket57
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-2 block">
                      Your Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Thank You Fellow Entrepreneur!
                  </h3>
                  <p className="font-body text-muted-foreground mb-2">
                    Thank you from the team at Ques Marketing Agency LLC, as a valued member of the community I want to include my book "The Affiliate Marketer's Playbook." Feel free to browse the site and see the amazing business opportunities that I am actively promoting which are some of the greatest opportunities out here today.
                  </p>
                  <p className="font-body text-muted-foreground mb-6">
                    — Larry A. Quintana
                  </p>
                  <a href={EBOOK_URL} download="The-Affiliate-Marketers-Playbook.epub">
                    <Button variant="hero" size="lg" className="w-full">
                      <Download className="mr-2 w-5 h-5" />
                      Download Your Free eBook
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
