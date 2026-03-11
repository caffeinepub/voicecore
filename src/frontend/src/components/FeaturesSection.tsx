import { motion } from "motion/react";
import type { Variants } from "motion/react";

const features = [
  {
    icon: "🎵",
    title: "High Quality Audio",
    description:
      "Lossless 320kbps audio streaming with zero latency for the best listening experience.",
  },
  {
    icon: "📋",
    title: "Smart Queue",
    description:
      "Advanced queue management with shuffle, loop, and skip voting built in.",
  },
  {
    icon: "📝",
    title: "Live Lyrics",
    description:
      "Real-time synchronized lyrics for any song, right in your Discord server.",
  },
  {
    icon: "🎛️",
    title: "Audio Filters",
    description:
      "Bass boost, nightcore, vaporwave, 8D and 20+ unique audio filters.",
  },
  {
    icon: "🎧",
    title: "Playlist Support",
    description:
      "Import Spotify, YouTube & SoundCloud playlists instantly with one command.",
  },
  {
    icon: "⚡",
    title: "24/7 Uptime",
    description:
      "Always-on music streaming with automatic reconnect and zero downtime.",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            What we offer
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-4">
            Everything your server <span className="gradient-text">needs</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            VoiceCore is packed with powerful features to take your music
            experience to the next level.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="features.list"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="glass-card rounded-2xl p-6 transition-all duration-300 cursor-default group"
              data-ocid={`features.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "oklch(0.20 0.05 295 / 0.5)" }}
              >
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
