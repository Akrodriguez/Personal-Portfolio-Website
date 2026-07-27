"use client";

import { motion } from "framer-motion";

const focusAreas = [
  "Full-Stack Development",
  "Software Engineering",
  "AI",
  "Data Science",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-transparent px-6 py-20 sm:py-24 lg:px-8"
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
            About
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Building at the intersection of software and data.
          </h2>
        </motion.div>

        {/* Right Side Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
            hover:border-cyan-400/30
            hover:shadow-cyan-500/10
            sm:p-8
          "
        >
          <div className="space-y-5 text-base leading-8 text-white/75">
            <p>
              I'm a Computer Science student at JIIT passionate about full-stack development, 
              software engineering, artificial intelligence, 
              and high-performance computing.
            </p>

            <p>
              I enjoy building practical products, working with modern web
              technologies, and applying machine learning techniques to solve
              real-world problems.
            </p>

            <p>
             Through internships in High Performance Computing (HPC) and Data Science, 
             along with projects like SmartGym AI, FraudLens, and InsightAir, 
             I've gained hands-on experience in software development, GPU computing, 
             and AI-driven solutions.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-cyan-200
                "
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}