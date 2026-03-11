import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Perfect for getting started",
    popular: false,
    cta: "Get Started",
    features: [
      "2 servers",
      "Standard audio quality",
      "Basic queue controls",
      "Community support",
      "Standard commands",
    ],
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/mo",
    description: "For serious music lovers",
    popular: true,
    cta: "Upgrade Now",
    features: [
      "10 servers",
      "HD 320kbps audio",
      "All 20+ audio filters",
      "Live lyrics sync",
      "Playlist import",
      "Priority support",
    ],
  },
  {
    name: "Ultimate",
    price: "$9.99",
    period: "/mo",
    description: "For power users & communities",
    popular: false,
    cta: "Upgrade Now",
    features: [
      "Unlimited servers",
      "Lossless audio quality",
      "All Pro features",
      "Custom bot prefix",
      "24/7 always-on mode",
      "Dedicated support",
      "Early feature access",
    ],
  },
];

export default function PremiumSection() {
  return (
    <section id="premium" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.18 0.06 295 / 0.3), transparent)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl mt-3 mb-4">
            Go <span className="gradient-text">Premium</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Unlock the full power of VoiceCore with a plan that fits your needs.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          data-ocid="premium.list"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "glow-purple border-2 bg-gradient-to-b from-primary/10 to-transparent"
                  : "glass-card"
              }`}
              style={
                plan.popular
                  ? { borderColor: "oklch(0.62 0.22 295 / 0.7)" }
                  : {}
              }
              data-ocid={`premium.item.${i + 1}`}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.72 0.22 295), oklch(0.65 0.22 200))",
                    color: "white",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display font-bold text-xl mb-1">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span className="font-display font-black text-4xl gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm mb-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm"
                  >
                    <Check
                      size={15}
                      className="shrink-0"
                      style={{
                        color: plan.popular
                          ? "oklch(0.72 0.22 295)"
                          : "oklch(0.65 0.22 200)",
                      }}
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-bold ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon-purple"
                    : "border border-border/60 bg-transparent hover:bg-muted/50 text-foreground"
                }`}
                onClick={() => window.open("https://discord.com", "_blank")}
                data-ocid={`premium.plan.${i + 1}.primary_button`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
