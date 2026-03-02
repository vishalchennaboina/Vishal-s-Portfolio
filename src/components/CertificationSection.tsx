import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "./SectionWrapper";
import GlassCard from "./GlassCard";
import { certifications } from "@/data/certifications";

const CertificationsSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const cert = certifications.find((c) => c.id === selected);

  return (
    <SectionWrapper id="certifications">
      <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
        <span className="gradient-text">Certifications</span>
      </h2>
      <div className="w-16 h-0.5 bg-foreground/20 rounded-full mb-8" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: "easeInOut" }}
          >
            <GlassCard onClick={() => setSelected(c.id)} className="group">
              <Award className="h-8 w-8 text-foreground mb-3" />
              <h3 className="font-mono text-sm font-bold mb-1 group-hover:text-muted-foreground transition-colors">{c.title}</h3>
              <p className="text-xs text-muted-foreground mb-2">{c.issuer}</p>
              <Badge variant="secondary" className="text-xs font-mono">{c.date}</Badge>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {cert && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setSelected(null)} />
            <motion.div className="relative glass max-w-md w-full p-8 text-center" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
              <Award className="h-16 w-16 text-foreground mx-auto mb-4" />
              <h3 className="font-mono text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground mb-1">{cert.issuer}</p>
              <Badge variant="secondary" className="font-mono mb-6">{cert.date}</Badge>
              {cert.credentialUrl && (
                <div>
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground hover:underline">
                    View Credential <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default CertificationsSection;
