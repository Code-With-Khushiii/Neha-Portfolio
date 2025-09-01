import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Prowess IT Solutions",
    position: "Strategy Consultant",
    location: "Boston, MA",
    duration: "Sep. 2024 – Present",
    achievements: [
      "Developed store optimization strategy for retail client, analyzing sales, footfall, and lease data across 50+ outlets; gained leadership buy-in for roadmap forecasted to deliver $9M in revenue and 15% profit uplift",
      "Created client pricing models using data and elasticity analysis, resulting in 12% increase in conversions and 9% growth in basket size",
      "Redesigned client loyalty program with predictive modeling and tiered rewards, boosting repeat purchases by 18%",
      "Partnered with client executives and cross-functional teams to align programs with transformation priorities",
      "Delivered executive dashboards and KPI trackers to client leadership, embedding insights into strategic planning"
    ]
  },
  {
    id: 2,
    company: "Optivida",
    position: "Co-founder",
    location: "Boston, MA",
    duration: "Jun. 2024 - Aug. 2024",
    achievements: [
      "Co-founded AI-driven medication dispenser addressing $5.4B market, improving adherence and reducing $50B in healthcare costs",
      "Built strategy, projections, and pitch through research and benchmarking, highlighting differentiation in accessibility and integration"
    ]
  },
  {
    id: 3,
    company: "Franklin Templeton",
    position: "Business Insights",
    location: "Boston, MA",
    duration: "Jan. 2024 – May 2024",
    achievements: [
      "Designed forecasting models integrating macroeconomic indicators and sentiment analytics, improving strategic adoption planning accuracy by 10%",
      "Segmented clients using lifecycle data to create strategies modeled to grow AUM by $1.5B and strengthen repeat business"
    ]
  },
  {
    id: 4,
    company: "US Bank",
    position: "Strategy and Growth",
    location: "Boston, MA",
    duration: "Sep. 2023 – Dec. 2023",
    achievements: [
      "Streamlined client onboarding by implementing self-service KYC workflows and structured change management practices, reducing customer drop-offs by 15% and cutting onboarding time by 10%",
      "Built SQL/Tableau loan dashboards and pricing models, improving mid-tier loan approvals by 18% and delivering cross-sell campaigns that boosted conversions by 18% and CLV by 20%"
    ]
  },
  {
    id: 5,
    company: "Zinnov Management Consulting",
    position: "Management Consultant",
    location: "Bengaluru, India",
    duration: "Jan. 2021 – Jun. 2023",
    achievements: [
      "Led GTM strategy for $30B business segment, creating 45+ product bundles and securing 15% market share growth",
      "Designed DaaS, Cloud, and ERP solution packaging with pricing models, embedding value realization metrics",
      "Mapped POS ecosystem for Fortune 100 client, securing stakeholder sponsorship for banking partnerships positioned to capture 30% of target market share",
      "Authored 100-page strategic advisory report for Fortune 5 retailer, generating follow-on multimillion dollar consulting engagements",
      "Conducted M&A due diligence and TAM/SAM sizing for global skincare company, identifying $3B APAC growth opportunity"
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary"> Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-card p-6 rounded-lg shadow-xs card-hover border-l-4 border-l-primary"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{experience.position}</h3>
                    <p className="text-primary font-medium">{experience.company}</p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {experience.location}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
