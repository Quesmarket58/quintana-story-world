import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import passiveIncomePlaybook from "@/assets/books/passive-income-playbook.jpg";
import affiliateMarketersPlaybook from "@/assets/books/affiliate-marketers-playbook.jpg";
import listBuildersBlueprint from "@/assets/books/list-builders-blueprint.jpg";
import realmOfTheUnseen from "@/assets/books/realm-of-the-unseen.jpg";
import christianNationDebate from "@/assets/books/christian-nation-debate.jpg";
import fromHistoryToIncome from "@/assets/books/from-history-to-income.jpg";
import knowledgeIsPower from "@/assets/books/knowledge-is-power.jpg";
import nourishYourMind from "@/assets/books/nourish-your-mind.jpg";
import theodicyInDialogue from "@/assets/books/theodicy-in-dialogue.jpg";
import masteringArtOfPrompts from "@/assets/books/mastering-art-of-prompts.png";

interface Book {
  id: number;
  title: string;
  cover: string;
  description: string;
  link?: string;
}

const Books = () => {
  // Placeholder books - replace with your actual book data
  const books: Book[] = [
    {
      id: 1,
      title: "Passive Income Playbook",
      cover: passiveIncomePlaybook,
      description: "Crafting compelling funnels to build sustainable passive income streams.",
      link: "https://www.barnesandnoble.com/s/larry%20quintana",
    },
    {
      id: 2,
      title: "The Affiliate Marketer's Playbook",
      cover: affiliateMarketersPlaybook,
      description: "Building an engaged audience with TikTok, Instagram, and Facebook.",
      link: "https://www.barnesandnoble.com/s/larry%20quintana",
    },
    {
      id: 3,
      title: "The List Builder's Blueprint",
      cover: listBuildersBlueprint,
      description: "Grow your affiliate empire with traffic exchanges and organic strategies.",
      link: "https://www.barnesandnoble.com/s/larry%20quintana",
    },
    {
      id: 4,
      title: "In the Realm of the Unseen",
      cover: realmOfTheUnseen,
      description: "Lessons from the early church — exploring faith and the mysteries beyond the visible world.",
      link: "https://www.barnesandnoble.com/s/larry%20quintana",
    },
    {
      id: 5,
      title: "The Christian Nation Debate",
      cover: christianNationDebate,
      description: "Founding fathers and the role of faith in governance.",
      link: "https://www.barnesandnoble.com/s/larry%20quintana",
    },
    {
      id: 6,
      title: "From History to Income",
      cover: fromHistoryToIncome,
      description: "Leveraging affiliate marketing in the digital age.",
      link: "https://www.barnesandnoble.com/s/larry%20quintana",
    },
    {
      id: 7,
      title: "Knowledge is Power",
      cover: knowledgeIsPower,
      description: "Empowering citizens in the face of authority.",
      link: "https://www.barnesandnoble.com/s/larry%20quintana",
    },
    {
      id: 8,
      title: "Nourish Your Mind",
      cover: nourishYourMind,
      description: "Holistic wellness for students and young professionals.",
      link: "https://www.barnesandnoble.com/s/larry%20quintana",
    },
    {
      id: 9,
      title: "Theodicy in Dialogue",
      cover: theodicyInDialogue,
      description: "Eastern Orthodoxy, Catholicism, and Protestant insights on the problem of evil.",
      link: "https://www.barnesandnoble.com/s/larry%20quintana",
    },
    {
      id: 10,
      title: "Mastering the Art of Prompts: A Comprehensive Guide for Creators and Developers",
      cover: masteringArtOfPrompts,
      description: "A comprehensive guide for creators and developers to master AI prompt engineering.",
      link: "https://www.barnesandnoble.com/w/mastering-the-art-of-prompts-larry-quintana/1149920694?ean=9798295810541",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  const currentBook = books[currentIndex];

  return (
    <section id="books" className="py-20 md:py-32 bg-navy relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-sunset blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              Published Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground mt-3 mb-6">
              My Books
            </h2>
            <p className="font-body text-lg text-navy-foreground/70 max-w-2xl mx-auto">
              Explore my collection of published books designed to help you on your journey.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Main Featured Book */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Book Cover */}
              <div className="relative flex-shrink-0">
                <div className="relative group">
                  <img
                    src={currentBook.cover}
                    alt={currentBook.title}
                    className="w-64 md:w-72 h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Book count indicator */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full font-body text-sm font-medium">
                  {currentIndex + 1} / {books.length}
                </div>
              </div>

              {/* Book Info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-navy-foreground mb-4">
                  {currentBook.title}
                </h3>
                <p className="font-body text-lg text-navy-foreground/70 mb-8 leading-relaxed">
                  {currentBook.description}
                </p>
                
                {currentBook.link && (
                  <Button variant="hero" size="lg" asChild>
                    <a href={currentBook.link} target="_blank" rel="noopener noreferrer">
                      Get This Book
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-navy-foreground/10 hover:bg-primary text-navy-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Previous book"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {books.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-navy-foreground/30 hover:bg-navy-foreground/50"
                    }`}
                    aria-label={`Go to book ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-navy-foreground/10 hover:bg-primary text-navy-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Next book"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
