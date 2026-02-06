import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Harsh Maurya. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>

          <div className="text-sm text-muted-foreground">
            <span className="gradient-text font-display font-semibold">Full Stack Developer</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
