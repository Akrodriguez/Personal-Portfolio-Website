"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, MapPin, Timer } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-transparent px-6 py-20 sm:py-24 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Practical exposure beyond coursework.
          </h2>

          <p className="mt-4 text-base leading-7 text-white/75">
            Internship experience focused on data workflows, analysis, and
            applied machine learning fundamentals.
          </p>
        </motion.div>

        <div className="relative mt-12">
          {/* Timeline */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-cyan-400/40 to-transparent sm:block" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="relative sm:pl-14"
              >
                {/* Timeline Icon */}
                <div className="absolute left-0 top-6 hidden size-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-500/20 sm:flex">
                  <BriefcaseBusiness className="size-5" />
                </div>

                {/* Card */}
                <div className="rounded-3xl border border-white/15 bg-[#0F172A]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyan-500/10 sm:p-8">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                        {item.role}
                      </h3>

                      <p className="mt-2 text-base font-semibold text-cyan-300">
                        {item.company}
                      </p>
                    </div>

                    {/* Location + Duration */}
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-white/80">
                        <MapPin className="mr-2 size-4 text-cyan-300" />
                        {item.location}
                      </span>

                      <span className="inline-flex items-center rounded-full border border-white/15 bg-black/30 px-3 py-1 text-white/80">
                        <Timer className="mr-2 size-4 text-cyan-300" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="mt-8">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                      Achievements
                    </p>

                    <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3">
                          <span className="mt-2 size-2 shrink-0 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}