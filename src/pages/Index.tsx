import Navbar from "@/components/presentation/Navbar";
import HeroSection from "@/components/presentation/HeroSection";
import AboutSection from "@/components/presentation/AboutSection";
import PromisesSection from "@/components/presentation/PromisesSection";
import ChallengesSection from "@/components/presentation/ChallengesSection";
import SolutionsSection from "@/components/presentation/SolutionsSection";
import DashboardSection from "@/components/presentation/DashboardSection";
import ImpactSection from "@/components/presentation/ImpactSection";
import StatsSection from "@/components/presentation/StatsSection";
import WhyWinSection from "@/components/presentation/WhyWinSection";
import StatusSection from "@/components/presentation/StatusSection";
import FooterSection from "@/components/presentation/FooterSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PromisesSection />
      <ChallengesSection />
      <SolutionsSection />
      <DashboardSection />
      <ImpactSection />
      <StatsSection />
      <WhyWinSection />
      <StatusSection />
      <FooterSection />
    </main>
  );
};

export default Index;