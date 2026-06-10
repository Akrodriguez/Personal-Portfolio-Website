"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const snapshotCards = [
  {
    title: "Computer Science @ JIIT",
    description:
      "CS student building a strong base in software engineering and problem solving.",
    icon: GraduationCap,
  },
  {
    title: "Data Science Intern",
    description:
      "Previously interned at The Developers Arena working with practical data workflows.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Full-Stack + AI Projects",
    description:
      "Projects span React, TypeScript, Node.js, PostgreSQL, Python, and ML.",
    icon: Code2,
  },
  {
    title: "Open to Internships",
    description:
      "Seeking software engineering, full-stack, data science, and AI/ML roles.",
    icon: Sparkles,
  },
];

export default function RecruiterSnapshot() {
  return (
    <section className="relative px-6 py-24 lg:px-8">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
            Recruiter Snapshot
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The signal in 10 seconds.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {snapshotCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="
                  group
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  p-5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/40
                  hover:bg-white/[0.06]
                  hover:shadow-lg
                  hover:shadow-cyan-500/10
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    size-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-400/30
                    bg-cyan-400/10
                    text-cyan-300
                    shadow-lg
                    shadow-cyan-500/10
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:shadow-cyan-500/20
                  "
                >
                  <Icon className="size-5 stroke-[2.25]" />
                </div>

                <h3 className="font-display text-lg font-semibold leading-tight text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}