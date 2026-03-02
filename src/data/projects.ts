export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ai-chatbot",
    title: "AI Chatbot Platform",
    description: "An intelligent conversational AI platform built with modern NLP techniques and real-time streaming responses.",
    longDescription: "A full-stack AI chatbot platform featuring real-time streaming responses, context-aware conversations, and multi-model support. Built with a React frontend and Python FastAPI backend, leveraging transformer models for natural language understanding.\n\nKey features include conversation history, model switching, prompt templates, and an admin dashboard for monitoring usage and performance metrics.",
    techStack: ["React", "TypeScript", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Analytics Dashboard",
    description: "Real-time analytics dashboard for e-commerce platforms with interactive charts and predictive insights.",
    longDescription: "A comprehensive analytics dashboard providing real-time insights for e-commerce businesses. Features include sales tracking, customer behavior analysis, inventory management, and ML-powered demand forecasting.\n\nThe dashboard processes millions of events daily and presents actionable insights through interactive visualizations.",
    techStack: ["Next.js", "D3.js", "Node.js", "MongoDB", "Redis", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: "ml-pipeline",
    title: "ML Pipeline Orchestrator",
    description: "Automated machine learning pipeline for data preprocessing, model training, and deployment.",
    longDescription: "An end-to-end ML pipeline orchestration tool that automates the entire machine learning lifecycle — from data ingestion and preprocessing to model training, evaluation, and deployment.\n\nSupports multiple ML frameworks, automatic hyperparameter tuning, and A/B testing for model deployment.",
    techStack: ["Python", "TensorFlow", "Kubernetes", "Airflow", "MLflow"],
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "devops-monitor",
    title: "DevOps Monitoring Tool",
    description: "Infrastructure monitoring solution with alerting, log aggregation, and performance tracking.",
    longDescription: "A lightweight DevOps monitoring solution that provides real-time infrastructure health monitoring, log aggregation, and intelligent alerting.\n\nDesigned for small to mid-size teams who need observability without the complexity of enterprise solutions.",
    techStack: ["Go", "React", "Prometheus", "Grafana", "Docker"],
    githubUrl: "https://github.com",
  },
  {
    id: "task-manager",
    title: "Smart Task Manager",
    description: "AI-powered task management app with smart prioritization and natural language input.",
    longDescription: "A modern task management application that uses AI to automatically prioritize tasks, suggest deadlines, and group related items. Features natural language task creation and smart scheduling.\n\nIncludes team collaboration features, Kanban boards, and integration with popular tools.",
    techStack: ["React", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "api-gateway",
    title: "API Gateway Service",
    description: "High-performance API gateway with rate limiting, authentication, and request transformation.",
    longDescription: "A lightweight, high-performance API gateway built in Go. Features include intelligent rate limiting, JWT authentication, request/response transformation, and real-time analytics.\n\nDesigned for microservice architectures with support for service discovery and load balancing.",
    techStack: ["Go", "Redis", "Docker", "Nginx", "gRPC"],
    githubUrl: "https://github.com",
  },
];
