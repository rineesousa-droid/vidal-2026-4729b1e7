import { about, candidate } from "@/content/eduardo";

export function About() {
  return (
    <section id="quem-e" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div className="reveal">
            <p className="eyebrow text-royal">Quem é</p>
            <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.02] text-navy">
              Um articulador que aprendeu a política pelo lado do problema.
            </h2>
            <div className="mt-8 border-l-2 border-brand-yellow pl-6">
              <p className="font-display text-lg font-semibold italic leading-snug text-navy">
                “{about.quote}”
              </p>
              <p className="mt-4 leading-relaxed text-foreground/75">{about.support}</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {candidate.name}
              </p>
            </div>
          </div>

          <div
            className="reveal space-y-6 text-lg leading-relaxed text-foreground/80"
            style={{ transitionDelay: "120ms" }}
          >
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
