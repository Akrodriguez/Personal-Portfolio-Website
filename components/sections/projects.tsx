"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-transparent px-6 py-20 sm:py-24 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Featured Work
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Projects built for real product and data problems.
          </h2>

          <p className="mt-4 text-base leading-7 text-white/75">
            A focused mix of full-stack engineering, machine learning, and data
            analysis work.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className={`
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/15
                  bg-white/[0.05]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/40
                  hover:bg-white/[0.07]
                  hover:shadow-xl
                  hover:shadow-cyan-500/10
                  ${isFeatured ? "lg:col-span-2" : ""}
                `}
              >
                <div
                  className={`grid ${
                    isFeatured ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`
                      relative overflow-hidden bg-slate-950/50
                      border-b border-white/10
                      ${
                        isFeatured
                          ? "min-h-[420px] lg:border-b-0 lg:border-r"
                          : "min-h-[260px]"
                      }
                    `}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={isFeatured}
                      sizes={isFeatured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
                      className="object-contain p-6 brightness-125 contrast-110 transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                    {project.imageTitle}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 sm:p-8 ${isFeatured ? "lg:p-10" : ""}`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                        {project.category}
                      </span>

                      {isFeatured && (
                        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                          Flagship
                        </span>
                      )}
                    </div>

                    <h3
                      className={`mt-5 font-display font-semibold tracking-tight text-white ${
                        isFeatured
                          ? "text-3xl sm:text-4xl"
                          : "text-2xl"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                      {project.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-6 space-y-3 text-sm leading-6 text-white/70">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={project.githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-disabled={!project.githubUrl}
                        className="
                          inline-flex
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/15
                          bg-white/[0.06]
                          px-5
                          py-3
                          text-sm
                          font-semibold
                          text-white
                          transition-all
                          hover:border-cyan-400/40
                          hover:bg-cyan-400/10
                          aria-disabled:pointer-events-none
                          aria-disabled:opacity-50
                        "
                      >
                        <span className="mr-2">🔗</span>
                        GitHub
                      </a>

                      <a
                        href={project.demoUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-disabled={!project.demoUrl}
                        className="
                          inline-flex
                          items-center
                          justify-center
                          rounded-full
                          bg-cyan-400
                          px-5
                          py-3
                          text-sm
                          font-semibold
                          text-slate-950
                          transition-all
                          hover:scale-[1.02]
                          hover:bg-cyan-300
                          aria-disabled:pointer-events-none
                          aria-disabled:opacity-50
                        "
                      >
                        <ExternalLink className="mr-2 size-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}