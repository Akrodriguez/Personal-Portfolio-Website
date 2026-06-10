export type Project = {
  slug: string;
  title: string;
  imageTitle: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
  featured: boolean;
  highlights: string[];
  category: string;    // ← also add this (your JSX uses project.category)
  summary: string;     // ← and this (your JSX uses project.summary)
};

export const projects: Project[] = [
  {
    slug: "smartgym-ai",           // ← add
    category: "Full-Stack",        // ← add
    summary: "AI-powered fitness platform for Exercise Pose correction and diet planning.",
    title: "SmartGym AI",
    imageTitle: "SmartGym AI",
    description: "AI-powered fitness platform for Exercise Pose correction and diet planning.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/Akrodriguez/SmartGym-AI",
    demoUrl: "https://smart-gym-ai.vercel.app",
    image: "/images/smartgym-ai-1.svg",
    featured: true,
    highlights: [
      "AI-powered pose detection and form correction",
      "Personalized workout and diet planning",
      "Full-stack architecture with a typed frontend and relational database",
    ],
  },
  {
    slug: "fraud-detection-system",  // ← add
    category: "Machine Learning",    // ← add
    summary: "Machine learning project for detecting fraudulent activity using classification algorithms.",
    title: "FraudLens",
    imageTitle: "Fraud Detection System",
    description: "Machine learning project for detecting fraudulent activity using classification algorithms.",
    technologies: ["Python", "Pandas", "Scikit-Learn"],
    githubUrl: "https://github.com/Akrodriguez/FraudLens--Credit-Card-Fraud-Detection-",
    demoUrl: "https://fraudlens-project01.streamlit.app/",
    image: "/images/fraudlens.svg",
    featured: false,
    highlights: [
      "Data preprocessing and feature preparation",
      "Classification-based fraud prediction",
      "Model experimentation and evaluation workflow",
    ],
  },
  {
    slug: "air-quality-trend-analysis",  // ← add
    category: "Data Analysis",           // ← add
    summary: "Data analysis project exploring air quality trends through cleaning, visualization, and forecasting direction.",
    title: "InsightAir",
    imageTitle: "Air Quality Trend Analysis",
    description: "Data analysis project exploring air quality trends through cleaning, visualization, and forecasting direction.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/Akrodriguez/InsightAir--Air-Quality-Trend-Analysis-System",
    demoUrl: "https://insight-air-air-quality-trend-analy-rho.vercel.app/",
    image: "/images/insight-air.svg",
    featured: false,
    highlights: [
      "Historical air quality trend analysis",
      "Visualizations for communicating changes over time",
      "Forecasting-oriented exploration from past patterns",
    ],
  },
];