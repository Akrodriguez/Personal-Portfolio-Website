"use client";

import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Data Science",
    skills: ["Pandas", "NumPy", "Scikit-Learn"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "VS Code", "Linux"],
  },
  {
    title: "High Performance Computing",
    skills: ["CUDA", "OpenMP", "GPU Computing", "Linux", "PyTorch"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-transparent px-6 py-20 sm:py-24 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practical stack for full-stack and data-focused work.
          </h2>

          <p className="mt-4 text-base leading-7 text-white/75">
            A focused set of technologies used across projects, internships,
            and applied problem solving.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="
                rounded-3xl
                border
                border-white/15
                bg-white/[0.05]
                p-6
                shadow-2xl
                shadow-black/30
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-white/[0.07]
                hover:shadow-cyan-500/10
              "
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-400/10
                      px-3
                      py-1.5
                      text-sm
                      font-medium
                      text-cyan-200
                      transition-colors
                      hover:border-cyan-300/40
                      hover:bg-cyan-400/15
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}