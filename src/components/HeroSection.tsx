import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden px-4">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-6 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          I build things for the web
        </motion.h2>

        <motion.p
          className="text-muted-foreground max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        >
          Crafting performant web applications and intelligent systems with clean code and modern design.
        </motion.p>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
