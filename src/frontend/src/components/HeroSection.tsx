import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useGetStats } from "../hooks/useQueries";

const WAVE_KEYS = Array.from({ length: 15 }, (_, i) => `wave-${i}`);

function AnimatedCounter({
  target,
  duration = 2000,
}: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (target === 0) return;
    startRef.current = null;

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function HeroSection() {
  const { data: stats, isLoading } = useGetStats();

  const statsData = [
    {
      label: "Servers",
      value: stats ? Number(stats.serverCount) : 0,
      suffix: "+",
    },
    {
      label: "Songs Played",
      value: stats ? Number(stats.songsPlayed) : 0,
      suffix: "+",
    },
    {
      label: "Active Users",
      value: stats ? Number(stats.activeUsers) : 0,
      suffix: "+",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.62 0.22 295)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.55 0.22 200)" }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-8 animate-pulse-glow">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          Now Live — v2.5.0
        </div>

        {/* Waveform */}
        <div
          className="flex items-end justify-center gap-1 h-16 mb-8"
          aria-hidden="true"
        >
          {WAVE_KEYS.map((key, i) => (
            <div
              key={key}
              className="wave-bar w-2 rounded-full"
              style={{
                height: `${30 + Math.sin(i * 0.8) * 25 + 20}px`,
                background:
                  i % 2 === 0 ? "oklch(0.72 0.22 295)" : "oklch(0.65 0.22 200)",
              }}
            />
          ))}
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6">
          <span className="text-foreground">The Ultimate</span>
          <br />
          <span className="gradient-text text-glow-purple">Music Bot</span>
          <br />
          <span className="text-foreground">for Discord</span>
        </h1>

        {/* Subtext */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Crystal-clear audio, powerful controls, and seamless playlist
          management — all in one bot.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon-purple px-8 h-12 text-base font-bold gap-2 group"
            onClick={() => window.open("https://discord.com", "_blank")}
            data-ocid="hero.add_discord.primary_button"
          >
            Add to Discord
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border/60 hover:border-primary/60 hover:bg-primary/5 px-8 h-12 text-base font-semibold gap-2"
            onClick={() =>
              document
                .querySelector("#commands")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            data-ocid="hero.view_commands.secondary_button"
          >
            <Terminal size={18} />
            View Commands
          </Button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
          data-ocid="hero.stats.panel"
        >
          {statsData.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-4 transition-all duration-300"
              data-ocid={`hero.stat.item.${i + 1}`}
            >
              {isLoading ? (
                <div
                  className="h-7 w-16 mx-auto bg-muted animate-pulse rounded mb-1"
                  data-ocid="hero.stats.loading_state"
                />
              ) : (
                <div className="font-display font-black text-2xl gradient-text">
                  <AnimatedCounter target={stat.value || 12500} />
                  {stat.suffix}
                </div>
              )}
              <div className="text-xs text-muted-foreground mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" />
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
      </div>
    </section>
  );
}
