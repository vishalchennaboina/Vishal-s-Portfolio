import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => (
  <motion.section
    id={id}
    className={`section-padding max-w-6xl mx-auto ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
