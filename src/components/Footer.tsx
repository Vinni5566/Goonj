import { Link } from "@tanstack/react-router";
import { Gungu } from "./Gungu";

export function Footer() {
  return (
    <footer className="bg-plum text-ivory relative overflow-hidden">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10 relative z-10">
        <div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-display text-3xl" style={{ fontWeight: 500 }}>गूंज</span>
            <span className="font-display text-lg opacity-70">Goonj</span>
          </div>
          <p className="text-sm opacity-75 leading-relaxed">
            Preserving India's oral heritage, one voice at a time.
          </p>
        </div>

        <div>
          <h4 className="label-eyebrow text-marigold mb-4">Product</h4>
          <ul className="space-y-2.5 text-sm opacity-90">
            <li><Link to="/stories" className="hover:text-marigold transition-colors">Stories</Link></li>
            <li><Link to="/for-nris" className="hover:text-marigold transition-colors">For NRI Families</Link></li>
            <li><Link to="/" hash="roadmap" className="hover:text-marigold transition-colors">Roadmap</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="label-eyebrow text-marigold mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm opacity-90">
            <li><Link to="/" hash="how-it-works" className="hover:text-marigold transition-colors">How it works</Link></li>
            <li><Link to="/" hash="architecture" className="hover:text-marigold transition-colors">AI Architecture</Link></li>
            <li><Link to="/" hash="who-its-for" className="hover:text-marigold transition-colors">Who it's for</Link></li>
            <li><Link to="/blog" className="hover:text-marigold transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="label-eyebrow text-marigold mb-4">Language</h4>
          <ul className="space-y-2.5 text-sm opacity-90">
            <li>हिन्दी</li>
            <li>தமிழ்</li>
            <li>বাংলা</li>
            <li>मराठी</li>
            <li>ગુજરાતી</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs opacity-70 text-center md:text-left">
          © 2025 Goonj · Built with love for 138 million voices
        </div>
      </div>

      <Gungu size={140} className="absolute bottom-4 right-4 opacity-[0.07] pointer-events-none" />
    </footer>
  );
}
