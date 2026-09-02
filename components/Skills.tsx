import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-24">
      <div className="container-content">
        <div className="max-w-[46ch]">
          <h2 className="text-3xl font-semibold tracking-tight text-text">
            Skills
          </h2>
          <p className="mt-4 text-muted">
            The full-funnel SEO skillset behind every project — from
            technical foundations to the content and links that build on
            top of them.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-line px-4 py-2 text-sm text-text transition-colors hover:border-accent hover:bg-accent/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
