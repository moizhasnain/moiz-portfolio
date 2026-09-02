import { tools } from "@/lib/data";

export default function Tools() {
  return (
    <section id="tools" className="border-b border-line py-24">
      <div className="container-content">
        <h2 className="text-3xl font-semibold tracking-tight text-text">
          Tools
        </h2>
        <p className="mt-4 max-w-[46ch] text-muted">
          The daily toolkit for audits, research, tracking, and reporting.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-5">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center justify-center gap-3 bg-bg px-4 py-10 text-center"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-sm font-semibold text-accent">
                {tool.short}
              </span>
              <span className="text-sm text-muted">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
