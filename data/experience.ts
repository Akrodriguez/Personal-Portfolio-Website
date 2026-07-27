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
    role: "High Performance Computing (HPC) Intern",
    company: "Jaypee Institute of Information Technology",
    location: "Noida, India",
    duration: "June 2026 – July 2026 • 2 Months",
    description:
      "Worked on the HPC-MedVision project, implementing GPU-accelerated brain tumor segmentation using MRI images on the Ramanujan Universe Supercomputer. Built an end-to-end medical image processing pipeline while exploring High Performance Computing techniques.",
    achievements: [
      "Implemented MRI image preprocessing including resizing, normalization, and histogram computation.",
      "Worked with the LGG Brain MRI dataset for tumor segmentation.",
      "Developed GPU-accelerated image processing workflows using CUDA.",
      "Optimized medical imaging tasks using High Performance Computing on the Ramanujan Universe Supercomputer.",
    ],
    technologies: [
      "CUDA",
      "C++",
      "Python",
      "OpenCV",
      "HPC",
      "GPU Computing",
      "Linux",
    ],
  },

  {
    role: "Data Science Intern",
    company: "The Developers Arena",
    location: "Remote",
    duration: "January 2026 – February 2026 • 2 Months",
    description:
      "Worked as a Data Science Intern, applying Python-based data analysis and machine learning workflows to practical datasets and problem statements.",
    achievements: [
      "Performed data cleaning, preprocessing, and transformation on real-world datasets.",
      "Built predictive machine learning models and evaluated performance using appropriate metrics.",
      "Conducted exploratory data analysis to identify trends, patterns, and actionable insights.",
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
    ],
  },
];