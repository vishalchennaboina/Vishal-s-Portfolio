import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SectionWrapper from "./SectionWrapper";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactSection = () => {
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
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
        <span className="gradient-text">Get In Touch</span>
      </h2>
      <div className="w-16 h-1 gradient-bg rounded-full mb-8" />

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to 
            be part of your vision. Feel free to reach out!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">hello@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary/50 border-border"
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-secondary/50 border-border"
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-secondary/50 border-border resize-none"
            />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" disabled={loading} className="gradient-bg text-primary-foreground hover:opacity-90 w-full">
            {loading ? "Sending..." : <><Send className="h-4 w-4 mr-2" /> Send Message</>}
          </Button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
