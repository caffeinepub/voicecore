import { motion } from "motion/react";

const commands = [
  {
    name: "/play",
    description:
      "Play a song or add it to the queue from any URL or search term",
  },
  { name: "/pause", description: "Pause the currently playing track" },
  { name: "/skip", description: "Skip to the next song in the queue" },
  { name: "/queue", description: "View and manage the current song queue" },
  {
    name: "/lyrics",
    description: "Display synchronized lyrics for the current song",
  },
  {
    name: "/filter",
    description: "Apply audio filters: bass boost, nightcore, 8D and more",
  },
  { name: "/volume", description: "Adjust playback volume from 0 to 200" },
  { name: "/loop", description: "Loop the current track or the entire queue" },
  { name: "/shuffle", description: "Shuffle the current queue randomly" },
  {
    name: "/playlist",
    description:
      "Import and manage playlists from Spotify, YouTube, SoundCloud",
  },
  {
    name: "/24-7",
    description: "Toggle 24/7 mode — keep the bot connected all day",
  },
  {
    name: "/premium",
    description: "Manage your premium subscription and unlock features",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function CommandsSection() {
  return (
    <section id="commands" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Commands
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-4">
            Powerful <span className="gradient-text">Commands</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A full suite of slash commands to control your music experience with
            precision.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          data-ocid="commands.list"
        >
          {commands.map((cmd, i) => (
            <motion.div
              key={cmd.name}
              variants={item}
              className="glass-card rounded-xl p-4 transition-all duration-200 group hover:scale-[1.02]"
              data-ocid={`commands.item.${i + 1}`}
            >
              <code
                className="block font-mono text-sm font-bold mb-1.5"
                style={{
                  color:
                    i % 2 === 0
                      ? "oklch(0.72 0.22 295)"
                      : "oklch(0.65 0.22 200)",
                }}
              >
                {cmd.name}
              </code>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {cmd.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
