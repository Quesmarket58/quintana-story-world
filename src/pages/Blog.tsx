import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import quesReportBadge from "@/assets/ques_report_badge.jpg";

const blogPosts = [
  {
    slug: "hidden-history-america",
    title: "The Hidden History of America: Untold Stories That Shaped a Nation",
    category: "American History",
    excerpt:
      "Beyond the standard narratives lies a deeper story filled with forgotten heroes, political scandals, and suppressed historical events that helped shape the nation.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <main className="pt-24 pb-20">
        {/* Badge Header */}
        <div className="container mx-auto px-4 text-center mb-16">
          <Link to="/blog" className="inline-block group">
            <img
              src={quesReportBadge}
              alt="The Ques Report"
              className="w-48 h-48 md:w-64 md:h-64 object-contain mx-auto rounded-xl shadow-glow group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <p className="font-display text-xl md:text-2xl text-navy-foreground/80 mt-6 tracking-wide">
            Insights. Intel. Opportunities.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-primary/20 bg-navy-foreground/5 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-colors group"
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <span className="inline-block self-start font-body text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-navy-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-navy-foreground/70 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" size="sm" asChild className="self-start border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link to={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
