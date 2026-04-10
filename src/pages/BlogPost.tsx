import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
      </Helmet>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to The Ques Report
          </Link>

          <article className="prose-invert">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="space-y-6 font-body text-navy-foreground/80 text-base md:text-lg leading-relaxed">
              {post.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-foreground pt-4">
                      {section.heading}
                    </h2>
                  )}
                  <p>{section.paragraph}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/">
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
