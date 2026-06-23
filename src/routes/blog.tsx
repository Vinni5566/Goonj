import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Stories from the archive — Goonj Blog" },
      { name: "description", content: "Thoughts on memory, voice, heritage, and the families keeping them alive." },
    ],
  }),
  component: Blog,
});

const blogPosts = [
  { tag: "Culture", title: "Why India's oral tradition is the world's most endangered archive", date: "June 2025" },
  { tag: "Product", title: "How we built a memory vault that works on 2G", date: "May 2025" },
  { tag: "Family", title: "The last voice note my nani ever sent", date: "May 2025" },
  { tag: "Tech", title: "Vernacular AI: why standard speech models fail Indian dialects", date: "April 2025" },
  { tag: "NRI", title: "How 20 million NRI families are losing their parents' voices", date: "April 2025" },
  { tag: "Culture", title: "Diwali, a kheer recipe, and the voice note that survived", date: "March 2025" },
];

function Blog() {
  return (
    <>
      <section className="container-x pt-12 pb-12 md:pt-20 md:pb-16">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="chip mb-6 flex items-center gap-1.5 justify-center"><BookOpen className="w-4 h-4" /> Archive</span>
          <h1 className="font-display text-plum text-4xl md:text-6xl leading-[1.05] mb-5" style={{ fontWeight: 500, letterSpacing: "-0.5px" }}>
            Stories from the archive
          </h1>
          <p className="text-lg text-warmgray">
            Thoughts on memory, voice, heritage, and the families keeping them alive.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <Link to="/blog" className="block h-full">
                <motion.div whileHover={{ y: -4 }} className="card-warm h-full flex flex-col p-6">
                  <span className="chip self-start mb-4 text-[11px]" style={{ background: "var(--linen)" }}>
                    {post.tag}
                  </span>
                  <h3 className="font-display text-plum text-xl leading-[1.3] mb-3" style={{ fontWeight: 500 }}>
                    {post.title}
                  </h3>
                  <p className="text-sm text-warmgray leading-relaxed mb-6 flex-1">
                    An exploration of how we can preserve the voices that matter most, before they fade into the digital noise.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-violet font-medium flex items-center gap-1">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs text-warmgray/70">{post.date}</span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
