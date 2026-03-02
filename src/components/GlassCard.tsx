import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true, ...props }: GlassCardProps) => (
  <motion.div
    className={cn(
      "glass p-6 h-full flex flex-col",
      hover && "hover-lift cursor-pointer",
      className
    )}
    whileHover={hover ? { scale: 1.03 } : undefined}
    transition={{ duration: 0.2 }}
    {...props}
  >
    {children}
  </motion.div>
);

export default GlassCard;
