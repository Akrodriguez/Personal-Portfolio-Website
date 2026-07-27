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
    role: "High Performance Computing (HPC) Summer Intern",
    company: "Jaypee Institute of Information Technology",
    location: "Noida, India",
    duration: "June 2026 – July 2026 • 2 Months",
    description:
      "Developed HPC-MedVision, an end-to-end brain tumor segmentation pipeline on the Ramanujan Universe Supercomputer using OpenMP, CUDA, and PyTorch U-Net. Accelerated MRI preprocessing, implemented GPU image enhancement, and benchmarked Sequential CPU, OpenMP, and CUDA performance on the LGG MRI dataset",
    achievements: [
      "Implemented OpenMP-based parallel preprocessing for MRI image loading, resizing, normalization, and histogram computation.",
      "Developed CUDA kernels for Gaussian Blur, Histogram Equalization, and Sobel Edge Detection for GPU-accelerated image enhancement.",
      "Trained and evaluated a PyTorch U-Net on the LGG MRI dataset (110 patients, 3,929 MRI slice–mask pairs).",
      "Benchmarked Sequential CPU, OpenMP, and CUDA implementations, achieving up to 6× preprocessing speedup on the Ramanujan Universe Supercomputer.",
    ],
    technologies: [
      "CUDA",
      "OpenMP",
      "PyTorch",
      "C++",
      "Python",
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