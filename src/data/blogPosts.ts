export interface BlogPostSection {
  heading: string;
  paragraph: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  sections: BlogPostSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "hidden-history-america",
    title: "The Hidden History of America: Untold Stories That Shaped a Nation",
    category: "American History",
    excerpt:
      "Beyond the standard narratives lies a deeper story filled with forgotten heroes, political scandals, and suppressed historical events that helped shape the nation.",
    metaTitle: "Hidden History of America Ebook",
    metaDescription:
      "Discover untold American history, forgotten heroes, and political scandals in this eye-opening ebook from Ques Market.",
    sections: [
      {
        heading: "",
        paragraph:
          "American history is often taught through a familiar set of events, leaders, and milestones. Yet beyond the standard narratives lies a deeper, more complex story filled with forgotten heroes, political scandals, overlooked events, and suppressed historical narratives that helped shape the nation. The Hidden History of America is an ebook designed for readers who want to go beyond the surface and discover the untold American history rarely discussed in mainstream accounts.",
      },
      {
        heading: "Why Hidden History Matters",
        paragraph:
          "To understand the United States fully, it is important to look beyond the simplified versions of the past. Hidden history reveals the struggles, decisions, and conflicts that influenced generations. From controversial moments in US history to the stories of individuals whose contributions were minimized or erased, these narratives provide a more complete picture of America's development.",
      },
      {
        heading: "Untold American History You Were Never Taught",
        paragraph:
          "Traditional history books often focus on major wars, presidents, and landmark documents. The Hidden History of America brings attention to overlooked events in American history that deserve greater recognition. These include stories of local resistance, political cover-ups, and lesser-known turning points that had national consequences.",
      },
      {
        heading: "Forgotten Heroes and Political Scandals",
        paragraph:
          "Throughout the nation's past, many courageous figures made important contributions only to be pushed to the margins of public memory. At the same time, political scandals reveal how institutions operate behind the scenes and how public trust can be manipulated or broken.",
      },
      {
        heading: "Why This American History Ebook Stands Out",
        paragraph:
          "Readers looking for the best books on hidden American history want something engaging, accessible, and credible. This ebook presents compelling stories in a way that is easy to follow while offering serious insight for lifelong history enthusiasts, students, and curious readers.",
      },
      {
        heading: "Discover a Deeper View of America",
        paragraph:
          "If you are ready to explore the stories that history classes often missed, The Hidden History of America is a valuable addition to your reading list. Visit Ques Market today to get your copy and explore more trusted ebooks and educational offers curated by Larry and the Ques Market brand.",
      },
    ],
 },
];  {
    slug: "ai-connect-networking-tool",
    title: "Transform Your Business Networking with AI Connect: The Ultimate AI Networking Tool for Entrepreneurs",
    category: "AI Tools",
    excerpt: "Traditional networking is time-consuming and inefficient. AI Connect uses artificial intelligence to automate outreach, identify high-value connections, and grow your business on autopilot.",
    metaTitle: "AI Connect: AI Networking Tool for Entrepreneurs & Marketers",
    metaDescription: "Transform your business networking with AI Connect. Automated outreach, smart connections, and AI-powered relationship building for entrepreneurs.",
    sections: [
    { heading: "", paragraph: "In today's hyper-connected business landscape, successful entrepreneurs and marketers understand that meaningful connections drive growth. Traditional networking approaches are time-consuming, inefficient, and often yield inconsistent results. Enter AI Connect, the revolutionary AI networking tool transforming how professionals build relationships and grow their businesses." },
    ],
  },
