export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML / CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python / FastAPI", level: 85 },
      { name: "Express.js", level: 87 },
      { name: "REST / GraphQL", level: 85 },
      { name: "Go", level: 70 },
    ],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    skills: [
      { name: "TensorFlow / PyTorch", level: 80 },
      { name: "NLP / Transformers", level: 78 },
      { name: "Computer Vision", level: 72 },
      { name: "Data Analysis", level: 85 },
      { name: "MLOps", level: 70 },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Supabase", level: 82 },
      { name: "Firebase", level: 78 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "Wrench",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "AWS / GCP", level: 78 },
      { name: "Linux", level: 82 },
    ],
  },
];
