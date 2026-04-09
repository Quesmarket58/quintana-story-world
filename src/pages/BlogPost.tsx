import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <Helmet>
        <title>Hidden History of America Ebook</title>
        <meta
          name="description"
          content="Discover untold American history, forgotten heroes, and political scandals in this eye-opening ebook from Ques Market."
        />
      </Helmet>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to The Ques Report
          </Link>

          {/* Article */}
          <article className="prose-invert">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground mb-8 leading-tight">
              The Hidden History of America: Untold Stories That Shaped a Nation
            </h1>

            <div className="space-y-6 font-body text-navy-foreground/80 text-base md:text-lg leading-relaxed">
              <p>
                American history is often taught through a familiar set of events, leaders, and milestones. Yet beyond the standard narratives lies a deeper, more complex story filled with forgotten heroes, political scandals, overlooked events, and suppressed historical narratives that helped shape the nation. <em>The Hidden History of America</em> is an ebook designed for readers who want to go beyond the surface and discover the untold American history rarely discussed in mainstream accounts.
              </p>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-foreground pt-4">
                Why Hidden History Matters
              </h2>
              <p>
                To understand the United States fully, it is important to look beyond the simplified versions of the past. Hidden history reveals the struggles, decisions, and conflicts that influenced generations. From controversial moments in US history to the stories of individuals whose contributions were minimized or erased, these narratives provide a more complete picture of America's development.
              </p>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-foreground pt-4">
                Untold American History You Were Never Taught
              </h2>
              <p>
                Traditional history books often focus on major wars, presidents, and landmark documents. <em>The Hidden History of America</em> brings attention to overlooked events in American history that deserve greater recognition. These include stories of local resistance, political cover-ups, and lesser-known turning points that had national consequences.
              </p>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-foreground pt-4">
                Forgotten Heroes and Political Scandals
              </h2>
              <p>
                Throughout the nation's past, many courageous figures made important contributions only to be pushed to the margins of public memory. At the same time, political scandals reveal how institutions operate behind the scenes and how public trust can be manipulated or broken.
              </p>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-foreground pt-4">
                Why This American History Ebook Stands Out
              </h2>
              <p>
                Readers looking for the best books on hidden American history want something engaging, accessible, and credible. This ebook presents compelling stories in a way that is easy to follow while offering serious insight for lifelong history enthusiasts, students, and curious readers.
              </p>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-foreground pt-4">
                Discover a Deeper View of America
              </h2>
              <p>
                If you are ready to explore the stories that history classes often missed, <em>The Hidden History of America</em> is a valuable addition to your reading list. Visit Ques Market today to get your copy and explore more trusted ebooks and educational offers curated by Larry and the Ques Market brand.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/" >
                  Get This Ebook at Ques Market
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
