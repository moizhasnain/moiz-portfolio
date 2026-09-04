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
  I'm Moiz Hasnain, an SEO Executive with over more than two years of hands-on
  experience turning search visibility into measurable business growth.
  My expertise spans On-Page SEO, Off-Page SEO, Technical SEO, Generative
  Engine Optimization (GEO), and Answer Engine Optimization (AEO) —
  helping businesses improve their presence across both traditional search
  engines and AI-powered search experiences.
</p>

<p>
  I approach SEO the way an analyst approaches a problem: audit first,
  prioritize by impact, then execute. That means fixing crawlability and
  indexation issues before chasing content volume, mapping keywords to
  real search intent rather than vanity terms, optimizing content for
  featured snippets and AI-generated answers, and building links that
  strengthen authority without putting a site at risk.
</p>

<p>
  Beyond SEO, I also manage social media platforms and paid advertising
  campaigns. I have experience handling social media strategy, content
  planning, audience engagement, and running Meta Ads (Facebook &
  Instagram Ads) focused on increasing brand awareness, generating leads,
  and driving conversions.
</p>

<p>
  That approach has carried across a deliberately varied set of
  industries — automotive, security, beauty & wellness, spa & salon,
  and car accessories — each with its own search behavior, competitive
  landscape, and definition of a qualified visitor. What stays constant
  is a data-driven process and a bias toward results that show up in the
  numbers, not just the reporting deck.
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
