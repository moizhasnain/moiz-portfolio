import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-24">
      <div className="container-content">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-[46ch]">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              Featured projects
            </h2>
            <p className="mt-4 text-muted">
              Six live engagements spanning automotive, security, and
              beauty & wellness — each with a defined scope of services.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {projects.map((p) => (
            <div key={p.name} className="flex flex-col gap-5 bg-bg p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-text">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {p.industry} · {p.role}
                  </p>
                </div>
                {p.hasCaseStudy && (
                  <a
                    href={`#case-${p.slug}`}
                    aria-label={`View case study for ${p.name}`}
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <p className="tabular text-sm font-medium text-accent">{p.headline}</p>

              <ul className="flex flex-wrap gap-2">
                {p.services.map((s) => (
                  <li
                    key={s}
                    className="rounded-md bg-surface px-2.5 py-1 text-xs text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
