import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Wrench, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "from-primary to-orange-500",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-primary to-secondary",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-secondary to-amber-400",
    skills: ["Git", "GitHub", "Vercel", "Docker", "AWS", "CI/CD"],
  },
  {
    title: "Other Skills",
    icon: Layers,
    color: "from-orange-500 to-primary",
    skills: ["Stripe", "Cloudinary", "Authentication", "Responsive Design", "SEO", "Agile"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="skill-card group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <category.icon className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
