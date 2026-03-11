import CommandsSection from "../components/CommandsSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PremiumSection from "../components/PremiumSection";
import UpdatesSection from "../components/UpdatesSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <UpdatesSection />
        <CommandsSection />
        <PremiumSection />
      </main>
      <Footer />
    </div>
  );
}
