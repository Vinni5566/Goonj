import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Lock, Ban, Hand, Mic, Forward, Brain, MessageCircleQuestion,
  Headphones, Sparkles, Check, X, BookHeart, Stethoscope, Plane, Baby, UsersRound,
  WifiOff, Languages, Smartphone, Volume2, FileX, ShieldX, Globe, User, Shield
} from "lucide-react";
import { PhoneMockup } from "../components/PhoneMockup";
import { Gungu } from "../components/Gungu";
import { MemoryJar } from "../components/MemoryJar";
import { Reveal } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goonj — Her voice, her recipe, her love. Preserved forever." },
      { name: "description", content: "Dadi sends voice notes on WhatsApp. Goonj saves them forever — so the day she explains how to make kheer, that voice is never lost." },
      { property: "og:title", content: "Goonj — Bridge of Memories" },
      { property: "og:description", content: "AI voice memory preservation for Indian families and NRIs. Built on WhatsApp. Zero new behavior." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const heroWords = "Her voice. Her stories. Her love. Preserved forever.".split(" ");

function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #F5E6C8 0%, #FDFAF5 100%)" }}
      >
        <div className="container-x grid md:grid-cols-[1.3fr_1fr] gap-14 md:gap-10 items-center pt-16 pb-24 md:pt-24 md:pb-32">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="chip mb-6 flex items-center gap-1.5"
            >
              <Mic className="w-4 h-4" /> Built on WhatsApp · Zero new behavior
            </motion.span>
            <h1 className="font-display text-plum text-[36px] md:text-[52px] leading-[1.05] mb-6" style={{ letterSpacing: "-0.5px", fontWeight: 500 }}>
              {heroWords.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  className="inline-block"
                >
                  {w}{i !== heroWords.length - 1 && "\u00A0"}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}
              className="text-lg text-warmgray max-w-xl mb-8 leading-[1.7]"
            >
              Dadi sends voice notes on WhatsApp. Goonj preserves them forever — her recipes, her
              prayers, her bedtime stories, her wisdom. Every voice. Every moment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-setup-modal'))} className="btn-pill btn-plum cursor-pointer">
                Start preserving free <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              <span className="chip"><Lock className="w-3.5 h-3.5" /> End-to-end encrypted</span>
              <span className="chip"><Ban className="w-3.5 h-3.5" /> No voice synthesis</span>
              <span className="chip"><Hand className="w-3.5 h-3.5" /> Delete anytime</span>
            </motion.div>
          </div>

          <div className="relative">
            <PhoneMockup />
          </div>
        </div>

        {/* warm bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, var(--ivory))" }} />
      </section>

      {/* PROBLEM */}
      <section className="section-y bg-plum text-ivory">
        <div className="container-x max-w-3xl text-center">
          <Reveal>
            <span className="label-eyebrow text-marigold">The quiet loss</span>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="font-display text-marigold text-2xl md:text-3xl leading-[1.3] my-8 italic">
              "One phone upgrade. One chat cleared. And your mother's recipe
              for her biryani — gone."
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-ivory/85 text-base md:text-lg leading-[1.7] max-w-2xl mx-auto">
              138 million Indians over 60 carry decades of unwritten wisdom, dialects, and stories.
              Voice notes hold them for a moment — then vanish in chat history forever.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-left">
            {[
              { big: "1 in 3", small: "elders live apart from children" },
              { big: "20M+", small: "NRI families separated by oceans" },
              { big: "0", small: "apps existing tools built for this" },
            ].map((s, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <div className="rounded-xl p-6 border border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <div className="font-display text-marigold text-3xl mb-1">{s.big}</div>
                  <div className="text-sm text-ivory/75">{s.small}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section-y bg-ivory">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-eyebrow text-violet">How it works</span>
            <h2 className="font-display text-plum text-3xl md:text-5xl mt-4 leading-[1.1]" style={{ fontWeight: 500 }}>
              Six steps. One forward. A lifetime.
            </h2>
          </Reveal>

          <div className="relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-12 left-12 right-12 h-[2px] bg-linen" />
            <motion.div
              className="hidden md:block absolute top-12 left-12 h-[2px] bg-marigold origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ right: "3rem" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { n: "1", icon: Mic, t: "Record", d: "Dadi sends a voice note on WhatsApp — nothing changes for her" },
                { n: "2", icon: Forward, t: "Forward", d: "Family member forwards it to the Goonj number" },
                { n: "3", icon: Brain, t: "Process", d: "AI transcribes, tags language, identifies memory type" },
                { n: "4", icon: MessageCircleQuestion, t: "Ask", d: "Grandson texts: 'how did dadi make that kheer?'" },
                { n: "5", icon: Headphones, t: "Listen", d: "Dadi's actual voice plays back — from the actual day" },
                { n: "6", icon: Sparkles, t: "Remember", d: "A birthday memory surfaces automatically on the right day" },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08} className="text-center relative">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-parchment mb-4 mx-auto">
                    <span className="font-display text-marigold text-4xl" style={{ fontWeight: 500 }}>{s.n}</span>
                  </div>
                  <s.icon className="w-5 h-5 text-violet mx-auto mb-2" />
                  <div className="font-medium text-espresso mb-2">{s.t}</div>
                  <p className="text-sm text-warmgray leading-snug">{s.d}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.3} className="mt-16 max-w-md mx-auto">
            <div className="card-warm p-5">
              <div className="text-xs text-warmgray mb-2 flex items-center gap-2">
                <Gungu size={28} className="animate-flutter" />
                Steps 4 & 5 in action
              </div>
              <div className="space-y-2.5">
                <div className="bg-parchment rounded-lg p-3 text-sm">
                  <span className="text-violet font-medium">You:</span> how did dadi make that kheer?
                </div>
                <div className="bg-linen rounded-lg p-3 text-sm">
                  <span className="text-plum font-medium">Goonj:</span> <span className="inline-flex items-center gap-1"><Mic className="w-3.5 h-3.5" /> Playing dadi's voice note from Jul 14, 2024</span>
                  <div className="flex items-end gap-[2px] h-4 mt-2">
                    {[6, 12, 8, 16, 10, 14, 7, 18, 9, 13].map((h, i) => (
                      <div key={i} className="w-[2px] bg-violet rounded-full" style={{ height: h }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section id="who-its-for" className="section-y" style={{ background: "var(--linen)" }}>
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="label-eyebrow text-violet">Who it's for</span>
            <h2 className="font-display text-plum text-3xl md:text-5xl mt-4 leading-[1.1]" style={{ fontWeight: 500 }}>
              A family thread, four kinds of hearts.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: UsersRound, emoji: User, name: "Elders (60+)", d: "Primary contributors. Nothing changes for them." },
              { Icon: Baby, emoji: User, name: "Grandchildren", d: "One question. Hear grandma's voice answer it." },
              { Icon: Plane, emoji: Plane, name: "NRI Families", d: "Their parent's spoken legacy, preserved and surfaced." },
              { Icon: Stethoscope, emoji: Stethoscope, name: "Caregivers", d: "Quiet health pattern nudges from recurring voice notes." },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 18px 40px -16px rgba(45,27,78,0.22)" }}
                  className="card-warm p-6 h-full"
                >
                  <div className="w-14 h-14 rounded-full bg-parchment flex items-center justify-center text-2xl mb-4">
                    <p.emoji className="w-6 h-6 text-plum" />
                  </div>
                  <h3 className="font-display text-plum text-xl mb-2" style={{ fontWeight: 500 }}>{p.name}</h3>
                  <p className="text-sm text-warmgray leading-relaxed">{p.d}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI ARCHITECTURE */}
      <section id="architecture" className="section-y bg-ivory">
        <div className="container-x grid md:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <span className="label-eyebrow text-violet">AI Architecture · Four Layers of Intelligence</span>
              <h2 className="font-display text-plum text-3xl md:text-5xl mt-4 mb-8 leading-[1.1]" style={{ fontWeight: 500 }}>
                Quietly intelligent. Loudly human.
              </h2>
            </Reveal>
            <div className="space-y-3">
              {[
                { t: "Voice Intake Layer", d: "WhatsApp integration. Zero install, zero learning curve." },
                { t: "Transcription Layer", d: "Multilingual + dialect-aware. Marwari, Bhojpuri, Tulu." },
                { t: "Memory Intelligence Layer", d: "Semantic tagging & retrieval — recipes, stories, health, festivals." },
                { t: "Surfacing Layer", d: "Contextual playback. Birthdays, anniversaries, the right moment." },
              ].map((l, i) => (
                <Reveal key={l.t} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="card-warm p-5 flex gap-4 border-l-[3px]"
                    style={{ borderLeftColor: "var(--marigold)" }}
                  >
                    <div className="font-display text-marigold text-2xl" style={{ fontWeight: 500 }}>0{i + 1}</div>
                    <div>
                      <div className="font-medium text-espresso">{l.t}</div>
                      <p className="text-sm text-warmgray mt-1">{l.d}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2} className="flex justify-center">
            <MemoryJar size={300} />
          </Reveal>
        </div>
      </section>

      {/* ACCESSIBILITY */}
      <section className="section-y" style={{ background: "var(--linen)" }}>
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-plum text-3xl md:text-5xl leading-[1.1]" style={{ fontWeight: 500 }}>
              Built for India's most underserved digital users.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { Icon: FileX, t: "No Literacy Required", d: "Voice in, voice out. No reading, no typing." },
              { Icon: Smartphone, t: "No App Installation", d: "Runs entirely inside WhatsApp." },
              { Icon: Languages, t: "Vernacular-First", d: "11 Indian languages and dialects." },
              { Icon: WifiOff, t: "Low-Bandwidth Friendly", d: "Works on 2G and feature-grade networks." },
              { Icon: MessageCircleQuestion, t: "WhatsApp Native", d: "The chat your family already uses." },
              { Icon: Volume2, t: "Real Voice Only", d: "No synthesis. Only the actual voice, the actual day." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 0.06}>
                <div className="card-warm p-5 flex gap-4 items-start h-full">
                  <div className="w-10 h-10 rounded-lg bg-parchment flex items-center justify-center flex-shrink-0">
                    <f.Icon className="w-5 h-5 text-plum" />
                  </div>
                  <div>
                    <div className="font-medium text-espresso mb-1">{f.t}</div>
                    <p className="text-sm text-warmgray">{f.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="section-y text-ivory" style={{ background: "linear-gradient(90deg, #2D1B4E 0%, #6B3FA0 100%)" }}>
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              { v: 138, suffix: "M+", l: "Indians over 60" },
              { v: 20, suffix: "M+", l: "NRI families" },
              { v: 500, suffix: "M+", l: "WhatsApp users in India" },
              { v: 0, suffix: " apps", l: "exist for this" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-xl p-6 text-center border border-white/10" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <div className="font-display text-marigold text-5xl md:text-6xl" style={{ fontWeight: 500 }}>
                    <Counter to={s.v} suffix={s.suffix} />
                  </div>
                  <div className="text-sm text-ivory/80 mt-2">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <blockquote className="font-display italic text-center text-xl md:text-2xl text-ivory/95 max-w-3xl mx-auto">
              "Not an AI simulation. Not a chatbot. The actual person, in their actual voice."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="section-y bg-ivory">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="label-eyebrow text-violet">Roadmap</span>
            <h2 className="font-display text-plum text-3xl md:text-5xl mt-4 leading-[1.1]" style={{ fontWeight: 500 }}>
              A long, patient journey.
            </h2>
          </Reveal>

          <div className="relative overflow-x-auto md:overflow-visible">
            <div className="flex md:grid md:grid-cols-4 gap-6 min-w-max md:min-w-0 pb-4">
              {[
                { p: "Phase 1", t: "Launch", d: "WhatsApp intake. Free tier + early access invites.", active: true },
                { p: "Phase 2", t: "6 months", d: "Multi-branch families. Smarter dialect transcription." },
                { p: "Phase 3", t: "12 months", d: "Legacy Book — printed keepsake with QR codes to play voices." },
                { p: "Phase 4", t: "18+ months", d: "B2B2C partnerships with eldercare and heritage orgs." },
              ].map((ph, i) => (
                <Reveal key={i} delay={i * 0.1} className="w-72 md:w-auto relative">
                  <div className="flex items-center justify-center mb-4 relative">
                    <div className={`w-5 h-5 rounded-full ${ph.active ? "bg-plum" : "bg-linen border-2 border-warmgray/30"}`} />
                    {ph.active && <Gungu size={36} className="absolute -top-7 animate-flutter" />}
                    {i < 3 && <div className="hidden md:block absolute left-1/2 w-full h-[2px] bg-linen translate-x-2" />}
                  </div>
                  <div className={`rounded-xl p-5 ${ph.active ? "bg-plum text-ivory" : "bg-linen text-espresso"}`}>
                    <div className={`label-eyebrow ${ph.active ? "text-marigold" : "text-violet"}`}>{ph.p}</div>
                    <div className="font-display text-xl mt-2 mb-2" style={{ fontWeight: 500 }}>{ph.t}</div>
                    <p className={`text-sm ${ph.active ? "text-ivory/85" : "text-warmgray"}`}>{ph.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section-y" style={{ background: "var(--linen)" }}>
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow text-violet">Why Goonj</span>
            <h2 className="font-display text-plum text-3xl md:text-5xl mt-4 leading-[1.1]" style={{ fontWeight: 500 }}>
              No one else was building for this.
            </h2>
          </Reveal>

          <Reveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] bg-card rounded-xl overflow-hidden" style={{ boxShadow: "var(--shadow-warm-sm)" }}>
                <thead>
                  <tr className="text-left">
                    <th className="p-4 text-sm font-medium text-warmgray">Feature</th>
                    <th className="p-4 bg-plum text-ivory relative">
                      <div className="flex items-center gap-2">
                        <span className="font-display">Goonj</span>
                        <span className="text-[10px] bg-marigold text-espresso px-2 py-0.5 rounded-full font-medium">BEST</span>
                      </div>
                    </th>
                    <th className="p-4 text-sm text-warmgray">Google Photos</th>
                    <th className="p-4 text-sm text-warmgray">WhatsApp</th>
                    <th className="p-4 text-sm text-warmgray">Ancestry</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Voice-first", [true, false, false, false]],
                    ["Vernacular AI", [true, false, false, false]],
                    ["Zero new behavior", [true, false, true, false]],
                    ["Semantic retrieval", [true, true, false, false]],
                    ["Real voice only", [true, false, true, false]],
                    ["Non-literate friendly", [true, false, false, false]],
                  ].map(([label, vals], i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-4 text-sm text-espresso">{label as string}</td>
                      {(vals as boolean[]).map((v, j) => (
                        <td key={j} className={`p-4 ${j === 0 ? "bg-plum/[0.04]" : ""}`}>
                          {v ? <Check className="w-5 h-5 text-emerald-600" /> : <X className="w-5 h-5 text-warmgray/50" />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-2 justify-center">
            {[
              { icon: Lock, text: "No voice synthesis" },
              { icon: ShieldX, text: "No training on family data" },
              { icon: Shield, text: "Any member can delete anytime" },
              { icon: Globe, text: "Explicit vernacular consent" }
            ].map((p, i) => (
              <span key={i} className="chip flex items-center gap-1.5" style={{ background: "rgba(255,255,255,0.85)" }}>
                <p.icon className="w-3.5 h-3.5" /> {p.text}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
