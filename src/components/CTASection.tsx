import { ArrowRight, Gift, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { MemoryJar } from "./MemoryJar";

export function CTASection() {
  return (
    <section className="section-y" style={{ background: "var(--parchment)" }}>
      <div className="container-x grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <Reveal>
          <span className="chip mb-5 flex items-center gap-1.5 w-fit" style={{ background: "rgba(255,255,255,0.6)" }}>
            <Sparkles className="w-4 h-4" /> Join 500 families in early access
          </span>
          <h2 className="font-display text-plum text-4xl md:text-5xl leading-[1.1] mb-5" style={{ fontWeight: 500 }}>
            Start preserving<br />before it's too late.
          </h2>
          <p className="text-lg text-espresso/75 max-w-xl mb-8">
            Free to start. Forward one voice note today — and we'll keep it safe forever.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-setup-modal'))} className="btn-pill btn-plum cursor-pointer">
              Preserve your family's voice <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-gift-modal'))} className="btn-pill btn-marigold cursor-pointer">
              <Gift className="w-4 h-4" /> Gift a vault to a loved one
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#E8A84C", "#C4604A", "#6B3FA0"].map((c) => (
                <div key={c} className="w-9 h-9 rounded-full border-2 border-parchment" style={{ background: c }} />
              ))}
            </div>
            <span className="text-sm text-espresso/70">500+ families already preserving</span>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <MemoryJar size={260} />
        </Reveal>
      </div>
    </section>
  );
}
