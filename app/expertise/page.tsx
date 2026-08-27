import ExpertiseHero from "@/components/expertise/ExpertiseHero";
import CoreExpertise from "@/components/expertise/CoreExpertise";
import HowIWork from "@/components/expertise/HowIWork";
import Header from "@/components/Header";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function ExpertisePage() {
  return (
    <>
    <Header />
      <ExpertiseHero />
      <CoreExpertise />
      <HowIWork />
      <FinalCTA />
      <Footer />
    </>
  );
}