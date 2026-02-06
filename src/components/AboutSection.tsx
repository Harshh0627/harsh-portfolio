import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Zap, Target, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description: "Pixel-perfect implementation with clean code",
    },
    {
      icon: Rocket,
      title: "Performance Focused",
      description: "Optimized solutions for seamless user experiences",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold gradient-text">
                About Me
              </h2>
              <p className="text-muted-foreground">Who I am and what drives me</p>
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
<p className="text-lg text-muted-foreground leading-relaxed mb-6">
  I'm a motivated <span className="text-foreground font-semibold">Full Stack Developer</span> who builds 
  data-driven web applications, blending clean design with scalable and reliable functionality.
</p>

<p className="text-lg text-muted-foreground leading-relaxed mb-6">
  I specialize in <span className="text-primary">React</span>, <span className="text-primary">Node.js</span>, 
  and modern cloud technologies, while leveraging <span className="text-primary">SQL</span> and 
  <span className="text-primary"> Power BI</span> to create applications backed by meaningful data insights.
</p>

<p className="text-lg text-muted-foreground leading-relaxed">
  Beyond coding, I enjoy exploring emerging technologies, improving data workflows, 
  and continuously learning to build smarter, more impactful digital solutions.
</p>

            </motion.div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="glass-panel rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
