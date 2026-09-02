import { certifications, clientHighlights } from "@/lib/data";
import { BadgeCheck } from "lucide-react";

export default function CredentialsAndHighlights() {
  return (
    <section id="highlights" className="border-b border-line py-24">
      <div className="container-content grid grid-cols-1 gap-16 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-text">
            Certifications
          </h2>
          <ul className="mt-8 space-y-4">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-start gap-3">
                <BadgeCheck size={20} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-[15px] font-medium text-text">{c.name}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-text">
            Client success highlights
          </h2>
          <p className="mt-4 max-w-[52ch] text-muted">
            A summary of outcomes delivered across engagements, presented
            as verified results rather than quoted testimonials.
          </p>

          <div className="mt-8 space-y-6">
            {clientHighlights.map((h) => (
              <div key={h.title} className="border-l-2 border-accent pl-5">
                <h3 className="text-[15px] font-semibold text-text">{h.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">
                  {h.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
