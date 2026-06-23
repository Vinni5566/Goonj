import { motion } from "framer-motion";
import { Check, Mic, Heart, Sparkles } from "lucide-react";
import { Gungu } from "./Gungu";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto" style={{ width: 300 }}>
      <Gungu
        size={64}
        className="absolute -top-8 -left-6 animate-flutter z-10"
      />
      <motion.div
        initial={{ opacity: 0, x: 60, rotate: 0 }}
        animate={{ opacity: 1, x: 0, rotate: -3 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        className="relative rounded-[36px] bg-[#2C2420] p-3"
        style={{ boxShadow: "0 30px 60px -20px rgba(45,27,78,0.35), 0 10px 30px -10px rgba(45,27,78,0.2)" }}
      >
        <div className="rounded-[28px] overflow-hidden bg-[#ECE5DD]" style={{ height: 540 }}>
          {/* WhatsApp header */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-marigold flex items-center justify-center text-plum font-display font-medium">
              G
            </div>
            <div className="text-white">
              <div className="text-sm font-medium">Goonj · Family Vault</div>
              <div className="text-[11px] opacity-80">online</div>
            </div>
          </div>

          {/* Chat */}
          <div className="p-4 space-y-3" style={{ background: "#ECE5DD url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><circle cx=%221%22 cy=%221%22 r=%221%22 fill=%22%23d4cdbf%22/></svg>')" }}>
            {/* Dadi's voice note incoming */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="max-w-[80%] bg-white rounded-lg p-2.5 shadow-sm"
            >
              <div className="text-[11px] text-violet font-medium mb-1 flex items-center gap-1">Dadi <Heart className="w-3 h-3 text-marigold fill-marigold" /></div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-violet flex items-center justify-center">
                  <Mic className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="flex items-end gap-[2px] h-5">
                  {[6, 12, 8, 16, 10, 14, 7, 18, 9, 13, 5, 11].map((h, i) => (
                    <div key={i} className="w-[2px] bg-violet rounded-full" style={{ height: h }} />
                  ))}
                </div>
                <span className="text-[11px] text-warmgray">0:42</span>
              </div>
              <div className="text-[10px] text-warmgray mt-1">11:24 AM</div>
            </motion.div>

            {/* Forwarding action */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.4 }}
              className="text-center text-[11px] text-warmgray italic"
            >
              ↪ forwarded to Goonj
            </motion.div>

            {/* Confirmation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.5 }}
              className="ml-auto max-w-[80%] bg-[#DCF8C6] rounded-lg p-2.5 shadow-sm"
            >
              <div className="text-[13px] text-espresso flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-marigold" /> Saved to your family vault
              </div>
              <div className="text-[12px] text-warmgray mt-1">
                Tagged: <span className="text-violet font-medium">recipe · kheer · हिन्दी</span>
              </div>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[10px] text-warmgray">11:24 AM</span>
                <Check className="w-3 h-3 text-[#4FC3F7]" />
                <Check className="w-3 h-3 text-[#4FC3F7] -ml-2" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.6, duration: 0.5 }}
              className="ml-auto max-w-[80%] bg-[#DCF8C6] rounded-lg p-2.5 shadow-sm"
            >
              <div className="text-[12px] text-espresso italic">
                "Pehle doodh ko dheere se ubaalo..."
              </div>
              <div className="text-[10px] text-warmgray mt-1">transcript preview</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
