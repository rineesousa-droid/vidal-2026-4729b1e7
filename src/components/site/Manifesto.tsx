import { manifesto } from "@/content/eduardo";

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-royal py-24 text-white md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(115deg,#fff_0_2px,transparent_2px_16px)]"
      />
      <div className="relative mx-auto max-w-[1000px] px-5 text-center md:px-8">
        <p className="eyebrow text-brand-yellow">Manifesto</p>
        <blockquote className="mt-6 space-y-3 font-display text-[clamp(1.7rem,4vw,2.8rem)] font-extrabold leading-[1.08]">
          <p>{manifesto[0]}</p>
          <p className="text-white/75">{manifesto[1]}</p>
          <p className="text-brand-yellow">{manifesto[2]}</p>
        </blockquote>
        <p className="mt-8 eyebrow text-white/60">Eduardo Vidal · Deputado Federal · 2023</p>
      </div>
    </section>
  );
}
