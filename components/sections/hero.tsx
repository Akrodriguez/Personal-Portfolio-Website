"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, BriefcaseBusiness, Download, GraduationCap, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const signalItems = [
  {
    label: "Education",
    value: "Computer Science @ JIIT",
    icon: GraduationCap,
  },
  {
    label: "Latest Experience",
    value: "High Performance Computing (HPC) Intern @ JIIT",
    icon: BriefcaseBusiness,
  },
  {
    label: "Focus",
    value: "Full-Stack, AI, Data Science",
    icon: ArrowDownRight,
  },
];

export function Hero() {
  const studentLine = `${site.title} at ${site.institution}`;

  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden px-6 py-24 text-[#F8FAFC] sm:py-28 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
        className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        <div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex rounded-full border border-[#38BDF8]/25 bg-[#38BDF8]/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-[#38BDF8]"
          >
            {site.availability.status}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-[#F8FAFC] sm:text-6xl lg:text-8xl"
          >
            {site.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-6 space-y-2 text-base font-medium text-[#94A3B8] sm:text-lg"
          >
            <p className="text-[#F8FAFC]">{studentLine}</p>
            <p>{site.currentRole}</p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-lg leading-8 text-[#94A3B8] sm:text-xl"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="group justify-center bg-[#38BDF8] text-[#080A0F] hover:bg-[#38BDF8]/90"
            >
              <a href="#projects">
                View Projects
                <ArrowDownRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="justify-center bg-[#111827] text-[#F8FAFC] hover:bg-[#111827]/80"
            >
              <a href={site.links.resume} download>
                Download Resume
                <Download className="ml-2 size-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="justify-center border-white/10 bg-transparent text-[#F8FAFC] hover:bg-white/5 hover:text-[#F8FAFC]"
            >
              <a href={site.links.email ? `mailto:${site.links.email}` : "#contact"}>
                Contact
                <Mail className="ml-2 size-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.aside
          variants={fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative rounded-[2rem] border border-white/10 bg-[#111827] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-8"
        >
          <div className="absolute -right-16 -top-16 size-40 rounded-full bg-[#38BDF8]/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 size-40 rounded-full bg-[#8B5CF6]/20 blur-3xl" />

          <div className="relative">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#38BDF8]">
                  Recruiter Signal
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#F8FAFC]">
                  Job/Internship-ready profile
                </h2>
              </div>
              <div className="hidden rounded-full border border-[#38BDF8]/25 bg-[#38BDF8]/10 px-3 py-1 font-mono text-xs text-[#38BDF8] sm:block">
                Open
              </div>
            </div>

            <div className="space-y-4">
              {signalItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-[#080A0F]/50 p-4"
                  >
                    <div className="flex gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#38BDF8]/20 bg-[#38BDF8]/10 text-[#38BDF8]">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#94A3B8]">
                          {item.label}
                        </p>
                        <p className="mt-1 font-medium text-[#F8FAFC]">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 p-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#8B5CF6]">
                Target Roles
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {site.availability.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-white/10 bg-[#080A0F]/60 px-3 py-1 text-xs font-medium text-[#F8FAFC]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}