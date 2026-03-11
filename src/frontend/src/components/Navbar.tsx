import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Updates", href: "#updates" },
    { label: "Commands", href: "#commands" },
    { label: "Premium", href: "#premium" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group"
          data-ocid="nav.link"
        >
          <img
            src="/assets/generated/voicecore-logo-transparent.dim_200x200.png"
            alt="VoiceCore"
            className="w-9 h-9 object-contain drop-shadow-lg"
          />
          <span className="font-display font-bold text-xl gradient-text tracking-tight">
            VoiceCore
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-neon-purple font-semibold"
            onClick={() => window.open("https://discord.com", "_blank")}
            data-ocid="nav.add_discord.button"
          >
            Add to Discord
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="nav.menu.toggle"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-card border-t border-border/50 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1.5"
              onClick={() => setMenuOpen(false)}
              data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-primary/90 hover:bg-primary mt-1"
            onClick={() => window.open("https://discord.com", "_blank")}
            data-ocid="nav.mobile.add_discord.button"
          >
            Add to Discord
          </Button>
        </div>
      )}
    </header>
  );
}
