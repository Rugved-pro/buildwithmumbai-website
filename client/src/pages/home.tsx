import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import IntroSection from "@/components/intro-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen page-enter">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <Footer />
    </div>
  );
}
