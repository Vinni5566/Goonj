import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function GlobalModals() {
  const [setupModalOpen, setSetupModalOpen] = useState(false);
  const [giftModalOpen, setGiftModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenSetup = () => setSetupModalOpen(true);
    const handleOpenGift = () => setGiftModalOpen(true);

    window.addEventListener("open-setup-modal", handleOpenSetup);
    window.addEventListener("open-gift-modal", handleOpenGift);

    return () => {
      window.removeEventListener("open-setup-modal", handleOpenSetup);
      window.removeEventListener("open-gift-modal", handleOpenGift);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {setupModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
              onClick={() => setSetupModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-parchment rounded-2xl shadow-2xl overflow-hidden p-8 border border-border/50"
            >
              <button
                onClick={() => setSetupModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-warmgray hover:text-plum transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-8">
                <h2 className="font-display text-plum text-3xl font-medium mb-2">Set up your family vault</h2>
                <p className="text-espresso/70 text-base">It takes 2 minutes. No app needed.</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-plum/10 text-plum flex items-center justify-center font-display font-medium shrink-0">1</div>
                  <div>
                    <p className="text-espresso font-medium mb-1">Save this number in your phone as 'Goonj'</p>
                    <p className="font-mono text-plum text-lg">+91 99999 99999</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-plum/10 text-plum flex items-center justify-center font-display font-medium shrink-0">2</div>
                  <div>
                    <p className="text-espresso font-medium">Ask any family member to forward a voice note to this number on WhatsApp</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-plum/10 text-plum flex items-center justify-center font-display font-medium shrink-0">3</div>
                  <div>
                    <p className="text-espresso font-medium">That's it. Goonj does the rest.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919999999999?text=Hi%20Goonj%2C%20start%20my%20family%20vault"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-plum w-full justify-center text-lg py-4 cursor-pointer"
              >
                Open WhatsApp to start →
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {giftModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
              onClick={() => setGiftModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-parchment rounded-2xl shadow-2xl overflow-hidden p-8 border border-border/50"
            >
              <button
                onClick={() => setGiftModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-warmgray hover:text-plum transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <h2 className="font-display text-plum text-3xl font-medium mb-2">Gift a memory vault</h2>
                <p className="text-marigold text-base font-medium">The most meaningful gift you can give an NRI family.</p>
              </div>

              <p className="text-espresso/80 text-center mb-8 leading-relaxed">
                Send your parent's family a Goonj vault — so every voice note they share on WhatsApp is preserved forever.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); setGiftModalOpen(false); }} className="space-y-4">
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email for early gift access"
                    className="w-full bg-ivory border border-border rounded-xl px-4 py-3 text-espresso focus:outline-none focus:ring-2 focus:ring-marigold transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-pill btn-marigold w-full justify-center text-lg py-4 cursor-pointer"
                >
                  Reserve a gift vault →
                </button>
                <p className="text-center text-sm text-warmgray mt-4">
                  We'll reach out within 24 hours with gifting details.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
