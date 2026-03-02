import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggle} className="relative">
      <Sun className={`h-5 w-5 transition-all ${dark ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
      <Moon className={`absolute h-5 w-5 transition-all ${dark ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
