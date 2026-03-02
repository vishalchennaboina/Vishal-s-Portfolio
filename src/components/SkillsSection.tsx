import { motion } from "framer-motion";
import { Monitor, Server, Brain, Database, Wrench } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, typeof Monitor> = { Monitor, Server, Brain, Database, Wrench };

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
      <span className="gradient-text">Skills</span>
    </h2>
    <div className="w-16 h-0.5 bg-foreground/20 rounded-full mb-8" />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((cat, i) => {
        const Icon = iconMap[cat.icon] || Monitor;
        return (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: "easeInOut" }}
          >
            <GlassCard hover={false} className="h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-foreground">
                  <Icon className="h-4 w-4 text-background" />
                </div>
                <h3 className="font-mono font-semibold">{cat.category}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full bg-foreground rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
