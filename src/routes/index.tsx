import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Pillars } from "@/components/site/Pillars";
import { Territory } from "@/components/site/Territory";
import { ActionGallery } from "@/components/site/ActionGallery";
import { Manifesto } from "@/components/site/Manifesto";
import { Participate } from "@/components/site/Participate";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useReveal } from "@/hooks/useReveal";

const title = "Eduardo Vidal 2023 — Deputado Federal por São Paulo";
const description =
  "Trabalho antes do mandato: conheça a história, as bandeiras e o que Eduardo Vidal já fez em Brasília, candidato a Deputado Federal por São Paulo em 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Eduardo Vidal",
          jobTitle: "Candidato a Deputado Federal por São Paulo",
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <About />
        <Pillars />
        <Territory />
        <ActionGallery />
        <Manifesto />
        <Participate />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
