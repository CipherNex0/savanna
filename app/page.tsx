import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Experiences from "@/components/Experiences";
import SignatureJourneys from "@/components/SignatureJourneys";
import Stays from "@/components/Stays";
import TravelWithPurpose from "@/components/TravelWithPurpose";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <Experiences />
      <SignatureJourneys />
      <Stays />
      <TravelWithPurpose />
      <Footer />
    </main>
  );
}