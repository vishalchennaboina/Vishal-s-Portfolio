import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "./GlassCard";
import profileImg from "../assets/vishal.jpg";

const ProfileSection = () => (
  <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
    <motion.div
      className="max-w-2xl w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <GlassCard hover={false} className="p-8 md:p-12 text-center">

        {/* Profile Photo */}
        <motion.div
          className="
            w-40 h-40
            mx-auto mb-8
            rounded-2xl
            border border-white/10
            overflow-hidden
            shadow-2xl
            backdrop-blur-xl
          "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: [0, -6, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={profileImg}
            alt="Vishal Chennaboina"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold font-mono mb-2 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
        >
          Vishal Chennaboina
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-muted-foreground font-mono text-sm md:text-base mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          Full Stack Developer | AI/ML Engineer | QA Tester
        </motion.p>

        {/* Summary */}
        <motion.p
          className="text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        >
          Passionate about building scalable web applications and intelligent systems.
          Experienced in modern full-stack development and AI-driven solutions.
          Focused on clean architecture, performance, and impactful user experiences.
        </motion.p>

        {/* Location */}
        <motion.div
          className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
        >
          <MapPin className="h-4 w-4" />
          <span>India / Remote / Hybrid</span>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
        >
          <a href="/Chennaboina_vishal_Resume.pdf" download>
             <Button
              size="lg"
             className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.03] rounded-xl"
            >
          <Download className="h-4 w-4 mr-2" />
            Download Resume
          </Button>
          </a>  

          <Button
            size="lg"
            variant="outline"
            className="hover:scale-[1.03] transition-all duration-300 rounded-xl border-border"
            onClick={() =>
              document.getElementById("support")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
        >
          <a
            href="https://github.com/vishalchennaboina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/vishal-chennaboina-447249326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="mailto:vishalch1907@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

      </GlassCard>
    </motion.div>
  </section>
);

export default ProfileSection;