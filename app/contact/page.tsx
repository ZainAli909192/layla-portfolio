import ContactCards from "@/components/contact/contactcards";
import RolesAvailabilityStrip from "@/components/contact/roles_availability_strip";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactCards />
      <RolesAvailabilityStrip />
      <FinalCTA />
      <Footer />
    </>
  );
}
