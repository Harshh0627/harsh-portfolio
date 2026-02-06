import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Associate Analyst",
    company: "Vaco Binary Semantics",
    location: "Remote",
    period: "Oct 2025 - Dec 2025",
    description: "Working on data analysis projects, creating dashboards, and generating comprehensive reports using SQL and modern analytics tools.",
    highlights: ["SQL Analysis", "Dashboard Creation", "Data Reporting", "Business Intelligence"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line hidden md:block" style={{ transform: "translateX(-50%)" }} />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 z-10">
                <div className="timeline-dot" />
              </div>

              {/* Content Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                {/* Title & Company */}
                <h3 className="text-xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                  <span className="font-medium text-secondary">{exp.company}</span>
                  <span className="flex items-center gap-1 text-sm">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
