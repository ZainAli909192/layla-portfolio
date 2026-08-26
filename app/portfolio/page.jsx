import PortfolioHero from "@/components/portfolio/PortfolioHero";
import TheLabelConceptCaseStudy from "@/components/portfolio/TheLabelConceptCaseStudy";
import Header from "@/components/Header";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/connect.jsx";
import NuitCollectionCaseStudy from "@/components/portfolio/NuitCollectionCaseStudy"

export default function PortfolioPage() {
  return (
    <>
    <Header />
      <PortfolioHero />
      <TheLabelConceptCaseStudy />
      <NuitCollectionCaseStudy />
       <FinalCTA />
      <FloatingContact /> 
      <Footer />
    </>
  );
}