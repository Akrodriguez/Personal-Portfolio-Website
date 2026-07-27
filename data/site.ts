export type SiteProfile = {
  name: string;
  title: string;
  institution: string;
  currentRole: string;
  tagline: string;
  availability: {
    status: string;
    roles: string[];
  };
  links: {
    github: string;
    linkedin: string;
    email: string;
    resume: string;
  };
};

export const site: SiteProfile = {
  name: "Ansh Kumar",
  title: "Computer Science Student",
  institution: "JIIT, Noida",
  currentRole: "HPC Intern at Jaypee Institute of Information Technology",
  tagline: "Building full-stack and data-driven products with a focus on software engineering, AI, and data science.",
  availability: {
    status: "Open to Job/internship opportunities",
    roles: [
      "Software Engineering Intern",
      "Full-Stack Developer Intern",
      "Data Science Intern",
      "AI/ML Intern",
    ],
  },
  links: {
    github: "https://github.com/Akrodriguez",
    linkedin: "https://www.linkedin.com/in/anshkumar07",
    email: "mailto:anshkr11c@gmail.com",
    resume: "/resume.pdf",
  },
};