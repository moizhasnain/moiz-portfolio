"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years experience" },
  { value: "5", label: "Industries served" },
  { value: "GEO", label: "Core specialty" },
  { value: "AEO", label: "Core specialty" },
  { value: "Technical SEO", label: "Core specialty" },
  { value: "On-Page SEO", label: "Core specialty" },
  { value: "Off-Page SEO", label: "Core specialty" },
  { value: "Meta Ads", label: "Core specialty" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="dot-grid absolute inset-0 bg-grid-fade opacity-60" />
      <div className="container-content relative grid grid-cols-1 gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center"
        >
          <motion.span variants={item} className="text-sm font-medium text-accent">
            SEO Executive · Lahore, Pakistan
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-[2.4rem] font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl md:text-[3.1rem]"
          >
            SEO executive driving organic growth through data-driven SEO strategies
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-muted">
            Helping businesses improve search visibility, increase keyword
            rankings, and generate sustainable organic growth through On-page SEO, Off-page SEO, 
            and Technical SEO strategies, content optimization, and strategic link building.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#case-studies"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accentSoft"
            >
              View case studies
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              Contact me
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label + s.value}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="tabular text-xl font-semibold text-text">{s.value}</dd>
                <div className="mt-1 text-[13px] text-muted">{s.label}</div>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-sm items-center justify-center md:max-w-none"
        >
          <div className="relative w-full max-w-[380px]">
            <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/40">
              <img
                src="/profile.jpg"
                alt="Portrait of Moiz Hasnain, SEO Executive"
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
