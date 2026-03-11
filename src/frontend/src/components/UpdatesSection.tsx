import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const updates = [
  {
    version: "v2.5.0",
    date: "March 2026",
    isNew: true,
    highlights: [
      "Added Spotify playlist sync",
      "Improved audio quality engine",
      "New equalizer presets",
    ],
    color: "oklch(0.72 0.22 295)",
    glow: "oklch(0.72 0.22 295 / 0.6)",
  },
  {
    version: "v2.4.0",
    date: "February 2026",
    isNew: false,
    highlights: [
      "New 8D audio filter",
      "Lyrics improvements and line sync",
      "Various bug fixes",
    ],
    color: "oklch(0.65 0.22 200)",
    glow: "oklch(0.65 0.22 200 / 0.6)",
  },
  {
    version: "v2.3.0",
    date: "January 2026",
    isNew: false,
    highlights: [
      "Queue history tracking",
      "DJ role support",
      "Slash commands overhaul",
    ],
    color: "oklch(0.72 0.22 295)",
    glow: "oklch(0.72 0.22 295 / 0.6)",
  },
  {
    version: "v2.0.0",
    date: "December 2025",
    isNew: false,
    highlights: [
      "Major rewrite — VoiceCore 2.0 launched",
      "New audio streaming engine",
      "Redesigned dashboard",
    ],
    color: "oklch(0.65 0.22 200)",
    glow: "oklch(0.65 0.22 200 / 0.6)",
  },
];

export default function UpdatesSection() {
  return (
    <section id="updates" className="py-24 relative">
      <div
        className="absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.62 0.22 295 / 0.3), transparent)",
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Changelog
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-4">
            What&apos;s <span className="gradient-text">New</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We ship updates frequently. Here&apos;s what&apos;s changed
            recently.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto" data-ocid="updates.list">
          {/* Center line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.62 0.22 295 / 0.6), oklch(0.55 0.22 200 / 0.2))",
            }}
          />

          <div className="flex flex-col gap-8">
            {updates.map((update, i) => (
              <motion.div
                key={update.version}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16"
                data-ocid={`updates.item.${i + 1}`}
              >
                {/* Dot */}
                <div
                  className="absolute left-4 top-4 w-4 h-4 rounded-full -translate-x-1/2"
                  style={{
                    background: update.color,
                    boxShadow: `0 0 12px ${update.glow}`,
                  }}
                />

                <div className="glass-card rounded-2xl p-5 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="font-display font-bold text-lg"
                      style={{ color: update.color }}
                    >
                      {update.version}
                    </span>
                    {update.isNew && (
                      <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                        Latest
                      </Badge>
                    )}
                    <span className="text-sm text-muted-foreground ml-auto">
                      {update.date}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {update.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-0.5">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
