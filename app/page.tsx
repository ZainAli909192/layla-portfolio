import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CareerSnapshot from "@/components/CareerSnapshot";
import AboutIdentity from "@/components/AboutIdentity";
import ExpertiseProcess from "@/components/ExpertiseProcess";
import SelectedCaseStudies from "@/components/SelectedCaseStudies";
import ImpactNumbers from "@/components/ImpactNumbers";
import EventJourney from "@/components/EventJourney";
import CareerJourney from "@/components/CareerJourney";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import CurrentlyManaging from "@/components/CurrentlyManaging";
import FloatingContact from "@/components/connect.jsx";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <CareerSnapshot />
      <AboutIdentity />
      <CurrentlyManaging />
      <ExpertiseProcess />
      <FinalCTA />
      <FloatingContact /> 
      <Footer />
    </main>
  );
}
