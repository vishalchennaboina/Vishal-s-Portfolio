export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-solutions-architect",
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialUrl: "https://aws.amazon.com/certification",
  },
  {
    id: "google-ml",
    title: "Google Machine Learning Engineer",
    issuer: "Google Cloud",
    date: "2025",
    credentialUrl: "https://cloud.google.com/certification",
  },
  {
    id: "meta-frontend",
    title: "Meta Frontend Developer Professional",
    issuer: "Meta / Coursera",
    date: "2024",
    credentialUrl: "https://www.coursera.org",
  },
  {
    id: "tensorflow-developer",
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2024",
    credentialUrl: "https://www.tensorflow.org/certificate",
  },
  {
    id: "github-actions",
    title: "GitHub Actions Certification",
    issuer: "GitHub",
    date: "2024",
    credentialUrl: "https://github.com",
  },
  {
    id: "docker-associate",
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2023",
    credentialUrl: "https://docker.com",
  },
];
