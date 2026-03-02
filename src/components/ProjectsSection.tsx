import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { projects, Project } from "@/data/projects";

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <GlassCard onClick={onClick} className="overflow-hidden group">
    {project.featured && (
      <Badge className="bg-foreground text-background mb-3 text-xs">Featured</Badge>
    )}
    <h3 className="font-mono text-lg font-bold mb-2 group-hover:text-muted-foreground transition-colors">
      {project.title}
    </h3>
    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.techStack.map((tech) => (
        <span key={tech} className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded-lg">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-3 mt-auto">
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => e.stopPropagation()}>
        <Github className="h-4 w-4" />
      </a>
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => e.stopPropagation()}>
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  </GlassCard>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} />
    <motion.div className="relative glass max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 md:p-8" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}>
      <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
        <X className="h-5 w-5" />
      </button>
      {project.featured && <Badge className="bg-foreground text-background mb-3">Featured</Badge>}
      <h2 className="font-mono text-2xl font-bold mb-4">{project.title}</h2>
      <div className="prose-blog whitespace-pre-line mb-6">{project.longDescription}</div>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-mono text-xs">{tech}</Badge>
        ))}
      </div>
      <div className="flex gap-3">
        <Button asChild variant="outline" size="sm" className="rounded-xl">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" /> GitHub
          </a>
        </Button>
        {project.liveUrl && (
          <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-xl">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
        <span className="gradient-text">Projects</span>
      </h2>
      <div className="w-16 h-0.5 bg-foreground/20 rounded-full mb-8" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8, ease: "easeInOut" }}>
            <ProjectCard project={project} onClick={() => setSelected(project)} />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProjectsSection;
