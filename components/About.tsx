import { industries } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-b border-line py-24">
      <div className="container-content grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-text">About</h2>
          <p className="mt-4 max-w-[46ch] text-muted">
            BS Information Technology · Township, Lahore, Pakistan
          </p>
        </div>

        <div className="space-y-5 text-[17px] leading-relaxed text-muted">
          <p>
            I'm Moiz Hasnain, an SEO Executive with over two years of hands-on
            experience turning search visibility into measurable business
            growth. My work sits across On-page SEO, Off-page SEO, and Technical SEO — the three levers that most reliably move organic
            traffic for the businesses I work with.
          </p>
          <p>
            I approach SEO the way an analyst approaches a problem: audit
            first, prioritize by impact, then execute. That means fixing
            crawlability and indexation issues before chasing content volume,
            mapping keywords to real search intent rather than vanity terms,
            and building links that move authority scores without putting a
            site at risk.
          </p>
          <p>
            That approach has carried across a deliberately varied set of
            industries — automotive, security, beauty & wellness, spa &
            salon, and car accessories — each with its own search behavior,
            competitive landscape, and definition of a qualified visitor.
            What stays constant is a data-driven process and a bias toward
            results that show up in the numbers, not just the reporting deck.
          </p>

          <div className="pt-4">
            <h3 className="text-sm font-medium text-text">Industries worked in</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {industries.map((ind) => (
                <li
                  key={ind}
                  className="rounded-md border border-line px-3 py-1.5 text-sm text-muted"
                >
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
