import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ShelterScape",
    description: "A comprehensive booking platform with seamless user experience. Features property listings, real-time availability, secure payments via Stripe, and a responsive design for all devices.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
    featured: true,
    highlights: ["Booking Platform", "Stripe Payments", "Authentication"],
  },
  {
    title: "TaskSphere",
    description: "Modern task management application for teams and individuals. Includes daily task tracking, team assignee views, real-time updates, and intuitive drag-and-drop interface.",
    tech: ["React", "Express", "PostgreSQL", "Socket.io"],
    featured: true,
    highlights: ["Real-time UI", "Team Management", "Task Analytics"],
  },
  {
  title: "PayWise",
  description: "A modern digital payments app UI inspired by Google Pay, designed in Figma. Focuses on intuitive navigation, smooth payment flows, wallet management, and a clean, minimal interface.",
  tech: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
  featured: true,
  highlights: ["Intuitive Payment Flow", "Minimal UI", "High-Fidelity Prototype"],
},

];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work and the problems I've solved
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-panel rounded-2xl p-6 sm:p-8 h-full hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-primary-foreground">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground"
                    >
                      {tech}
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

export default ProjectsSection;
