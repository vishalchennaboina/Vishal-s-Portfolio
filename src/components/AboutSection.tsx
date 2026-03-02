import SectionWrapper from "./SectionWrapper";
import { Code2, Palette, Cpu, Coffee } from "lucide-react";
import GlassCard from "./GlassCard";

const highlights = [
  { icon: Code2, label: "Clean Code", description: "Writing maintainable, well-tested code" },
  { icon: Palette, label: "UI/UX Design", description: "Creating intuitive user experiences" },
  { icon: Cpu, label: "AI/ML", description: "Building intelligent systems" },
  { icon: Coffee, label: "Open Source", description: "Contributing to the community" },
];

const AboutSection = () => (
  <SectionWrapper id="about">
    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
      <span className="gradient-text">About Me</span>
    </h2>
    <div className="w-16 h-0.5 bg-foreground/20 rounded-full mb-8" />

    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          I'm a full-stack developer with experience in building web applications and
          exploring the intersection of software engineering and artificial intelligence.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          My journey started with building simple websites and evolved into architecting
          scalable distributed systems and training machine learning models. I believe in
          writing code that's not just functional, but elegant and maintainable.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          When I'm not coding, you'll find me reading research papers, contributing to
          open-source projects, or experimenting with the latest AI tools.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {highlights.map(({ icon: Icon, label, description }) => (
          <GlassCard key={label} className="p-4">
            <Icon className="h-6 w-6 text-foreground mb-2" />
            <h3 className="font-mono text-sm font-semibold mb-1">{label}</h3>
            <p className="text-xs text-muted-foreground">{description}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
