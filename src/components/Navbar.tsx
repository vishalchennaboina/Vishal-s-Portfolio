import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/#support" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
      style={{
        background: "hsl(var(--glass-bg))",
        borderColor: "hsl(var(--glass-border))",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="font-mono text-lg font-bold text-foreground">
          {"<Dev />"}
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.href.startsWith("/") && !item.href.startsWith("/#") ? (
              <Link
                key={item.label}
                to={item.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-secondary"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-secondary"
              >
                {item.label}
              </button>
            )
          )}
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden backdrop-blur-xl border-t"
            style={{
              background: "hsl(var(--glass-bg))",
              borderColor: "hsl(var(--glass-border))",
            }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) =>
                item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="px-3 py-2 text-sm text-left text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-secondary"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
