"use client";

import { motion } from "framer-motion";
import { caseStudies, type Metric } from "@/lib/data";

function ChangeBar({ metric }: { metric: Metric }) {
  if (!metric.change) return null;
  const numeric = parseFloat(metric.change.replace(/[^0-9.-]/g, ""));
  const width = Math.min(Math.abs(numeric), 100);
  const isDown = metric.changeDirection === "down";

  return (
    <div className="mt-2 flex items-center gap-2">
      <div className="h-1 w-14 overflow-hidden rounded-full bg-surface2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.max(width, 6)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={isDown ? "h-full bg-rose-400" : "h-full bg-emerald-400"}
        />
      </div>
      <span className={`text-xs tabular ${isDown ? "text-rose-400" : "text-emerald-400"}`}>
        {metric.change}
      </span>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-b border-line py-24">
      <div className="container-content">
        <div className="max-w-[52ch]">
          <h2 className="text-3xl font-semibold tracking-tight text-text">
            Case studies
          </h2>
          <p className="mt-4 text-muted">
            Metrics below are pulled directly from SEMrush domain overview
            reports for each site, as of the date shown — no projected or
            estimated figures.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {caseStudies.map((cs) => (
            <motion.article
              key={cs.slug}
              id={`case-${cs.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="scroll-mt-24 rounded-lg border border-line bg-surface"
            >
              <div className="flex flex-col gap-4 border-b border-line p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-text">{cs.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {cs.domain} · {cs.industry} · {cs.role}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-xs uppercase tracking-wide text-muted">
                    Authority score
                  </div>
                  <div className="mt-1 tabular text-lg font-semibold text-accent">
                    {cs.authorityScore}{" "}
                    <span className="text-sm font-normal text-muted">
                      · {cs.authorityLabel}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-muted">Data as of {cs.dataAsOf}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-line border-b border-line sm:grid-cols-5">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="p-5">
                    <div className="text-xs text-muted">{m.label}</div>
                    <div className="tabular mt-1 text-2xl font-semibold text-text">
                      {m.value}
                    </div>
                    <ChangeBar metric={m} />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-medium text-text">Challenge</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {cs.challenge}
                  </p>

                  <h4 className="mt-6 text-sm font-medium text-text">Results</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {cs.results}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-text">Strategy</h4>
                  <ul className="mt-2 space-y-2">
                    {cs.strategy.map((s) => (
                      <li key={s} className="flex gap-2 text-[15px] leading-relaxed text-muted">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <h4 className="mt-6 text-sm font-medium text-text">Execution</h4>
                  <ul className="mt-2 space-y-2">
                    {cs.execution.map((s) => (
                      <li key={s} className="flex gap-2 text-[15px] leading-relaxed text-muted">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-line p-6">
                <div className="flex flex-wrap gap-2">
                  {cs.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-surface2 px-2.5 py-1 text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
