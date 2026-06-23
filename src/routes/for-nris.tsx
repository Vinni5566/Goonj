import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, ChevronDown, Plane, Clock, Heart } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";
import { Gungu } from "../components/Gungu";

export const Route = createFileRoute("/for-nris")({
  head: () => ({
    meta: [
      { title: "For NRI Families — Gift your parent's voice | Goonj" },
      { name: "description", content: "Your amma is 8,000 km away. Her voice doesn't have to be. Goonj preserves your parent's WhatsApp voice notes — recipes, stories, advice — in a private family vault." },
      { property: "og:title", content: "Goonj — For NRI Families" },
      { property: "og:description", content: "Gift a Memory Vault to your parents back home. Two minutes. WhatsApp. Done." },
      { property: "og:url", content: "/for-nris" },
    ],
    links: [{ rel: "canonical", href: "/for-nris" }],
  }),
  component: ForNRIs,
});

const testimonials = [
  {
    name: "Priya, San Francisco",
    quote: "I asked Goonj how amma makes rasam. It played her voice from a Diwali video call last year. I cried in my kitchen and then I made the rasam.",
    tag: "Recipe",
  },
  {
    name: "Arjun, London",
    quote: "My dad sends one voice note every Sunday. Cricket scores, neighbourhood gossip, advice I didn't ask for. They used to disappear in chat. Now they're a year of him.",
    tag: "Everyday",
  },
  {
    name: "Meera, Toronto",
    quote: "I gifted Goonj to my mother for her 70th birthday. Now my kids — born in Canada, who barely speak Tamil — can hear their பாட்டி tell them folktales.",
    tag: "Legacy",
  },
];

const faqs = [
  { q: "Will this work if my parents live in a small town in India?", a: "Yes. As long as they have WhatsApp, Goonj works. Even 2G connections handle voice notes." },
  { q: "I'm abroad. Can I set this up for them?", a: "Absolutely. Setup takes under 2 minutes from anywhere in the world. Your parents continue using WhatsApp exactly as they do today." },
  { q: "Will my parents need to learn anything new?", a: "No. Truly nothing. You and your siblings forward their voice notes to Goonj. Their experience never changes." },
  { q: "Can we have multiple family members across countries?", a: "Yes — multi-branch family vaults are core to how Goonj works. Sibling in Sydney, you in Boston, parents in Pune — all in one vault." },
  { q: "What if my parent speaks in a regional dialect?", a: "Goonj is dialect-aware across major Indian languages including Marathi, Tamil, Punjabi, Bengali, Gujarati and more, with Marwari, Bhojpuri, and Tulu dialect support." },
];

function ForNRIs() {
  return (
    <>
      {/* Hero - dark purple */}
      <section className="relative overflow-hidden bg-plum text-ivory">
        <div className="container-x py-20 md:py-32 text-center max-w-4xl">
          <Reveal>
            <span className="chip mb-8 flex items-center justify-center gap-1.5 mx-auto w-fit" style={{ background: "rgba(232,168,76,0.18)", color: "var(--marigold)" }}>
              <Plane className="w-4 h-4" /> For NRI families
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mb-8" style={{ fontWeight: 500, letterSpacing: "-0.5px" }}>
              Your amma is 8,000 km away.<br />
              <span className="text-marigold italic">Her voice doesn't have to be.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-ivory/85 max-w-2xl mx-auto mb-10 leading-[1.7]">
              Distance is a fact. Forgetting doesn't have to be. Goonj quietly preserves the
              voice notes your parents send on WhatsApp — so the next time you miss the sound
              of home, it's a tap away.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-gift-modal'))} className="btn-pill btn-marigold cursor-pointer">
              <Gift className="w-5 h-5" /> Gift your parent's voice
            </button>
          </Reveal>
        </div>
        <Gungu size={120} className="absolute top-10 right-10 opacity-30 animate-flutter hidden md:block" />
      </section>

      {/* Setup flow */}
      <section className="section-y bg-ivory">
        <div className="container-x max-w-4xl">
          <Reveal className="text-center mb-14">
            <span className="label-eyebrow text-violet">Setup</span>
            <h2 className="font-display text-plum text-3xl md:text-5xl mt-4 leading-[1.1]" style={{ fontWeight: 500 }}>
              Two minutes. WhatsApp. Done.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { i: Plane, t: "Save the Goonj number", d: "From anywhere in the world. No app to install." },
              { i: Clock, t: "Forward one voice note", d: "Your parent's, your sibling's — any starting point." },
              { i: Heart, t: "Your vault is alive", d: "Forward more anytime. Ask anytime. The voice stays." },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card-warm p-7 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-parchment flex items-center justify-center mx-auto mb-4">
                    <s.i className="w-6 h-6 text-plum" />
                  </div>
                  <div className="font-display text-marigold text-sm mb-2" style={{ fontWeight: 500 }}>STEP {i + 1}</div>
                  <h3 className="font-medium text-espresso mb-2">{s.t}</h3>
                  <p className="text-sm text-warmgray">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y" style={{ background: "var(--parchment)" }}>
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="label-eyebrow text-violet">From early families</span>
            <h2 className="font-display text-plum text-3xl md:text-5xl mt-4 leading-[1.1]" style={{ fontWeight: 500 }}>
              Stories that came back.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="card-warm p-6 h-full flex flex-col">
                  <span className="chip self-start mb-4" style={{ background: "var(--linen)" }}>{t.tag}</span>
                  <p className="font-display text-espresso text-lg leading-[1.5] italic mb-5 flex-1" style={{ fontWeight: 500 }}>
                    "{t.quote}"
                  </p>
                  <div className="text-sm text-warmgray border-t border-border pt-4">— {t.name}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-ivory">
        <div className="container-x max-w-3xl">
          <Reveal className="text-center mb-12">
            <h2 className="font-display text-plum text-3xl md:text-5xl leading-[1.1]" style={{ fontWeight: 500 }}>
              For families across oceans.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal>
      <div className="card-warm overflow-hidden">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between p-5 text-left"
          aria-expanded={open}
        >
          <span className="font-medium text-espresso pr-4">{q}</span>
          <ChevronDown className={`w-5 h-5 text-plum transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-5 text-warmgray leading-relaxed">{a}</div>
        </motion.div>
      </div>
    </Reveal>
  );
}
