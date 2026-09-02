import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-24">
      <div className="container-content">
        <h2 className="text-3xl font-semibold tracking-tight text-text">
          Experience
        </h2>

        <div className="mt-12 space-y-10 border-l border-line pl-8">
          {experience.map((e) => (
            <div key={e.company} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                <h3 className="text-lg font-semibold text-text">{e.role}</h3>
                <span className="text-sm text-muted">{e.company}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{e.period}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {e.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="rounded-md border border-line px-3 py-1.5 text-sm text-muted"
                  >
                    {r}
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
