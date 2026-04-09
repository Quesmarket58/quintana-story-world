import { Link } from "react-router-dom";
import quesReportBadge from "@/assets/ques_report_badge.jpg";

const QuesReportSection = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 text-center">
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
    </section>
  );
};

export default QuesReportSection;
