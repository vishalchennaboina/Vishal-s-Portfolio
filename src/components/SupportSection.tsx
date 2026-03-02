import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import GlassCard from "./GlassCard";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const SupportSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <motion.section
      id="support"
      className="section-padding max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2 text-center">
        <span className="gradient-text">Support & Contact</span>
      </h2>
      <div className="w-16 h-0.5 bg-foreground/20 rounded-full mb-12 mx-auto" />

      <GlassCard hover={false} className="p-8 md:p-12">
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <div>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary/50 border-border rounded-xl h-12"
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-secondary/50 border-border rounded-xl h-12"
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-secondary/50 border-border resize-none rounded-xl"
            />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-xl h-12 transition-all duration-300 hover:scale-[1.03]"
          >
            {loading ? "Sending..." : <><Send className="h-4 w-4 mr-2" /> Send Message</>}
          </Button>
        </motion.form>

        <motion.div
          className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors p-2">
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </GlassCard>
    </motion.section>
  );
};

export default SupportSection;
