export type Experience = {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    role: "Data Science Intern",
    company: "The Developers Arena",
    location: "Remote",
    duration: "1 month",
    description:
      "Worked as a Data Science Intern, applying Python-based data analysis and machine learning workflows to practical datasets and problem statements.",
    achievements: [
      " Performed data cleaning, preprocessing, and transformation on real-world datasets",
      "Built predictive machine learning models and evaluated performance using appropriate metrics",
      " Conducted exploratory data analysis to identify trends, patterns, and actionable insights",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
  },
];