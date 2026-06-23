import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, BookOpen } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Memory Stories — Voices Goonj has preserved" },
      { name: "description", content: "Real families. Real voices. The recipes, festivals, advice, and everyday moments preserved through Goonj." },
      { property: "og:title", content: "Goonj — Memory Stories" },
      { property: "og:description", content: "The voices, recipes, and stories Goonj has helped families keep." },
      { property: "og:url", content: "/stories" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: Stories,
});

type Tag = "All" | "Recipe" | "Festival" | "Health" | "Everyday" | "Prayer";
const tags: Tag[] = ["All", "Recipe", "Festival", "Health", "Everyday", "Prayer"];

const stories = [
  { tag: "Recipe", name: "Jaipur → London", title: "Dadi's haldi doodh, remembered", quote: "I asked Goonj how dadi made her turmeric milk. Three seconds later, I heard her voice — from three years ago — explaining it exactly.", color: "#E8A84C", initials: "RS" },
  { tag: "Festival", name: "Ahmedabad → New Jersey", title: "Nana's Diwali prayer, every year", quote: "Every Diwali, Goonj plays back nana's prayer from the first year we used it. It feels like he's still here with us.", color: "#C4604A", initials: "PM" },
  { tag: "Health", name: "Chennai → Sydney", title: "When amma mentioned chest pain in passing", quote: "Goonj flagged that amma had mentioned chest pain in three separate voice notes. We had no idea. Her doctor caught it early.", color: "#6B3FA0", initials: "KI" },
  { tag: "Everyday", name: "Lucknow → Dubai", title: "Baba's bedtime stories, forever", quote: "My 4-year-old asks Goonj to play 'dadaji's story' every night. He never met him. But now he knows his voice.", color: "#E8A84C", initials: "ST" },
  { tag: "Recipe", name: "Hyderabad → California", title: "The recipe she never wrote down", quote: "Amma always said she'd teach me her biryani 'next time.' There was no next time. Goonj had saved four voice notes where she described it.", color: "#319795", initials: "MV" },
  { tag: "Prayer", name: "Varanasi → Toronto", title: "Morning prayers from 8,000 km away", quote: "Every morning, nani sends a voice note with her prayers. Goonj archives them all. My daughter listens to them before school.", color: "#ED8936", initials: "AR" },
];

function Stories() {
  const [active, setActive] = useState<Tag>("All");
  const filtered = active === "All" ? stories : stories.filter((s) => s.tag === active);
  const [featured, ...rest] = stories;

  return (
    <>
      <section className="container-x pt-12 pb-12 md:pt-20 md:pb-16">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="chip mb-6 flex items-center gap-2 justify-center"><BookOpen className="w-4 h-4" /> Memory stories</span>
          <h1 className="font-display text-plum text-4xl md:text-6xl leading-[1.05] mb-5" style={{ fontWeight: 500, letterSpacing: "-0.5px" }}>
            The voices we got to keep.
          </h1>
          <p className="text-lg text-warmgray">
            A small collection from families in early access. Recipes, festivals, health
            wisdom, and small Sundays — preserved in the voice that gave them.
          </p>
        </Reveal>
      </section>

      {/* Featured */}
      <section className="container-x mb-16">
        <Reveal>
          <div className="grid md:grid-cols-[1.1fr_1fr] rounded-2xl overflow-hidden card-warm">
            <div className="aspect-[4/3] md:aspect-auto relative flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${featured.color}, var(--plum))` }}>
              <div className="font-display text-ivory text-[100px] leading-none opacity-90" style={{ fontWeight: 500 }}>
                {featured.initials}
              </div>
              <span className="absolute top-5 left-5 chip flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.85)" }}>
                <Star className="w-3.5 h-3.5" /> Featured story
              </span>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="chip self-start mb-4" style={{ background: "var(--linen)" }}>{featured.tag}</span>
              <h2 className="font-display text-plum text-2xl md:text-3xl leading-[1.2] mb-4" style={{ fontWeight: 500 }}>
                {featured.title}
              </h2>
              <blockquote className="font-display italic text-espresso/80 text-lg leading-[1.5] mb-6">
                "{featured.quote}"
              </blockquote>
              <div className="text-sm text-warmgray mb-6">— {featured.name}</div>
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-setup-modal'))} className="btn-pill btn-plum self-start cursor-pointer">
                Preserve your family's recipes <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Filter bar */}
      <section className="container-x mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`btn-pill text-sm px-5 py-2 transition-all ${
                active === t ? "btn-plum" : "btn-ghost-plum"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container-x pb-24">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {(active === "All" ? rest : filtered).map((s, i) => (
              <motion.div
                key={`${s.name}-${s.title}`}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
              >
                <motion.div whileHover={{ y: -4 }} className="card-warm h-full flex flex-col overflow-hidden">
                  <div className="aspect-[5/3] relative flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${s.color}, var(--plum))` }}>
                    <div className="font-display text-ivory text-[80px] leading-none opacity-95" style={{ fontWeight: 500 }}>
                      {s.initials}
                    </div>
                    <span className="absolute top-3 right-3 chip text-[11px]" style={{ background: "rgba(255,255,255,0.85)" }}>
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display text-plum text-lg leading-[1.3] mb-3" style={{ fontWeight: 500 }}>
                      {s.title}
                    </h3>
                    <blockquote className="text-sm italic text-espresso/75 leading-relaxed mb-4 flex-1">
                      "{s.quote}"
                    </blockquote>
                    <div className="text-xs text-warmgray">— {s.name}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-14">
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-setup-modal'))} className="btn-pill btn-marigold cursor-pointer">
            Share your story →
          </button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
