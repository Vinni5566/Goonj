import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { to: "/stories", label: "Stories" },
  { to: "/for-nris", label: "For NRI families" },
  { to: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ivory/95 backdrop-blur-md" : "bg-transparent"
      }`}
      style={scrolled ? { boxShadow: "0 4px 20px rgba(45,27,78,0.06)" } : undefined}
    >
      <nav className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-baseline gap-2" aria-label="Goonj home">
          <span className="font-display text-2xl text-plum" style={{ fontWeight: 500 }}>
            गूंज
          </span>
          <span className="font-display text-lg text-plum/80">Goonj</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[14.5px] text-espresso/80 hover:text-plum transition-colors"
              activeProps={{ className: "text-plum font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-setup-modal'))} className="btn-pill btn-plum cursor-pointer">
            Start preserving free <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          className="md:hidden p-2 text-plum"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ivory border-t border-border animate-in slide-in-from-top duration-200">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-espresso"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new CustomEvent('open-setup-modal'));
              }}
              className="btn-pill btn-plum justify-center mt-2 cursor-pointer"
            >
              Start preserving free →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
