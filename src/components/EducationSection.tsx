import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "United College Of Engineering & Research, Allahabad",
    period: "2021 - 2025",
  },
  {
    degree: "Higher Secondary",
    field: "Science Stream",
    institution: "Mukularanyam English School,Varanasi",
    period: "2018 - 2019",
  },
];

const certifications = [
  {
    name: "Get start with Power BI",
    issuer: "Microsoft",
    year: "2026",
  },
  {
    name: "Oracle AI Fundamentals",
    issuer: "Oracle",
    year: "2025",
  },
  {
    name: "Deloitte Data Analytics",
    issuer: "Deloitte",
    year: "2025",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Academic background and professional credentials
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Education
              </h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-display font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-primary text-sm">{edu.field}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  <p className="text-muted-foreground text-xs mt-1">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Certifications
              </h3>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel rounded-xl p-4 hover:border-secondary/30 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
