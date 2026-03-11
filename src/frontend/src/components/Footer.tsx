import { SiDiscord } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`;

  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <img
                src="/assets/generated/voicecore-logo-transparent.dim_200x200.png"
                alt="VoiceCore"
                className="w-7 h-7 object-contain"
              />
              <span className="font-display font-bold text-lg gradient-text">
                VoiceCore
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              The ultimate music bot for your Discord server.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Terms", href: "#" },
              { label: "Privacy", href: "#" },
              { label: "Support", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-ocid={`footer.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://discord.gg/voicecore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-ocid="footer.discord.link"
            >
              <SiDiscord size={14} />
              Discord Server
            </a>
          </nav>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground"
          style={{ borderTop: "1px solid oklch(0.25 0.04 280 / 0.5)" }}
        >
          <span>© {year} VoiceCore. All rights reserved.</span>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            data-ocid="footer.caffeine.link"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
