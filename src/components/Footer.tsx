import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Built with</span>
        <Heart className="h-3 w-3 text-foreground fill-foreground" />
        <span>by <span className="font-mono text-foreground">John Developer</span></span>
      </div>

      <nav className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
        <a href="#support" className="hover:text-foreground transition-colors">Support</a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github className="h-4 w-4" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </div>
    <div className="text-center text-xs text-muted-foreground mt-6">
      © {new Date().getFullYear()} All rights reserved.
    </div>
  </footer>
);

export default Footer;
