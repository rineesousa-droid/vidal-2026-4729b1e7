import { territory } from "@/content/eduardo";

export function Territory() {
  return (
    <section id="territorio" className="bg-surface-strong py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="reveal max-w-3xl">
          <p className="eyebrow text-royal">{territory.eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.4vw,3.4rem)] font-extrabold leading-[1.03] text-navy">
            {territory.title}
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/75">
            {territory.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>

        <div id="realizacoes" className="mt-16 scroll-mt-28">
          <p className="eyebrow reveal text-royal">O que ele já fez</p>
          <div className="mt-6 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {territory.done.map((d, i) => (
              <div
                key={d.title}
                className="reveal bg-background p-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-display text-4xl font-black text-navy/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold uppercase leading-snug text-navy">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
