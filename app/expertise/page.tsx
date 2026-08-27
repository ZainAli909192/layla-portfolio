import ExpertiseHero from "@/components/expertise/ExpertiseHero";
import CoreExpertise from "@/components/expertise/CoreExpertise";
import HowIWork from "@/components/expertise/HowIWork";
import Header from "@/components/Header";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ProfessionalDevelopment from  "@/components/expertise/ProfessionalDevelopment";
     
export default function ExpertisePage() {
  return (
    <>
    <Header />
      <ExpertiseHero />
      <CoreExpertise />
      <ProfessionalDevelopment />
      <HowIWork />
      <FinalCTA />
      <Footer />
    </>
  );
}